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

    // Force mainField "name" pour le relation picker expertise DANS la config du Projet
    // (le mainField d'une relation est stocké côté propriétaire de la relation, pas côté cible)
    await strapi.db.connection.raw(`
      UPDATE strapi_core_store_settings
      SET value = JSON_SET(value, '$.metadatas.expertise.edit.mainField', 'name')
      WHERE key = 'plugin_content_manager_configuration_content_types::api::projet.projet'
    `);
  },
};
