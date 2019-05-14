/*
 * Project: job
 * Created Date: Wednesday May 8th 2019
 * Author: ZJ(zhengjiang151@qq.com)
 * -----
 * Last Modified: Wednesday May 8th 2019 5:23:55 pm
 * Modified By: the developer formerly known as zhengjiang at <you@you.you>
 * -----
 * Description:
 */
import React, { Component } from "react";
import "./styles.less";

export default class Header extends Component {
    render() {
        return <header className="bie-page-header">{this.props.children}</header>;
    }
}
