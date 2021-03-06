/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import style from "./Car.module.css";
import Color from "./Color";

export default class PickColor extends Component {
    render() {
        const { dataInfo, handleChangeColor } = this.props;

        return (
            <div>
                <div className="card mb-5" style={{}}>
                    <div className={`card-header ${style.price} text-left`}>
                        Exterior Color
                    </div>
                    <ul className="list-group list-group-flush mt-2 mb-2">
                        {dataInfo.map((carInfo, idx) => {
                            return (
                                <Color
                                    key={idx}
                                    carInfo={carInfo}
                                    handleChangeColor={handleChangeColor}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
