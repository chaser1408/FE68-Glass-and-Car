/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class CarLayout extends Component {
    render() {
        const { carInfo } = this.props;
        const { srcImg } = carInfo;

        return (
            <div>
                <img src={`./images/${srcImg}civic-1.jpg`} className="w-100" />
                {/* <img src={`./${carWheel}`} className="w-100" /> */}
            </div>

            // <img
            //     src="./images/images-black/images-black-1/civic-1.jpg"
            //     className="w-100"
            // />

            // <div
            //     className="cloudimage-360"
            //     data-folder={`./images/${srcImg}`}
            //     data-filename={`civic-{index}.jpg`}
            //     // data-mage-list={`[
            //     //     ./images/${srcImg}civic-1.jpg,
            //     //     ./images/${srcImg}civic-2.jpg,
            //     //     ./images/${srcImg}civic-3.jpg,
            //     //     ./images/${srcImg}civic-4.jpg,
            //     //     ./images/${srcImg}civic-5.jpg,
            //     //     ./images/${srcImg}civic-6.jpg,
            //     //     ./images/${srcImg}civic-7.jpg,
            //     //     ./images/${srcImg}civic-8.jpg
            //     // ]`}
            //     data-amount="16"
            // ></div>

            // <div
            //     className="cloudimage-360"
            //     data-folder={`images/${srcImg}`}
            //     data-filename={`civic-{index}.jpg`}
            //     data-amount={36}
            // />
        );
    }
}
