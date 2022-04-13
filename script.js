const ARRAY_CHAR = ["Fischl", "Baal", "Hu_Tao"];
let index = true;

function clickers(){ 
    document.getElementById("ch-bg").classList.add("black-bg");
    if(index == true){
        let num = Math.floor(Math.random() * 3);
        voice(ARRAY_CHAR[num]);
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
    switch(name){

        case "Fischl": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 20000);
        setTimeout(function(){document.getElementById("top-background").classList.remove("frishcl-bg")}, 18000);
        document.getElementById("top-background").classList.add("frishcl-bg");  
        break;

        case "Baal": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 11000);
        setTimeout(function(){document.getElementById("top-background").classList.remove("baal-bg")}, 9000);
        document.getElementById("top-background").classList.add("baal-bg");
        break;

        case "Hu_Tao": setTimeout(function(){document.getElementById("btn-start").disabled = false}, 8000);
        setTimeout(function(){document.getElementById("top-background").classList.remove("hutao-bg")}, 7000);
        document.getElementById("top-background").classList.add("hutao-bg");
        break; 
    }
}



