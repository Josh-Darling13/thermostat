import React, {Component, useState} from "react";



function Main () {

   
    const [metric, setmetric] = useState(0);


    // 
    
    function changeBackground(r,b) {
        // document.body.style.background = `rgb(${r}, 0, ${b})`;
        document.querySelector('.thermo').style.background = `rgb(${r}, 0, ${b})`;
     }

    function percentage(num, per){return Math.round((num/100)*per);}

    const tempup = () => {

        let coretemp = eval(metric + 1);
        setmetric(coretemp);
        console.log(coretemp);
        console.log(`percent THIS is HOT? ${percentage(255, metric) }`);
        let percent = percentage(255, metric);
        let red = percent;
        let blue = 255 - percent;

        changeBackground(red, blue);
    }

    const tempdown = () => {

        let coretemp = eval(metric - 1);
        setmetric(coretemp);
        console.log(coretemp);
        console.log(`percent THIS is Cold: ${percentage(255, metric) }`);
        let percent = percentage(255, metric);
        let red = percent;
        let blue = 255 - percent;
        changeBackground(red, blue);
    }
    let fahrenheit = Math.round(metric * .5556 + 32);


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
                                {metric}C°
                            </span>
                            /
                            <span className="fahren">
                                {fahrenheit}F°
                            </span>
                        </h1>
                    </div>
                    <div className="dad-alert">
                        <p>
                            Dad's around the world know you've touched the thermostat!
                        </p>
                    </div>
                </div>
                <div className="controls">
                    <div>
                        hotter
                        <button className="hot" onClick={()=>{tempup()}}>
                            +
                        </button>
                    </div>
                    <div>
                        colder
                        <button className="cold" onClick={()=>{tempdown()}}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;