export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle root path
    if (url.pathname === '/') {
      return env.ASSETS.fetch(request);
    }

    try {
      // Try to serve static assets
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If static asset is not found, try to serve index.html
      return new Response(await env.ASSETS.fetch('/index.html'), {
        headers: { 'content-type': 'text/html;charset=UTF-8' },
      });
    }
  },
};
