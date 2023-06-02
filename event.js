const randomImage = document.getElementById("randomBackground");
const randomPhoto = document.getElementById("Background");

randomPhoto.addEventListener("click", randomClick);

//A function generating random numbers as the background color changes.
function randomClick(){
    const randomly = Math.floor(Math.random() * 50);

    if (randomly > 30){
        document.body.style.backgroundColor = "indigo";
        randomImage.style.fontSize = "4rem";
        randomImage.style.color = "green";
    }
    else if (randomly > 18){
        document.body.style.backgroundColor = "grey";
        randomImage.style.fontSize = "4rem";
        randomImage.style.color = "red";
    }
    else if (randomly > 11){
        document.body.style.backgroundColor = "orange";
        randomImage.style.fontSize = "4rem";
        randomImage.style.color = "chocolate";
    }
    else {
        document.body.style.backgroundColor = "bisque";
        randomImage.style.fontSize = "4rem";
        randomImage.style.color = "coral";
    }
    randomImage.innerHTML = randomly;
};