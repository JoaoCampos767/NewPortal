import React from "react";
import SidebarItem from "./SidebarItem";
export default class Sidebar extends React.Component<any, {}> {
  public state = {
    activeItem: 0 as any,
  };
  render() {
    let menus = [
      { icon: "home", title: "Home" },
      { icon: "university", title: "Financeiro" },
      { icon: "users", title: "Área de cliente" },
      { icon: "thumbs-up", title: "Mídias Sociais" },
      { icon: "book-open", title: "Base de conhecimento" },
      { icon: "graduation-cap", title: "MBM Academy" },
      { icon: "comments", title: "Canais de comunicação" },
      { icon: "info-circle", title: "Sobre" },
    ];
    return (
      <>
        <div className="sidebar">
          <div className="sidebar-logo">
            <i className="fab fa-fw fa-facebook-f"></i>
            {/* <a href="/"> */}
            {/* <img src="https://mbmsolutions.com.br/wp-content/webp-express/webp-images/uploads/2021/11/cropped-LogoBranco512x512-300x193.png.webp" alt="Logo" /> */}
            {/* </a> */}
          </div>
          <div
            className="sidebar-menu"
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
          >
            <div className="sidebar-menu-list">
              {menus.map((item, index) => {
                return (
                  <SidebarItem
                    title={item.title}
                    key={index}
                    onClick={() => this.setState({ activeItem: index })}
                    active={this.state.activeItem == index}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </div>
          {this.props.children}
        </div>
      </>
    );
  }
}
