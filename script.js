const ARRAY_CHAR = ["Fischl", "Baal", "Hu_Tao"];
let index = true;

function clickers(){ 
    document.getElementById("ch-bg").classList.add("black-bg");
    if(index == true){
        let num = Math.floor(Math.random() * 3);
        voice(ARRAY_CHAR[1]);
    }
 
}

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


function environment(name){
    document.getElementById("btn-start").disabled = true;
    document.getElementById("quote").classList.add("quote-container-switch");
    document.getElementById("will-disappear").style.visibility = "hidden";
    switch(name){

        case "Fischl": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 20000);
        setTimeout(function(){document.getElementById("top-background").classList.remove("frishcl-bg")}, 18000);
        setTimeout(function(){document.getElementById("lower-bg-change").classList.remove("frishl-light-bg")}, 18000);
        setTimeout(function (){ document.getElementById("quote").classList.remove("quote-container-switch")},18000);
        setTimeout(function(){document.getElementById("will-disappear").style.visibility = "visible"}, 18000);
        document.getElementById("top-background").classList.add("frishcl-bg");  
        document.getElementById("lower-bg-change").classList.add("frishl-light-bg");
        break;

        case "Baal": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 11000);
        setTimeout(function(){document.getElementById("top-background").classList.remove("baal-bg")}, 9000);
        setTimeout(function(){document.getElementById("lower-bg-change").classList.remove("violet-baal-bg")}, 9000);
        setTimeout(function(){document.getElementById("quote").classList.remove("quote-container-switch")}, 9000);
        setTimeout(function(){document.getElementById("will-disappear").style.visibility = "visible"}, 9000);
        document.getElementById("top-background").classList.add("baal-bg");
        document.getElementById("lower-bg-change").classList.add("violet-baal-bg");
        break;

        case "Hu_Tao": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 8000);
        setTimeout(function(){document.getElementById("top-background").classList.remove("hutao-bg")}, 7000);
        setTimeout(function(){document.getElementById("lower-bg-change").classList.remove("hutao-red-bg")}, 5000);
        setTimeout(function(){document.getElementById("quote").classList.remove("quote-container-switch")}, 5000);
        setTimeout(function(){document.getElementById("will-disappear").style.visibility = "visible"}, 5000);
        document.getElementById("top-background").classList.add("hutao-bg");
        document.getElementById("lower-bg-change").classList.add("hutao-red-bg");
        break; 
    }
}



