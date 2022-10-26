import React, {useState} from "react";

export default function Main(){

    const[metric, setmetric] = useState('');


    // let fahrenheit = (celsius * .5556) + 32;

    const tempup = () => {

        

        return(

        )
    }

    return(
        <div className="thewall">
            <div className="thermo">
                <div className="display">
                    <div className="facts">
                       <p>Water boils</p>
                    </div>
                    <div className="temp">
                        <h1>
                            <span className="celci">
                                CCC</span>°
                            &nbsp;/&nbsp;
                            <span className="fahren">
                                FFF</span>°
                        </h1>
                    </div>
                    <div className="dad-alert">
                        <p>
                            Dad senses around the world are tingling now that you've touched the thermostat!
                        </p>
                    </div>
                </div>
                <div className="controls">
                    <div>
                        hotter
                        <button className="hot" onClick={tempup}>
                            +
                        </button>
                    </div>
                    <div>
                        colder
                        <button className="cold">
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}