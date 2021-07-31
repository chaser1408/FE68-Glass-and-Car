/* eslint-disable no-unreachable */
import React, { Component } from "react";
import GlassImage from "./GlassImage";

export default class GlassList extends Component {
    render() {
        const { glassList, handleChangeGlass } = this.props;
        return (
            <div className="mt-5">
                <h1 className="text-secondary text-center">
                    TRY GLASSES APP ONLINE
                </h1>

                <div className="row mt-5">
                    {glassList.map((glass, idx) => {
                        return (
                            <GlassImage
                                glass={glass}
                                key={idx}
                                handleChangeGlass={handleChangeGlass}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
