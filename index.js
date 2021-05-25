let count = 1;
let k = 1;

function character(number, nameLabel, label, img, end) {
    var i = 0;

    while(i <= end){
        document.getElementById(label).value = parseInt(i/10000) + "mts";
        //Makes the character moves to the right
        document.getElementById(img).style.paddingLeft = 100 + parseInt(i/100) + "px";
        i++;
    }

    characterName = document.getElementById(nameLabel).value;
    podium(number);
    alert("The "+ place() + " place is: "+ characterName);
}

function execute() {
    document.getElementById("character1-img").style.display = "inline";
    document.getElementById("character2-img").style.display = "inline";
    document.getElementById("character3-img").style.display = "inline";
    document.getElementById("input1").style.display = "inline";
    document.getElementById("input2").style.display = "inline";
    document.getElementById("input3").style.display = "inline";
    document.getElementById("window").style.display = "none";
    Concurrent.Thread.create(character, 1, "inputCharacter1", "input1", "character1-img", 100000);
    Concurrent.Thread.create(character, 2, "inputCharacter2", "input2", "character2-img", 100000);
    Concurrent.Thread.create(character, 3, "inputCharacter3", "input3", "character3-img", 100000);
}

function podium(characterNumber) {
    if (count === 1) {
        noneCharacter("character" + characterNumber + "-img", "character" + characterNumber + "-win","input"+characterNumber);
        count++;
    } else {
        noneCharacter("character" + characterNumber + "-img","character" + characterNumber + "-lose","input"+characterNumber);
    }
}

function noneCharacter(element, element2,element3) {
        document.getElementById(element).style.display = "none";
        document.getElementById(element3).style.display = "none";
        document.getElementById(element2).style.display = "inline";
}

const place = () => k++;

