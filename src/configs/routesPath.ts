const routesPath = {
  menuManager: {
    menu: {
      create: '/menu-manager/menu/create',
      edit: '/menu-manager/menu/edit',
      menus: '/menu-manager/menus',
    },
    category: {
      create: '/menu-manager/category/create',
      edit: '/menu-manager/category/edit',
      categories: '/menu-manager/categories',
    },
    item: {
      create: '/menu-manager/item/create',
      edit: '/menu-manager/item/edit',
      items: '/menu-manager/items',
    },
    modifierGroup: {
      create: '/menu-manager/modifier-group/create',
      edit: '/menu-manager/modifier-group/edit',
      modifierGroups: '/menu-manager/modifier-groups',
    },
    modifier: {
      create: '/menu-manager/modifier/create',
      edit: '/menu-manager/modifier/edit',
      modifiers: '/menu-manager/modifiers',
    },
    modifierOption: {
      create: '/menu-manager/modifier-option/create',
      edit: '/menu-manager/modifier-option/edit',
      modifierOptions: '/menu-manager/modifier-options',
    },
    tagsAllergen: {
      create: '/menu-manager/tags-allergen/create',
      edit: '/menu-manager/tags-allergen/edit',
      tagsAllergens: '/menu-manager/tags-allergens',
    },
  },
  login: '/login',
  home: '/home',
  sampleForm: '/menu-manager/menu/sample-form',
  marketing: '/marketing',
  websiteBuilder: {
    website: {
      create: '/website/create',
      index: '/website',
    },
  },
};

export default routesPath;
