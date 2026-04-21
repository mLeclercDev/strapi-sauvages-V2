import type { Schema, Struct } from '@strapi/strapi';

export interface AgenceAgence extends Struct.ComponentSchema {
  collectionName: 'components_agence_agences';
  info: {
    displayName: 'Agence';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Item: Schema.Attribute.Component<'agence.agence-description-item', true>;
    Titre: Schema.Attribute.Component<'ui.titre', false>;
  };
}

export interface AgenceAgenceDescriptionItem extends Struct.ComponentSchema {
  collectionName: 'components_agence_agence_description_items';
  info: {
    displayName: 'Agence description item';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Titre: Schema.Attribute.String;
  };
}

export interface AgenceEquipeListing extends Struct.ComponentSchema {
  collectionName: 'components_agence_equipe_listings';
  info: {
    displayName: 'Equipe - Listing';
  };
  attributes: {
    EquipeListingItem: Schema.Attribute.Component<
      'agence.equipe-listing-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface AgenceEquipeListingItem extends Struct.ComponentSchema {
  collectionName: 'components_agence_equipe_listing_items';
  info: {
    displayName: 'Equipe Listing Item';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Signature ou baseline'>;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Nom: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Charlotte'>;
  };
}

export interface AgenceEquipePresentation extends Struct.ComponentSchema {
  collectionName: 'components_agence_equipe_presentations';
  info: {
    displayName: 'Equipe - pr\u00E9sentation';
  };
  attributes: {
    Catchline: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Chez nous, c\u2019est la force qui unit l\u2019\u00E9quipe, les talents, les projets et les clients. '>;
    EquipePresentationItem: Schema.Attribute.Component<
      'agence.equipe-presentation-item',
      true
    >;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Titre: Schema.Attribute.Component<'ui.titre', false>;
  };
}

export interface AgenceEquipePresentationItem extends Struct.ComponentSchema {
  collectionName: 'components_agence_equipe_presentation_items';
  info: {
    displayName: 'Equipe pr\u00E9sentation - item';
  };
  attributes: {
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Nom: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Un p\u00F4le Conseil'>;
  };
}

export interface AgenceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_agence_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'L\u2019agence'>;
    Texte: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface AgenceHistoire extends Struct.ComponentSchema {
  collectionName: 'components_agence_histoires';
  info: {
    displayName: 'Histoire';
  };
  attributes: {
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Description2: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Notre histoire'>;
    Titre: Schema.Attribute.Component<'ui.titre', false> &
      Schema.Attribute.Required;
  };
}

export interface ContactChampDeFormulaire extends Struct.ComponentSchema {
  collectionName: 'components_contact_champ_de_formulaires';
  info: {
    displayName: 'Champ de formulaire';
  };
  attributes: {
    Email: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'pierre.dubois@gmail.com'>;
    Intitule: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Nom / Pr\u00E9nom'>;
    Obligatoire: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Option: Schema.Attribute.Component<'contact.option', true> &
      Schema.Attribute.Required;
    TexteReponse: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Pierre Dubois'>;
    Type: Schema.Attribute.Enumeration<
      ['texte', 'mail', 'telephone', 'fichier', 'select']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'texte'>;
  };
}

export interface ContactFormulaire extends Struct.ComponentSchema {
  collectionName: 'components_contact_formulaires';
  info: {
    displayName: 'Formulaire';
  };
  attributes: {
    Champs: Schema.Attribute.Component<'contact.champ-de-formulaire', true>;
    TitreFormulaire: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'J\u2019ai un projet'>;
  };
}

export interface ContactHeroContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_hero_contacts';
  info: {
    displayName: 'Hero contact';
  };
  attributes: {
    IconBouton1: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    IconBouton2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    TexteBouton1: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'r\u00E9server un appel'>;
    TexteBouton2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'comment on peut vous aider ?'>;
    Titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact'>;
  };
}

export interface ContactOption extends Struct.ComponentSchema {
  collectionName: 'components_contact_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    Texte: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'strat\u00E9gie'>;
  };
}

export interface ExpertiseAncresItem extends Struct.ComponentSchema {
  collectionName: 'components_expertise_ancres_items';
  info: {
    displayName: 'Ancres item';
  };
  attributes: {
    Ancre: Schema.Attribute.String;
    Texte: Schema.Attribute.String;
  };
}

export interface ExpertiseExpertiseDescriptionSingle
  extends Struct.ComponentSchema {
  collectionName: 'components_expertise_expertise_description_singles';
  info: {
    displayName: 'Expertise description Single';
  };
  attributes: {
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Notre accompagnement strat\u00E9gique'>;
    Listes: Schema.Attribute.Blocks;
    Texte: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Titre: Schema.Attribute.Component<'ui.titre', false>;
    Titre2: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lorem ipsum'>;
  };
}

