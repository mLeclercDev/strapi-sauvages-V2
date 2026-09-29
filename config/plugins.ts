import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      sizeOptimization: true,
      autoOrientation: true,
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', '0.0.0.0'),
        port: env.int('SMTP_PORT', 1026),
        auth: {
          user: env('SMTP_USER', 'root'),
          pass: env('SMTP_PASS', 'root'),
        },
      },
      settings: {
        defaultFrom: 'no-reply@agence-sauvages.com',
        defaultReplyTo: 'hello@agence-sauvages.com',
      },
    },
  },
});

export default config;
