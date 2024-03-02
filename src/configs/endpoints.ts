export const endpoints = {
  menuManager: {
    menu: {
      create: 'menu/create',
      edit: 'menu/update',
      delete: 'menu/delete',
      list: 'menu/list',
      menuItem: 'menu/menu-item',
      rearrange: 'menu/rearrange',
    },
    category: {
      create: 'category/create',
      edit: 'category/update',
      delete: 'category/delete',
      list: 'category/list',
      getStaticData: 'category/getdata',
      categoryItem: 'category/category-item',
    },
  },
  websiteBuilder: {
    website: {
      get: 'website',
      templates: 'website/templates',
      upload: 'website/upload',
    },
  },
  file: {
    uploadFile: 'filestore/uploadFile',
    getImageFiles: 'filestore/getAllImages',
  },
};

export const queryKey = {
  menuManager: {
    menu: {
      // create: 'CreateMenu',
      // update: 'UpdateMenu',
      // delete: 'DeleteMenu',
      Menus: 'Menus',
      Menu: 'Menu',
    },
    category: {
      // create: 'create',
      // edit: 'edit',
      // delete: 'delete',
      categories: 'Categories',
      category: 'Category',
      staticData: 'StaticFormData',
    },
  },
  websiteBuilder: {
    website: {
      get: 'JsonData',
      templates: 'templates',
    },
  },
};

export const TENANT_HEADER = 'x-tenant-id';
