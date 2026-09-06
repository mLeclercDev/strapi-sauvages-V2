import type { Core } from '@strapi/strapi';
import sharp from 'sharp';
import fs from 'fs';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const uploadService = strapi.plugin('upload').service('upload');
    const originalUpload = uploadService.upload.bind(uploadService);

    uploadService.upload = async (args: any) => {
      const { files } = args;
      const fileArray = Array.isArray(files) ? files : [files];

      for (const file of fileArray) {
        if (file.mimetype?.startsWith('image/') && file.filepath) {
          try {
            const rotated = await sharp(file.filepath).rotate().toBuffer({ resolveWithObject: true });
            fs.writeFileSync(file.filepath, rotated.data);
            file.size = rotated.data.length / 1024;
            file.width = rotated.info.width;
            file.height = rotated.info.height;
          } catch (e) {
            // non-bloquant si Sharp échoue sur ce fichier
          }
        }
      }

      return originalUpload(args);
    };

    // Force mainField "name" pour le relation picker Expertise
    const store = strapi.store({ type: 'plugin', name: 'content-manager' });
    const key = 'configuration_content-types::api::expertise.expertise';
    const config = await store.get({ key }) as any;
    if (config?.settings) {
      config.settings.mainField = 'name';
      await store.set({ key, value: config });
    } else {
      await store.set({
        key,
        value: {
          uid: 'api::expertise.expertise',
          settings: {
            mainField: 'name',
            searchable: true,
            filterable: true,
            bulkable: true,
            pageSize: 10,
            defaultSortBy: 'name',
            defaultSortOrder: 'ASC',
          },
          metadatas: {},
          layouts: { list: [['name', 'createdAt']], edit: [[{ name: 'name', size: 6 }]] },
        },
      });
    }
  },
};
