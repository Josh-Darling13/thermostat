import React from "react";

export default function Main(){


    return(
        <div className="thewall">
            <div className="thermo">
                <div className="display">
                    <div className="facts">
                       <p> Water boils</p>
                    </div>
                    <div className="temp">
                        {/* add divs here */}
                    <h1>
                        <span className="celci">
                            C
                        </span>°

                        <span className="faren">
                            F
                        </span>°
                    </h1>
                    </div>


                    <div className="dad-alert">
                        <p>
                            Dad senses around the world are tingling now that you've touched the thermostat!
                        </p>
                    </div>
                </div>
                <div className="controls">
                    <div className="hot">
                        <p>
                            +
                        </p>
                        </div>
                    <div className="cold">
                        <p>
                            -
                        </p>
                        </div>
                </div>
            </div>
        </div>
    )
}