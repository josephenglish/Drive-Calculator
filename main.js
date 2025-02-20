let calcbutton = document.getElementById("cal");
calcbutton.addEventListener("click", displayTime);



function displayTime() {
    let distance = document.getElementById("d").value;
    let speed = document.getElementById("s").value;


    function calculate(_distance, _speed) {
        let time = Number(_distance) / Number(_speed);
        let minutes = 60;
        let timeMinutes = time * minutes;
        return Math.round(timeMinutes);
    }

    const driveTime = calculate(distance, speed);
    if(driveTime === NaN) {
        document.getElementById("t").innerText = `${driveTime} minutes`;

    } else {
        document.getElementById("t").innerText = `${driveTime} minutes`;

    }
    
    console.log("trigger");
}


let clearbtn = document.getElementById("c");
clearbtn.addEventListener("click", clear);


function clear() {
    console.log("trigger");
    document.getElementById("d").value = '';
    document.getElementById("s").value = '';
}
