function randomnumber(number){
    //let code = Math.random() * process.argv[2];
    //const floor = Math.floor(code);
    console.log(Math.floor(Math.random()* number));
    //console.log(number);
}
randomnumber(10);
randomnumber(100);
randomnumber(2);


function randomletter(letter){
    const random = Math.random()* letter.length;
    const floor = Math.floor(random);
    console.log(letter.charAt(floor));
}
// variable.charAt[index]

randomletter("blah");
randomletter("abcdefg");
randomletter ("z");

const string = process.argv[2];
function myguy(guy){
    console.log(guy + ",my guy")
}
myguy(string);


const pick = process.argv [3];
function numberpicker(num){
    //let code = Math.random() * process.argv[2];
    //const floor = Math.floor(code);
    console.log(num);
}
numberpicker(pick);

function string_N_times(){
    console.log (numberpicker(pick) myguy(string));
}
string_N_times();