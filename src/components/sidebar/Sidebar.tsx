import React from "react";
import commands from "../../utilities/cefExecute";
import SidebarItem from "./SidebarItem";
let a = false;
export default class Sidebar extends React.Component<any, {}> {
  public state = {
    activeItem: 0 as any,
  };

  render() {
    let menus = [
      { icon: "home", title: "Home" },
      { icon: "university", title: "Financeiro" },
      { icon: "users", title: "Área do cliente" },
      { icon: "thumbs-up", title: "Mídias Sociais" },
      { icon: "book-open", title: "Base de conhecimento" },
      { icon: "graduation-cap", title: "MBM Academy" },
      { icon: "comments", title: "Canais de comunicação" },
      { icon: "info-circle", title: "Sobre" },
    ];

    return (
      <>
        <div className="sidebar">
          <div className="sidebar-logo">MBM Solutions</div>
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
                    onClick={() => {
                      this.setState({ activeItem: index });
                      console.log(a === true ? "true" : "false");
                      a = !a;
                      // console.log(`alert(Clicou no menu )`);
                    }}
                    active={this.state.activeItem == index}
                    icon={item.icon}
                  />
                );
              })}
            </div>
            <div className="sidebar-img">
              <img src="/logo-branco.png" alt="" />
            </div>
          </div>
          {this.props.children}
        </div>
      </>
    );
  }
}
