
'use strict';
module.exports = () => {
  return async function(ctx, next) {
    console.log('[DEBUG] request: %s %s %j',
      ctx.request.method,
      ctx.request.url, {
        headers: ctx.headers,
        params: ctx.params,
        query: ctx.request.query,
        body: ctx.request.body,
      });

    const startTime = Date.now();
    await next();
    const endTime = Date.now();
    console.log('[DEBUG] response: %s %s %d %j %dms',
      ctx.request.method,
      ctx.request.url,
      ctx.status,
      ctx.body, endTime - startTime);
  };
};

