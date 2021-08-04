/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import style from "./Car.module.css";

export default class Color extends Component {
    render() {
        const { carInfo, handleChangeColor } = this.props;
        const { title, type, img } = carInfo;
        return (
            <div>
                <li
                    className={`mx-3 my-2 list-group-item ${style.crystal}`}
                    onClick={() => handleChangeColor(carInfo)}
                >
                    <div className={`row`}>
                        <div className={`col-2 `}>
                            <img src={`${img}`} width="60px" />
                        </div>
                        <div className="col-10 text-left align-items-left">
                            <h5>{title}</h5>
                            <p className="my-0">{type}</p>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}
