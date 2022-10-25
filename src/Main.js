import React from "react";

export default function Main(){


    return(
        <div>
            <div className="thermo">
                <div className="display">
                    <div className="facts">
                        facts
                    </div>
                    <div className="temp">
                        <span className="celci">C</span>
                        <span className="faren">F</span>
                    </div>
                    <div className="dad-alert">
                        Dad senses around the world are tingling now that you've touched the thermostat!
                    </div>
                </div>
                <div className="controls">
                    <div className="hot">+</div>
                    <div className="cold">-</div>
                </div>
            </div>
        </div>
    )
}