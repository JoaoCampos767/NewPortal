import classNames from "classnames";
import React from "react";
export default class IconInput extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div className="icon-input">
          <div className="icon-input-icon">
            <i className="fas fa-fw fa-search"></i>
          </div>
          <input placeholder="Pesquise aqui..." type="text" />
        </div>
      </>
    );
  }
}