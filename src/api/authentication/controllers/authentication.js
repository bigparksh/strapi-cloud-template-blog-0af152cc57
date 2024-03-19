'use strict';

/**
 * authentication controller
 */

module.exports = {
  async login(ctx) {
    try {
      const {phoneNumber, password} = ctx.request.body;
      ctx.params.provider = 'local';
      ctx.request.body.identifier = `${phoneNumber}@tuneit.io`;
      return strapi.plugins['users-permissions'].controllers.auth.callback(ctx);
    } catch (e) {
      return ctx.send({error: 'Authentication failed'}, 401);
    }
  }
};
