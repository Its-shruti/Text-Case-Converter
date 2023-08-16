
//lower case
function lowerCase() {
    let inp = document.getElementById("tinp").value;
    let result = inp.toLowerCase();
    document.getElementById("tinp").value = result;
}



//Uper case
function upperCase() {
    let inp = document.getElementById("tinp").value;
    let result = inp.toUpperCase();
    document.getElementById("tinp").value = result;
}



//Clear
function clearTxt() {
    let inp = document.getElementById("tinp").value = "";
}



//Title case
function titleCase() {
    let inp = document.getElementById("tinp").value;
    let word = inp.split(" ")
    for (const i of word) {
        for (j == 0; j <= word[i].lenght; j++) {
            word[i] = word[i].charAt[0].toUpperCase();
        }
    }
}



//word count
function wordcount() {
    let sum = 0;
    let inp = document.getElementById("tinp").value;
    
}



//character count
function charcount() {
    let inp  = document.getElementById("tinp").value;
    let len = inp.split(" ").join("");
    let result = len.length;
    document.getElementById("tinp").value = result;
}




//Copy to clipboard
function copyToClip()
{
    let inp = document.querySelector("#tinp");
    let result = inp.select();
    document.execCommand('copy');
}




//Reverse Case
function reverseCase()
{
    let inp = document.getElementById("tinp").value;
    let inp_res = inp.split("");
    let rev = inp_res.reverse();
    let final_res = rev.join("")
    document.getElementById("tinp").value = final_res;
}




//Bold case
function boldCase()
{
    let inp = document.getElementById("tinp").style.fontWeight = "bold";
}






//Dark Theme
var r = document.querySelector(':root');
function darktheme() {
    r.style.setProperty('--con', '#0a0a5a');
    r.style.setProperty('--hed', '#00000033');
    r.style.setProperty('--body', '#090133');
    r.style.setProperty('--border', '#1a1ad7');
    r.style.setProperty('--text', 'white');
    r.style.setProperty('--bs', '#1919be');
    r.style.setProperty('--btn', 'white');
    r.style.setProperty('--varcon', '#b4b3b3');
    r.style.setProperty('--icon', '#090133');
    r.style.setProperty('--icon-col', '#090133');

}



//Light Theme
function lighttheme() {
    r.style.setProperty('--con', 'whitesmoke');
    r.style.setProperty('--hed', '#717489');
    r.style.setProperty('--body', 'white');
    r.style.setProperty('--border', '#717489');
    r.style.setProperty('--text', 'black');
    r.style.setProperty('--bs', 'none');
    r.style.setProperty('--btn', '#717489');
    r.style.setProperty('--varcon', 'black');
    r.style.setProperty('--icon', 'white');
    r.style.setProperty('--icon-col', 'gray');
}




