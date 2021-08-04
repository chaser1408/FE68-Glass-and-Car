import React, { Component } from "react";
import CarLayout from "./CarLayout";
import PickColor from "./PickColor";
import CarFeature from "./CarFeature";
import WheelCar from "./WheelCar";

import dataInfo from "./dataInfo.json";
import dataWheel from "./dataWheel.json";

export default class CarApp extends Component {
    state = {
        // carInfo: { ...this.carInfo, srcImg: "images-black/images-black-1/" },
        carInfo: {
            id: 1,
            title: "Crystal Black",
            type: "Pearl",
            img: "./images/icons/icon-black.jpg",
            srcImg: "images-black/images-black-1/",
            color: "Black",
            price: "19,550",
            engineType: "In-Line 4-Cylinder",
            displacement: "1996 cc",
            horsepower: "158 @ 6500 rpm",
            torque: "138 lb-ft @ 4200 rpm",
            redline: "6700 rpm",
            wheels: [
                {
                    idWheel: 1,
                    srcImg: "images-black/images-black-1/",
                },
                {
                    idWheel: 2,
                    srcImg: "images-black/images-black-2/",
                },
                {
                    idWheel: 3,
                    srcImg: "images-black/images-black-3/",
                },
            ],
        },
    };

    handleChangeColor = (carInfo) => {
        // console.log(carInfo);
        const carInfoUpdate = carInfo;
        this.setState({
            carInfo: carInfoUpdate,
        });
    };

    handleChangeWheel = (id) => {
        const wheel = id;

        console.log(wheel);

        // - Em không biết có làm đúng hay không ạ, tại em có lỡ 1 buổi
        // - Thì cái logic của em hiện tại là cái state đang chứa 1 car,
        // cho dù mình không truyền hay click gì cũng có sẵn 1 car mặc định là object đầu tiên
        // - Cho nên mình chỉ cần cái id của bánh xe khi user click, gửi thông qua function này
        // - Lôi thằng cả trong state ra, gán 1 const trỏ thẳng vào mục wheels của car hiện tại
        // - Lấy cái đường dẫn của bánh xe thuộc car hiện tại ra rồi gán lại srcImg của chính nó
        // - Cập nhật lại state của car hiện tại.

        const presentCar = this.state.carInfo.wheels[--id];
        console.log(presentCar.srcImg);

        this.setState({
            carInfo: { ...this.state.carInfo, srcImg: presentCar.srcImg },
        });
    };

    render() {
        const { carInfo } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <CarLayout carInfo={carInfo} />
                    </div>
                    <div className="col-5">
                        <PickColor
                            dataInfo={dataInfo}
                            handleChangeColor={this.handleChangeColor}
                        />
                    </div>
                    <div className="col-7">
                        <CarFeature dataInfo={dataInfo} carInfo={carInfo} />
                    </div>
                    <div className="col-5">
                        <WheelCar
                            dataWheel={dataWheel}
                            handleChangeWheel={this.handleChangeWheel}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
