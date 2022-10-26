import React, {useState} from "react";


function Main () {

    const [metric, setmetric] = useState(0);
    const dadAlert = document.getElementById('dadjoke');

    function changeBackground(r,b) {
        document.querySelector('.thermo').style.background = `rgb(${r}, 0, ${b})`;
    }

    function percentage(num, per){return Math.round((num/100)*per);}

    const tempup = () => {

        let coretemp = eval(metric + 1);
        setmetric(coretemp);
        let percent = percentage(255, metric);
        let red = percent;
        let blue = 255 - percent;
        changeBackground(red, blue);
        dadAlert.classList.toggle('fade');
    }

    const tempdown = () => {

        let coretemp = eval(metric - 1);
        setmetric(coretemp);
        let percent = percentage(255, metric);
        let red = percent;
        let blue = 255 - percent;
        changeBackground(red, blue);
        dadAlert.classList.toggle('fade');
    }

    let fahrenheit = Math.round(metric *  9 / 5 + 32);

    const tempDoes = () =>{
    
        let factIs = "Water freezes."
        if (metric < 0){
            factIs = "It's really cold."
        } else if (metric ===0){
            factIs = "Water freezes."
        } else if (metric < 37){
            factIs = "It's colder than your body."
        } else if (metric >= 37 && metric < 39){
            factIs = "Normal body temp."
        } else if (metric >= 39 && metric <= 45){
            factIs = "You should see a doctor."
        } else if (metric > 45 && metric < 57){
            factIs = "A doctor probably isn't gonna help."
        } else if (metric === 57){
            factIs = "Hottest temperature recorded on earth."
        }  else if (metric > 57 && metric < 100){
            factIs = "The global warming fad is reducing my heating bills!"
        } else if (metric === 100){
            factIs = "Water boils."
        } else if (metric > 100){
            factIs = "We don't know what happens after this."
        }
        return factIs;
    }

    const tempFact = tempDoes();

    return(
        <div className="thewall">
            <div className="thermo">
                <div className="display">
                    <div className="facts">
                       <p>{tempFact}</p>
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
                    <div className="dadalert">
                        <p id="dadjoke">
                            Dad's around the world know you've touched the thermostat!
                        </p>
                    </div>
                </div>
                <div className="controls">
                    <div>
                        <h2>hotter</h2>
                        <button className="hot" onClick={()=>{tempup()}}>
                            +
                        </button>
                    </div>
                    <div>
                        <h2>colder</h2>
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