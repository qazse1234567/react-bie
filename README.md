# react-bie
react component

***
开发过程中写的 react 组件；逐渐更新
***

# Installing
```
npm install --save react-bie
```
or
```
yarn add react-bie
```

# 目前实现的组件

[FullPage]

```
import React, { Component } from "react";
import { FullPage } from "react-bie";
import "./styles.less";
const Colors = ["#1bbc9b", "#4bbfc3", "#7baabe", "#ff9901"];
export default class FullPageExample extends Component {
    pageChange = page => {
        console.log(page);
    };

    render() {
        return (
            <div>
                <FullPage onChange={this.pageChange}>
                    {Colors.map(item => (
                        <div
                            key={item}
                            className="page"
                            style={{ backgroundColor: item }}
                        >
                            {item}
                        </div>
                    ))}
                </FullPage>
            </div>
        );
    }
}
```