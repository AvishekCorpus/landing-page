export interface MenuItem {
    name: string;
    route: string;
    submenu?: MenuItem[];
  }