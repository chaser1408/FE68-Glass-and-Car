import React, { Component } from "react";
import style from "./Car.module.css";

export default class CarFeature extends Component {
    render() {
        const { carInfo } = this.props;
        const {
            color,
            price,
            engineType,
            displacement,
            horsepower,
            torque,
            redline,
        } = carInfo;
        return (
            <div>
                <table className="table table-bordered px-3 py-3 mt-3">
                    <thead>
                        <tr>
                            <th
                                className={`text-left text-normal ${style.featureText}`}
                                colSpan="2"
                                scope="col"
                            >
                                Exterior Color
                            </th>
                        </tr>
                    </thead>
                    <tbody className={`mx-2 my-2`}>
                        <tr>
                            <td
                                className={`text-left ${style.featureHead}`}
                                colSpan="2"
                            >
                                See More LX Features
                            </td>
                        </tr>

                        <tr>
                            <td>Color</td>
                            <td>{color}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Engine Type</td>
                            <td>{engineType}</td>
                        </tr>
                        <tr>
                            <td>Displacement</td>
                            <td>{displacement}</td>
                        </tr>
                        <tr>
                            <td>Horse-power (SAE net)</td>
                            <td>{horsepower}</td>
                        </tr>
                        <tr>
                            <td>Torque (SAE net)</td>
                            <td>{torque}</td>
                        </tr>
                        <tr>
                            <td>Redline</td>
                            <td>{redline}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
