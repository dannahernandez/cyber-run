
function character(number, nameLabel, label, img, end) {

    var i = 0;

    while(i <= end){
        document.getElementById(label).value = parseInt(i/10000) + "mts";
        //Makes the character moves to the right
        document.getElementById(img).style.paddingLeft = 100 + parseInt(i/100) + "px";
        i++;
        console.log(i);
    }
    characterName = document.getElementById(nameLabel).value;
    alert("The winner is: " + number + " - " + characterName);
}

function execute() {
    console.log("Holiwis")
    document.getElementById("character1-img").style.display = "inline";
    document.getElementById("character2-img").style.display = "inline";
    document.getElementById("character3-img").style.display = "inline";
    Concurrent.Thread.create(character, 1, "inputCharacter1", "input1", "character1-img", 100000);
    Concurrent.Thread.create(character, 2, "inputCharacter2", "input2", "character2-img", 100000);
    Concurrent.Thread.create(character, 3, "inputCharacter3", "input3", "character3-img", 100000);
}


