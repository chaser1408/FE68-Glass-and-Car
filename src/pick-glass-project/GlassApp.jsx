/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import style from "./Glass.module.css";
import GlassList from "./GlassList";
import glassList from "./data.json";

export default class GlassApp extends Component {
    state = {
        url: "model.jpg",
    };

    handleChangeGlass = (url) => {
        this.setState({
            url, // imgName: imgName
        });
    };

    render() {
        const { url } = this.state;

        return (
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-6">
                        <img src="./glassesImage/model.jpg" width="200px" />
                    </div>
                    <div className="col-6">
                        <img
                            className={`${style.glass}`}
                            src={`./glassesImage/${url}`}
                            width="100px"
                        />
                        <img
                            className={`${style.mainModel}`}
                            src="./glassesImage/model.jpg"
                            width="200px"
                        />
                    </div>
                </div>
                <GlassList
                    glassList={glassList}
                    handleChangeGlass={this.handleChangeGlass}
                />
            </div>
        );
    }
}
