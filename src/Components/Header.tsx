import { HeaderType, MenuItemsType } from "../CommonTypes/Header";
import "../Styles/Header.css";

export const Header = ({ header }: HeaderType) => {
  const mapMenuItems = (menuItems: MenuItemsType) => {
    return menuItems.map((items) => {
      return (
        <a href={items.link}>
          <div className={`${items.text} `}>
            <img src={items.icon} />
          </div>
        </a>
      );
    });
  };

  return (
    <div className="Header">
      <div className="logo">
        <img src={header?.logo} />
      </div>

      <div className="search">
        <input
          className="search-box"
          type="search"
          placeholder={header?.search_placeholder}
        />
      </div>

      <div className="products-section">
        {header ? mapMenuItems(header.menu_items) : "loading..."}
      </div>
    </div>
  );
};
