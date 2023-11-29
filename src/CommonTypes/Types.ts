export type fetchedData = {
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
  products_section?: {};
};
