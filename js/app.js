

// var txt = "do you want welcoming message?";

// var userName = prompt("please enter your name ");

// var userAge = prompt("please enter your age");

// if (userAge <= 0) {
//     alert("enter valid aage");
// }

// var userGender = prompt("please enter your gender ");
// var Gtype=userGender.toLowerCase();

// switch(Gtype)
// {
//     case "female":
//         if(confirm(txt)==true){
//         alert("Ms " + userName);}
//         else{
//             alert(userName);
//         }
//         break;
//     case "male":
//         if(confirm(txt)==true){
//             alert("Mr " + userName);}
//             else{
//                 alert(userName);
//             }
//             break;
//             default:
//             alert("uncorrect gender");

// }

let isMarried1 = "are you married?";
let isStudent1 = "are you student?";
let isHealthy1 = "are you healthy person?";


function getLowerCase(word) {
    return word.toLowerCase();
}

let checkAnswer = function (answer, stringContant) {
    while (answer != "yes" && answer != "no") {
        answer = prompt(stringContant + " yes or no only");
        answer = answer.toLowerCase();
    }
    yesNoQ.push(answer)
}


function isEmpty(empty) {
    if (empty == "")
        alert("invalid answer");
}


let yesNoQ = [];


let isMarried = prompt("are you married?");
isEmpty(isMarried)
isMarried = getLowerCase(isMarried);
checkAnswer(isMarried, isMarried1)



let isStudent = prompt("are you student?");
isEmpty(isStudent)
isStudent = getLowerCase(isStudent);
checkAnswer(isStudent, isStudent1)




let isHealthy = prompt("are you healthy person?");
isEmpty(isHealthy);
isHealthy = getLowerCase(isHealthy);
checkAnswer(isHealthy, isHealthy1)








for (let i = 0; i <= yesNoQ.length; i++) {
    console.log(yesNoQ[i])
}


