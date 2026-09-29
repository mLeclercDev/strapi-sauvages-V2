/**
 * message controller
 */

import { factories } from '@strapi/strapi';

interface Reponse {
  label: string;
  type: string;
  value: string;
}

const NOTIFICATION_TO = 'hello@agence-sauvages.com';
const NOTIFICATION_FROM = 'no-reply@agence-sauvages.com';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildEmailHtml(entity: {
  formulaire: string;
  reponses: Reponse[];
  chips?: string[];
  acceptTerms?: boolean;
  acceptCommunications?: boolean;
}): string {
  const rows = (entity.reponses || [])
    .map(
      (r) =>
        `<tr><td><strong>${escapeHtml(r.label)}</strong></td><td>${escapeHtml(
          r.value
        ).replace(/\n/g, '<br/>')}</td></tr>`
    )
    .join('');

  const chipsRow = entity.chips?.length
    ? `<tr><td><strong>Sélection</strong></td><td>${escapeHtml(entity.chips.join(', '))}</td></tr>`
    : '';

  return `
    <p>Nouveau message reçu via le formulaire "${escapeHtml(entity.formulaire)}" du site.</p>
    <table cellpadding="6" cellspacing="0">
      ${rows}
      ${chipsRow}
      <tr><td><strong>Conditions acceptées</strong></td><td>${entity.acceptTerms ? 'Oui' : 'Non'}</td></tr>
      <tr><td><strong>Communications commerciales</strong></td><td>${entity.acceptCommunications ? 'Oui' : 'Non'}</td></tr>
    </table>
  `;
}

export default factories.createCoreController('api::message.message', ({ strapi }) => ({
  async create(ctx) {
    const entity = await strapi.service('api::message.message').create({
      data: ctx.request.body.data,
    });

    const replyTo = (entity.reponses as Reponse[] | undefined)?.find(
      (r) => r.type === 'mail'
    )?.value;

    try {
      await strapi.plugins['email'].services.email.send({
        to: NOTIFICATION_TO,
        from: NOTIFICATION_FROM,
        ...(replyTo ? { replyTo } : {}),
        subject: `Nouveau message sur le site internet (${entity.formulaire})`,
        html: buildEmailHtml(entity as any),
      });
    } catch (error) {
      // Le message est déjà enregistré : une panne SMTP ne doit pas faire
      // échouer la soumission du formulaire côté visiteur.
      strapi.log.error('[message] Échec de l\'envoi de l\'email de notification', error);
    }

    return { data: entity };
  },
}));
