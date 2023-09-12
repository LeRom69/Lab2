let text = `Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. Deserunt ea 
earum incidunt minima nihil. Blanditiis 
consectetur cumque debitis delectus dolor 
dolorem dolorum, eos laboriosam, modi nemo, 
quasi quos sint voluptatibus!`;

let arrForSplit = text.split(' ');

let arrForEl = [];

//1
arrForEl.push(arrForSplit[12],arrForSplit[6],arrForSplit[18],arrForSplit[25]);
console.log(arrForEl);

//2
const elToLowerCase = text.toLowerCase();
console.log(elToLowerCase);

//3
for(let i = 0; i<arrForSplit.length;i++){
    if(arrForSplit[i].includes('in')) console.log(i);
}

//4
console.log(arrForSplit);

//5
console.log(arrForSplit.reverse().join(' '));

//6
function ucFirst(txt){
    let newTxt = txt.charAt(0).toUpperCase()+txt.slice(1);
    return newTxt;
}
console.log(ucFirst('some text'));