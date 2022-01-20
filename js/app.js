

var txt = "do you want welcoming message?";

var userName = prompt("please enter your name ");

var userAge = prompt("please enter your age");

if (userAge <= 0) {
    alert("enter valid aage");
}

var userGender = prompt("please enter your gender ");
var Gtype=userGender.toLowerCase();

switch(Gtype)
{
    case "female":
        if(confirm(txt)==true){
        alert("Ms " + userName);}
        else{
            alert(userName);
        }
        break;
    case "male":
        if(confirm(txt)==true){
            alert("Mr " + userName);}
            else{
                alert(userName);
            }
        break;
    default:
        alert("uncorrect gender");
    
}





