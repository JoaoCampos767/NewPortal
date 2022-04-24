import React from "react";

interface IModuleProps {
  image: string;
  title: string;
  code: string;
}

class Module extends React.Component<IModuleProps, {}> {
  render() {
    return (
      <div className="module" data-title={this.props.title}>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default class Modules extends React.Component<any, {}> {
  static Item = Module;
  render() {
    return <div className="modules-wrapper">{this.props.children}</div>;
  }
}