export interface ExpertiseHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_expertise_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    Description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'cr\u00E9ative, unie pour cr\u00E9er de l\u2019\u00E9motion depuis 20 ans. De la strat\u00E9gie \u00E0 la cr\u00E9ation.'>;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Item: Schema.Attribute.Component<'expertise.ancres-item', true>;
    Titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'expertises'>;
  };
}

export interface ExpertiseHeroSectionSingle extends Struct.ComponentSchema {
  collectionName: 'components_expertise_hero_section_singles';
  info: {
    displayName: 'Hero section Single';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Une vision strat\u00E9gique pour une prise de parole jamais en retard sur son temps.'>;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'conseil'>;
  };
}

export interface FooterFooterNavigation2 extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_navigation_2s';
  info: {
    displayName: 'Footer navigation 2';
  };
  attributes: {
    Texte: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface FooterFooterNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_navigation_items';
  info: {
    displayName: 'Footer Navigation Item';
  };
  attributes: {
    Item: Schema.Attribute.Component<'footer.liens', true>;
    Label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Connecter'>;
  };
}

export interface FooterLiens extends Struct.ComponentSchema {
  collectionName: 'components_footer_liens';
  info: {
    displayName: 'Liens';
  };
  attributes: {
    Blank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Texte: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Texte'>;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalBlogListing extends Struct.ComponentSchema {
  collectionName: 'components_global_blog_listings';
  info: {
    displayName: 'Blog listing';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    TexteDuLien: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Tout voir'>;
    Titre: Schema.Attribute.Component<'ui.titre', false>;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalCarouselDeLogo extends Struct.ComponentSchema {
  collectionName: 'components_global_carousel_de_logos';
  info: {
    displayName: 'Carousel de logo';
    icon: 'arrowRight';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    Titre: Schema.Attribute.Component<'ui.titre', false>;
  };
}

export interface GlobalExpertiseItem extends Struct.ComponentSchema {
  collectionName: 'components_global_expertise_items';
  info: {
    displayName: 'Expertise Item';
  };
  attributes: {
    Bouton: Schema.Attribute.Component<'ui.bouton', false>;
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Listes: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Conseil'>;
    PresenceBouton: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface GlobalExpertisesListing extends Struct.ComponentSchema {
  collectionName: 'components_global_expertises_listings';
  info: {
    displayName: 'Expertises listing';
  };
  attributes: {
    Bouton: Schema.Attribute.Component<'ui.bouton', false>;
    Item: Schema.Attribute.Component<'global.expertise-item', true> &
      Schema.Attribute.Required;
    Titre: Schema.Attribute.Component<'ui.titre', false>;
  };
}

export interface GlobalIntroImage extends Struct.ComponentSchema {
  collectionName: 'components_global_intro_images';
  info: {
    displayName: 'Intro + Image';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Texte: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface HeaderNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_header_navigation_items';
  info: {
    displayName: 'Navigation item';
  };
  attributes: {
    Texte: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Agence'>;
    Url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    Titre: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Agence cr\u00E9ative, unie pour cr\u00E9er de l\u2019\u00E9motion depuis 20ans. De la strat\u00E9gie \u00E0 la cr\u00E9ation.'>;
    Video: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface HomepageIntro extends Struct.ComponentSchema {
  collectionName: 'components_homepage_intros';
  info: {
    displayName: 'Intro';
    icon: 'quote';
  };
  attributes: {
    Bouton: Schema.Attribute.Component<'ui.bouton', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'L\u2019agence'>;
    Texte: Schema.Attribute.Blocks;
  };
}

export interface ManifesteHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_manifeste_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    Image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    Item: Schema.Attribute.Component<
      'manifeste.manifeste-hero-section-item',
      true
    >;
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'manifeste'>;
    Texte: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ManifesteManifesteHeroSectionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_manifeste_manifeste_hero_section_items';
  info: {
    displayName: 'Manifeste Hero Section Item';
  };
  attributes: {
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'On ne vend pas du r\u00EAve, \u2028on cr\u00E9e de la pertinence'>;
  };
}

export interface ManifesteMissions extends Struct.ComponentSchema {
  collectionName: 'components_manifeste_missions';
  info: {
    displayName: 'Missions';
  };
  attributes: {
    Item: Schema.Attribute.Component<'manifeste.missions-item', true>;
    Label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'entreprise \u00E0 mission'>;
    Texte: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ManifesteMissionsItem extends Struct.ComponentSchema {
  collectionName: 'components_manifeste_missions_items';
  info: {
    displayName: 'Missions Item';
  };
  attributes: {
    Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Icone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    Titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Entreprise \u00E0 Mission'>;
  };
}

export interface ProjetChiffres extends Struct.ComponentSchema {
  collectionName: 'components_projet_chiffres';
  info: {
    description: '';
    displayName: 'Chiffres';
  };
  attributes: {
    Chiffre: Schema.Attribute.String;
    Desc: Schema.Attribute.RichText;
  };
}

export interface ProjetChiffresSection extends Struct.ComponentSchema {
  collectionName: 'components_projet_chiffres_sections';
  info: {
    description: '';
    displayName: 'chiffres_section';
  };
  attributes: {
    Chiffres: Schema.Attribute.Component<'projet.chiffres', true>;
    Color: Schema.Attribute.Enumeration<
      [
        'red',
        'blue',
        'orange',
        'green',
        'violet',
        'yellow',
        'rose',
        'lightblue',
      ]
    >;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ProjetColorSection extends Struct.ComponentSchema {
  collectionName: 'components_projet_color_sections';
  info: {
    description: '';
    displayName: 'color_section';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<
      [
        'red',
        'blue',
        'orange',
        'green',
        'violet',
        'yellow',
        'rose',
        'lightblue',
      ]
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProjetSections extends Struct.ComponentSchema {
  collectionName: 'components_projet_sections';
  info: {
    description: '';
    displayName: 'sections';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ProjetServices extends Struct.ComponentSchema {
  collectionName: 'components_projet_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ProjetsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_projets_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'PROJETS'>;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    description: '';
    displayName: 'banner';
  };
  attributes: {
    texte: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Private;
  };
}

export interface SharedInfinite extends Struct.ComponentSchema {
  collectionName: 'components_banner_infinites';
  info: {
    description: '';
    displayName: 'infinite_banner';
  };
  attributes: {
    projets: Schema.Attribute.Relation<'oneToMany', 'api::projet.projet'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UiBouton extends Struct.ComponentSchema {
  collectionName: 'components_ui_boutons';
  info: {
    displayName: 'Bouton';
    icon: 'arrowRight';
  };
  attributes: {
    Blank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Icone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Texte: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface UiTitre extends Struct.ComponentSchema {
  collectionName: 'components_ui_titres';
  info: {
    displayName: 'Titre';
  };
  attributes: {
    HN: Schema.Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
    Logos: Schema.Attribute.Media<'images' | 'files', true>;
    Texte: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Votre titre'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'agence.agence': AgenceAgence;
      'agence.agence-description-item': AgenceAgenceDescriptionItem;
      'agence.equipe-listing': AgenceEquipeListing;
      'agence.equipe-listing-item': AgenceEquipeListingItem;
      'agence.equipe-presentation': AgenceEquipePresentation;
      'agence.equipe-presentation-item': AgenceEquipePresentationItem;
      'agence.hero-section': AgenceHeroSection;
      'agence.histoire': AgenceHistoire;
      'contact.champ-de-formulaire': ContactChampDeFormulaire;
      'contact.formulaire': ContactFormulaire;
      'contact.hero-contact': ContactHeroContact;
      'contact.option': ContactOption;
      'expertise.ancres-item': ExpertiseAncresItem;
      'expertise.expertise-description-single': ExpertiseExpertiseDescriptionSingle;
      'expertise.hero-section': ExpertiseHeroSection;
      'expertise.hero-section-single': ExpertiseHeroSectionSingle;
      'footer.footer-navigation-2': FooterFooterNavigation2;
      'footer.footer-navigation-item': FooterFooterNavigationItem;
      'footer.liens': FooterLiens;
      'global.blog-listing': GlobalBlogListing;
      'global.carousel-de-logo': GlobalCarouselDeLogo;
      'global.expertise-item': GlobalExpertiseItem;
      'global.expertises-listing': GlobalExpertisesListing;
      'global.intro-image': GlobalIntroImage;
      'header.navigation-item': HeaderNavigationItem;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.intro': HomepageIntro;
      'manifeste.hero-section': ManifesteHeroSection;
      'manifeste.manifeste-hero-section-item': ManifesteManifesteHeroSectionItem;
      'manifeste.missions': ManifesteMissions;
      'manifeste.missions-item': ManifesteMissionsItem;
      'projet.chiffres': ProjetChiffres;
      'projet.chiffres-section': ProjetChiffresSection;
      'projet.color-section': ProjetColorSection;
      'projet.sections': ProjetSections;
      'projet.services': ProjetServices;
      'projets.hero-section': ProjetsHeroSection;
      'shared.banner': SharedBanner;
      'shared.card': SharedCard;
      'shared.infinite': SharedInfinite;
      'shared.seo': SharedSeo;
      'ui.bouton': UiBouton;
      'ui.titre': UiTitre;
    }
  }
}
