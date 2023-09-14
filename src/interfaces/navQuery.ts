export type NavQuery = {
  menus: Menus;
  generalSettings: GeneralSettings;
};

export type GeneralSettings = {
  title: string;
  url: string;
  description: string;
};

export type Menus = {
  nodes: MenusNode[];
};

export type MenusNode = {
  name: string;
  menuItems: MenuItems;
};

export type MenuItems = {
  nodes: MenuItemsNode[];
};

export type MenuItemsNode = {
  uri: string;
  url: string;
  order: number;
  label: string;
};
