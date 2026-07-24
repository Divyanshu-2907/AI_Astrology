import type { APIRoute } from 'astro';
import Razorpay from 'razorpay';
import { supabase } from '../../lib/supabase';

const razorpay = new Razorpay({
  key_id: import.meta.env.RAZORPAY_KEY_ID || 'placeholder_key',
  key_secret: import.meta.env.RAZORPAY_KEY_SECRET || 'placeholder_secret',
});

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const accessToken = cookies.get("sb-access-token");
    if (!accessToken) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken.value);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const body = await request.json();
    const plan = body.plan; // 'starseed' or 'cosmic_pro'
    
    let planId = '';
    if (plan === 'starseed') {
      planId = import.meta.env.RAZORPAY_PLAN_STARSEED || 'plan_placeholder_1';
    } else if (plan === 'cosmic_pro') {
      planId = import.meta.env.RAZORPAY_PLAN_COSMIC_PRO || 'plan_placeholder_2';
    } else {
      return new Response(JSON.stringify({ error: "Invalid plan" }), { status: 400 });
    }

    // In a real implementation, we would create a customer if they don't exist
    // and then create a subscription.
    
    // const subscription = await razorpay.subscriptions.create({
    //   plan_id: planId,
    //   customer_notify: 1,
    //   total_count: 12, // 1 year
    //   notes: {
    //     userId: user.id
    //   }
    // });

    // Mock response for development
    const mockSubscriptionId = 'sub_' + Math.random().toString(36).substring(7);

    return new Response(JSON.stringify({ 
      subscription_id: mockSubscriptionId,
      key_id: import.meta.env.RAZORPAY_KEY_ID || 'placeholder_key'
    }), { status: 200 });

  } catch (error: any) {
    console.error('Error creating subscription:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
