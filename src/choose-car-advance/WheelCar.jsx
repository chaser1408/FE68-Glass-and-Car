/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import style from "./Car.module.css";
import Wheel from "./Wheel";

export default class WheelCar extends Component {
    render() {
        const { dataWheel, handleChangeWheel } = this.props;

        return (
            <div>
                <div className="card mb-5 mt-3" style={{}}>
                    <div className={`card-header ${style.price} text-left`}>
                        Wheels
                    </div>
                    <ul className="list-group list-group-flush mt-2 mb-2">
                        {dataWheel.map((carWheel, idx) => {
                            // const { img, title, price } = carWheel;
                            return (
                                <Wheel
                                    key={idx}
                                    carWheel={carWheel}
                                    handleChangeWheel={handleChangeWheel}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
