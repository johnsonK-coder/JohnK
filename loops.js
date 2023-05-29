//While loops
 let q = 1;
 let r = 10;
 while (q <= r){
    console.log(q);
    q += 1;
 }
//for loopss
for (let r = 1; r <= 10; r++){
    console.log(2 * (r));
}
//Function(anytime multiplication is used with an addition/substraction, the multiplication comes first)

function myFunction (j2, j4, j6){
    console.log(j2 + j4 * j6);
}
myFunction(6, 8, 8);

function myFunction2 (a, b){
    return (a * b);
};
let x = myFunction2(5, 8);
console.log(x);

//A function expression
let multi = function (v, w){
    return v * w;
};
const myMulti = multi(5, 7);
console.log(myMulti);

//Arrow functions
const mult = (v, w) => {
    return v * w;
};
let myMult = mult(8, 9);
console.log(myMult);


//Call a function multiple times
const sum = function(num2, num3){
    return num2 - num3;
};
console.log(sum(8, 4));
console.log(sum(6, 5));
console.log(sum(9, 3));
console.log(sum(5, 2));
console.log(sum(7, 1));
console.log(sum(10, 5));

//localStorage
const username = "Laura";
const herAge = "23";
let herSurname = "Thomas";
let herEmail = "Laurathoms77@gmail.com";
let herPhoneNumber = "+234-804-675-8399";
let herAddress = "23, Kosoko street, Berger";

console.log(localStorage.getItem("username", herAge + "" + herSurname + herEmail + herPhoneNumber + herAddress));
localStorage.setItem("", herAge + "" + herSurname + herEmail + herPhoneNumber + herAddress);

//Set Date
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

//Global Scope
const course = "JavaScript & Bootstrap";
function title(){
    console.log(`I love ${course}`);
}
title();

//Spread operator
let numOne = [1, 2, 3, 4, 5];
let numTwo = [6, 7, 8, 9, 10];
let numSum = [...numOne, ...numTwo];
console.log(numSum);

//Object
const pupil = {
    realName: "Bobby",
    realAge: 32,
    gender: "Male",
    height: 2.7,
    weight: 60,
    eyeColor: "Blue",
    hairColor: "Brown",
    hairLength: 1.6,
    hairStyle: "Black",
    school: {
        schoolName: "University of Lagos, Lagos State",
        major: "Mass Communication",
        yearAdmitted: 2018,
        yearEnding: 2023,
        grade: "A",
    }
};
console.log(typeof pupil);

console.log(pupil.realName);
console.log(pupil.realAge);
console.log(pupil.gender);
console.log(pupil.height);
console.log(pupil.weight);
console.log(pupil.eyeColor);
console.log(pupil.hairColor);
console.log(pupil.hairLength);
console.log(pupil.hairStyle);
console.log(pupil.school.schoolName);
console.log(pupil.school.major);
console.log(pupil.school.yearAdmitted);
console.log(pupil.school.yearEnding);
console.log(pupil.school.grade);

//JavaScript this keyword
let someone = {
    theName: "Charlotte",
    theAge: 25,
    theGender: "Female",
    hobby: {
        game: "Clash of the House",
        sport: "Football",
    },
    normal: function(){
        console.log(this.theName);
        console.log(this.theAge);
        console.log(this.theGender);
        console.log(this.hobby.game);
        console.log(this.hobby.sport);
    }
};
someone.normal();

//Destructuring Assignment
const someone_2 = {
    normName: "Sharon",
    normAge: 22,
    normGender: "Transgender",
};
let {normName, normAge, normGender} = someone_2;
console.log(normName);
console.log(normAge);
console.log(normGender);

//Properties and Methods

const nameNo = "fabulous";
console.log(nameNo.toUpperCase());
let nameNo2 = "FABULOUS";
console.log(nameNo2.toLowerCase());
let numb = 4000;
console.log(numb.toLocaleString());
let fruits = ("Banana", "Apple", "Watermelon", "Cucumber");
console.log(fruits.includes("Cucumber"));
let man = "This man is actually looking for something";
console.log(man.indexOf("hing"));
let centre = "Manuscript";
console.log(centre.toLocaleUpperCase());
let menu = "I love CSS";
let val = menu.replace("CSS", "JavaScript");
console.log(val);

//conditional statement
//Instead of using &&(and) for this, it's preferably to use ||(or) because the || operation is always true.
const user = "Bode";
const age = "27";
if (user == "Busayo" && age >= "27"){
    alert("You're an Adult");
}
else{
    alert("You're not an Adult");
}
const user1 = "Bode";
const age1 = "27";
if (user == "Busayo" || age >= "27"){
    alert("You're an Adult");
}
else{
    alert("You're not an Adult");
}
