const ARRAY_CHAR = ["Fischl", "Baal", "Hu_Tao"];
let index = true;
let f = 18000;
let b = 9000;
let h = 5000;

// start on click
function clickers(){ 
    document.getElementById("ch-bg").classList.add("black-bg");
    if(index == true){
        let num = Math.floor(Math.random() * 3);
        voice(ARRAY_CHAR[num]);
    }
 
}

//Sounds on button click
function voice(x){
    let sounds = new Audio();   
    switch(x){
        case "Fischl": sounds.src= "./Msc/Fishcl_voice_2.mp3";
        sounds.play();
        environment("Fischl");  
        break;
        case "Baal": sounds.src= "./Msc/baal.mp3";
        sounds.play();
        environment("Baal");
        break;
        case "Hu_Tao": sounds.src= "./Msc/hutao.mp3";
        sounds.play();
        environment("Hu_Tao");
        break;
    }
}


// This call the environmental changes such as the backgrounds
function environment(name){
    document.getElementById("btn-start").disabled = true;
    document.getElementById("quote").classList.add("quote-container-switch");
    document.getElementById("will-disappear").style.visibility = "hidden";
    document.getElementById("upper").classList.remove("environment-bg-low");
    switch(name){

        case "Fischl": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 20000);
        Fischl_timeout();
        document.getElementById("top-background").classList.add("frishcl-bg");  
        document.getElementById("lower-bg-change").classList.add("frishl-light-bg");
        break;

        case "Baal": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 11000);
        Baal_timeout();
        document.getElementById("top-background").classList.add("baal-bg");
        document.getElementById("lower-bg-change").classList.add("violet-baal-bg");
        break;

        case "Hu_Tao": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 8000);
        Hu_Tao_timeout();
        document.getElementById("top-background").classList.add("hutao-bg");
        document.getElementById("lower-bg-change").classList.add("hutao-red-bg");
        break; 
    }

    //Hard coded timeout functions to enable and re-enable background and other css changes

    function Hu_Tao_timeout() {
        setTimeout(function () { document.getElementById("top-background").classList.remove("hutao-bg"); }, h);
        setTimeout(function () { document.getElementById("lower-bg-change").classList.remove("hutao-red-bg"); }, h);
        setTimeout(function () { document.getElementById("quote").classList.remove("quote-container-switch"); }, h);
        setTimeout(function () { document.getElementById("will-disappear").style.visibility = "visible"; }, h);
        setTimeout(function () {document.getElementById("upper").classList.add("environment-bg-low")}, h);
    }

    function Baal_timeout() {
        setTimeout(function () { document.getElementById("top-background").classList.remove("baal-bg"); }, b);
        setTimeout(function () { document.getElementById("lower-bg-change").classList.remove("violet-baal-bg"); }, b);
        setTimeout(function () { document.getElementById("quote").classList.remove("quote-container-switch"); }, b);
        setTimeout(function () { document.getElementById("will-disappear").style.visibility = "visible"; }, b);
        setTimeout(function () {document.getElementById("upper").classList.add("environment-bg-low")}, b);
    }

    function Fischl_timeout() {
        setTimeout(function () { document.getElementById("top-background").classList.remove("frishcl-bg"); }, f);
        setTimeout(function () { document.getElementById("lower-bg-change").classList.remove("frishl-light-bg"); }, f);
        setTimeout(function () { document.getElementById("quote").classList.remove("quote-container-switch"); }, f);
        setTimeout(function () { document.getElementById("will-disappear").style.visibility = "visible"; }, f);
        setTimeout(function () {document.getElementById("upper").classList.add("environment-bg-low")}, f);
    }
}



