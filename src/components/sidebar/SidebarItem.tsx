import classNames from "classnames";
import React from "react";

interface ISidebarItemProps {
    icon?: string;
    active?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    title: string;
}

export default class SidebarItem extends React.Component<ISidebarItemProps, {}> {
    render() {
        return (
            <>
                <div
                    onClick={this.props.onClick}
                    className={classNames("sidebar-menu-item", {
                        active: this.props.active,
                    })}>
                    <div className="sidebar-menu-item-icon">
                        <i className={classNames("far fa-fw", "fa-" + (this.props.icon ?? "question"))}></i>
                    </div>
                    <div style={{
                        // fontSize: this.props.title?.length > 18 ? 12 : undefined
                    }} className="sidebar-menu-item-text">{this.props.title}</div>
                </div>
            </>
        );
    }
}
