/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class GlassImage extends Component {
    render() {
        const { glass, handleChangeGlass } = this.props;
        const { url } = glass;
        return (
            <div className="col-2" style={{ paddingBottom: "30px" }}>
                <div className="card">
                    <img
                        onClick={() => handleChangeGlass(url)}
                        className="card-img-top"
                        src={`./glassesImage/${url}`}
                        width="150px"
                    />
                </div>
            </div>
        );
    }
}
