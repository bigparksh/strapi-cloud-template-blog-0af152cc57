module.exports = () => ({
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  // email: {
  //   config:{
  //     provider: 'sendmail',
  //     providerOptions: {},
  //     settings: {
  //       defaultFrom: 'no-reply@tuneit.io',
  //       defaultReplyTo: 'no-reply@tuneit.io',
  //     },
  //   },
  // }
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'smtp.gmail.com', //SMTP Host
        port: 465, //SMTP Port
        secure: true,
        username: 'bigparksh2@gmail.com',
        password: 'ezax mmag gvxb ymoq',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
      settings: {
        defaultFrom: 'no-reply@tuneit.io',
        defaultReplyTo: 'no-reply@tuneit.io',
      },
    },
  },
});
