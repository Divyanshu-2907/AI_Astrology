import type { APIRoute } from 'astro';
import crypto from 'crypto';
import { supabase } from '../../lib/supabase';

const secret = import.meta.env.RAZORPAY_WEBHOOK_SECRET || 'placeholder_secret';

export const POST: APIRoute = async ({ request }) => {
  try {
    const signature = request.headers.get('x-razorpay-signature');
    if (!signature) {
      return new Response('Missing signature', { status: 400 });
    }

    const bodyText = await request.text();
    
    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyText)
      .digest('hex');

    if (expectedSignature !== signature) {
      return new Response('Invalid signature', { status: 400 });
    }

    const payload = JSON.parse(bodyText);
    const event = payload.event;
    const subscription = payload.payload.subscription.entity;
    
    // We embedded userId in notes during subscription creation
    const userId = subscription.notes?.userId;
    
    if (!userId) {
        return new Response('No user id in notes', { status: 400 });
    }

    let status = '';
    let tier = null;
    let endDate = null;

    if (event === 'subscription.activated') {
        status = 'active';
        // In reality, check plan_id to determine tier
        tier = 'starseed'; // fallback
        if (subscription.plan_id === import.meta.env.RAZORPAY_PLAN_COSMIC_PRO) {
            tier = 'cosmic_pro';
        }
    } else if (event === 'subscription.cancelled') {
        status = 'cancelled';
        endDate = new Date(subscription.end_at * 1000).toISOString();
    } else if (event === 'subscription.completed') {
        status = 'expired';
    }

    if (status) {
        // Use service role key to bypass RLS for webhook
        const serviceClient = supabase; // In production, create client with service_role_key

        const updateData: any = {
            subscription_status: status,
            razorpay_subscription_id: subscription.id
        };

        if (tier) updateData.subscription_tier = tier;
        if (endDate) updateData.subscription_end_date = endDate;
        if (status === 'expired') updateData.subscription_tier = null;

        await serviceClient
            .from('profiles')
            .update(updateData)
            .eq('id', userId);
    }

    return new Response(JSON.stringify({ status: 'ok' }), { status: 200 });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return new Response('Webhook error', { status: 500 });
  }
};
