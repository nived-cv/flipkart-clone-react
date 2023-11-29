export type HeaderType = {
  header: null | {
    logo: string;
    search_placeholder: string;
    menu_items: {
      text: string;
      icon: string;
      link: string;
      options: {
        text: string;
        icon: string;
        link: string;
      }[];
    }[];
  };
};

export type MenuItemsType =
  | {
      text: string;
      icon: string;
      link: string;
      options: {
        text: string;
        icon: string;
        link: string;
      }[];
    }[];
