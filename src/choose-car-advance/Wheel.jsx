/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import style from "./Car.module.css";

export default class Wheel extends Component {
    render() {
        const { carWheel, handleChangeWheel } = this.props;

        const { idWheel, img, title, price } = carWheel;

        return (
            <div>
                <li
                    className={`mx-3 my-2 list-group-item ${style.crystal}`}
                    onClick={() => handleChangeWheel(idWheel)}
                >
                    <div className={`row`}>
                        <div className={`col-2 `}>
                            <img src={`${img}`} width="60px" />
                        </div>
                        <div className="col-10 text-left align-items-left">
                            <h5>{title}</h5>
                            <p className="my-0">${price}</p>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}
