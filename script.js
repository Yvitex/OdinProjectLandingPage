
window.addEventListener("DOMContentLoaded", wait);

function wait(){
    setTimeout(function(){
        document.getElementById("hidden").classList.add("hutao-bg");
        document.getElementById("hidden").classList.add("baal-bg");
        document.getElementById("hidden").classList.add("frishcl-bg");}, 4000);
    
}

const ARRAY_CHAR = ["Fischl", "Baal", "Hu_Tao"];
let index = true;
let f = 18000;
let b = 9000;
let h = 5000;

const top_bg = document.getElementById("top-background");
const lower_bg = document.getElementById("lower-bg-change");
const btn = document.getElementById("btn-start");
const quote = document.getElementById("quote");
const disappear = document.getElementById("will-disappear");
const upper = document.getElementById("upper");
const inner_text = document.getElementById("they-say");
const character_in_quote = document.getElementById("character");


/*
let x = true;
let bgm = new Audio();
bgm.src = "./Msc/Song_of_innocence.mp3";
if(x == true){
    bgm.play();
}
*/

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
    btn.disabled = true;
    quote.classList.add("quote-container-switch");
    disappear.style.visibility = "hidden";
    document.getElementById("upper").classList.remove("environment-bg-low");
    switch(name){

        case "Fischl": setTimeout(function(){btn.disabled = false}, 20000);
        Fischl_timeout();
        top_bg.classList.add("frishcl-bg");  
        lower_bg.classList.add("frishl-light-bg");
        inner_text.innerText = "Oh, the sun's out.. *cough*. Um... this meteorological transformation is most splendid! Like a felicitous twist of fate in the face of certain doom ";
        character_in_quote.innerHTML = "~Fischl";
        break;

        case "Baal": setTimeout(function(){btn.disabled = false}, 11000);
        Baal_timeout();
        top_bg.classList.add("baal-bg");
        lower_bg.classList.add("violet-baal-bg");
        inner_text.innerText = "Inactivity serves no purpose whatsoever. Hmph";
        character_in_quote.innerHTML = "~Baal";
        break;

        case "Hu_Tao": setTimeout(function(){btn.disabled = false}, 8000);
        Hu_Tao_timeout();
        top_bg.classList.add("hutao-bg");
        lower_bg.classList.add("hutao-red-bg");
        inner_text.innerText = "*sigh* What a bummer...";
        character_in_quote.innerHTML = "~Hu Tao";
        break; 
    }

    //Hard coded timeout functions to enable and re-enable background and other css changes

    function Hu_Tao_timeout() {
        setTimeout(function () { top_bg.classList.remove("hutao-bg"); }, h);
        setTimeout(function () { lower_bg.classList.remove("hutao-red-bg"); }, h);
        setTimeout(function () { quote.classList.remove("quote-container-switch"); }, h);
        setTimeout(function () { disappear.style.visibility = "visible"; }, h);
        setTimeout(function () { upper.classList.add("environment-bg-low")}, h);
    }

    function Baal_timeout() {
        setTimeout(function () { top_bg.classList.remove("baal-bg"); }, b);
        setTimeout(function () { lower_bg.classList.remove("violet-baal-bg"); }, b);
        setTimeout(function () { quote.classList.remove("quote-container-switch"); }, b);
        setTimeout(function () { disappear.style.visibility = "visible"; }, b);
        setTimeout(function () { upper.classList.add("environment-bg-low")}, b);
    }

    function Fischl_timeout() {
        setTimeout(function () { top_bg.classList.remove("frishcl-bg"); }, f);
        setTimeout(function () { lower_bg.classList.remove("frishl-light-bg"); }, f);
        setTimeout(function () { quote.classList.remove("quote-container-switch"); }, f);
        setTimeout(function () { disappear.style.visibility = "visible"; }, f);
        setTimeout(function () { upper.classList.add("environment-bg-low")}, f);
    }
}






