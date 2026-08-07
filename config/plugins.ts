import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      sizeOptimization: true,
      autoOrientation: true,
    },
  },
});

export default config;
