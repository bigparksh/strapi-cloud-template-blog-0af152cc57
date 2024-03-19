'use strict';

/**
 * authentication router
 */

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/authentication/login',
      handler: 'authentication.login',
      config: {
        controllers: [
          "api::authentication.authentication"
        ]
      }
    }
  ]
}
