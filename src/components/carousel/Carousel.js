/*
 * Project:
 * Created Date: Friday May 10th 2019
 * Author: ZJ(zhengjiang151@qq.com)
 * -----
 * Last Modified: Friday May 10th 2019 4:00:50 pm
 * Modified By: the developer formerly known as zhengjiang at <you@you.you>
 * -----
 * Description: 走马灯
 */
import React, { Component } from "react";
import "./styles.less";
const pages = ["5", 1, 2, 3, 4, 5, "1"];
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        };
    }

    timing;
    type;
    canChange = true;
    setCurrent = current => {
        this.canChange = false;
        this.setState(
            {
                current
            },
            () => {
                this.timing && clearInterval(this.timing);
                if (current == pages.length - 1) {
                    this.timing = setInterval(() => {
                        this.setState({
                            current: 1
                        });

                        clearInterval(this.timing);
                    }, 300);
                }
                if (current == 0) {
                    this.timing = setInterval(() => {
                        this.setState({
                            current: pages.length - 2
                        });
                        clearInterval(this.timing);
                    }, 300);
                }

                setTimeout(() => {
                    this.canChange = true;
                }, 300);
            }
        );
    };

    prev = () => {
        const { current } = this.state;
        this.type = "prev";
        this.canChange && this.setCurrent(current - 1);
    };
    next = () => {
        const { current } = this.state;
        this.type = "next";
        this.canChange && this.setCurrent(current + 1);
    };

    render() {
        const { current } = this.state;
        const len = pages.length;
        const width = len * 500;
        const translateX = -current * 500;
        let transition = "all 300ms";
        if (this.type == "prev") {
            transition = current == len - 2 ? "none" : "all 300ms";
        }
        if (this.type == "next") {
            transition = current == 1 ? "none" : "all 300ms";
        }
        return (
            <div style={{ width: 500, margin: "auto" }}>
                <div className="bie-carousel-content">
                    <div
                        className="bie-carousel-wrap"
                        style={{
                            width,
                            transform: `translateX(${translateX}px)`,
                            transition
                        }}
                    >
                        {pages.map((item, index) => (
                            <div className="bie-carousel-page" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div onClick={this.prev}>prev</div>
                <div onClick={this.next}>next</div>
            </div>
        );
    }
}
export default Carousel;
