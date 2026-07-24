import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.url);
  
  // If the pathname has a trailing slash (and isn't just '/'), redirect to the non-trailing slash version
  if (url.pathname.endsWith('/') && url.pathname !== '/') {
    url.pathname = url.pathname.slice(0, -1);
    return context.redirect(url.toString(), 301);
  }
  
  return next();
});
