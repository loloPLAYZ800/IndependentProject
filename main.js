function bmi(){
    window.location = "bmi.html";
}

function heart(){
    window.location = "heart.html";
}

function baef() {
    height = document.getElementById("height").value;
    weight = document.getElementById("width").value;
    one = height * height;
    bodymi = weight / one;
    console.log(bodymi);
    document.getElementById("bmi_ans").innerHTML = bodymi;
}

function bomb(){
    bombd = document.getElementById("pppp").value;
    bombed = bombd * 12;
    document.getElementById("foot").innerHTML = bombed;
}

function back(){
    window.location = "index.html";
}



