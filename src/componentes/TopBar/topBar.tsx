import classNames from "classnames";
import React from "react";
import IconInput from "../iconInput/input";
export default class Topbar extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div
          className={classNames("topbar", {
            "is-open": this.props.isSidebarOpen,
          })}
        >
          <div className="topbar-content">
            <div className="topbar-action">
              <div className="topbar-action-list">0001-TIXINHA COMPUTER</div>
              <div className="topbar-action-search">
                <IconInput></IconInput>
              </div>
            </div>
            <div className="topbar-profile">
              <div className="topbar-profile-info">
                <div className="topbar-profile-img">
                  <img src="https://i.pravatar.cc/200" alt="" />
                  <div className="topbar-profile-notification-icon">9</div>
                </div>
                <div className="topbar-profile-name">Joao</div>
              </div>
              <div className="topbar-profile-icon">
                <i className="fas fa-fw fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
