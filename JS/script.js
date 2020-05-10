$(document).ready(function(){
    $(document).submit(function akanNameRun(event) {
        event.preventDefault();
        

        
    });

});
const CURRENTYEAR = 2020;
const maleAkanName = ['Kwasi','Kwadwo','Kwadena','Kwanu','Yaw','Kofi','Kwame'];
const femaleAkanName = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const days = ['Sunday','Monday','Teusday','Wednesday','Thursday','Friday','Saturday'];
var yearBorn = document.getElementById("year").value;
var centuryDigits =Number.parseInt(yearBorn.substring(0,2)) ;
var yearDigits = Number.parseInt(yearBorn.substring(2,4));
var age = Number.parseInt(document.getElementById("age").value);
var dayOfMonth = Number.parseInt(document.getElementById("date").value);
var month= Number.parseInt(document.getElementById("month").value);
var gender = document.getElementsByName('optionsRadios');

   

function findDay(){
    if (yearBorn===" " || month ===" " || dayOfMonth=== " " || age === " " || CURRENTYEAR-parseInt(yearBorn) !== age || month > 12 || month<=0 || dayOfMonth<=0 || dayOfMonth >31){
        alert("Invalid Input");  
        return false;
     }
    else{
    dayOfTheWeek = (((centuryDigits/4)-2*centuryDigits-1)+((5*yearDigits/4))+((26*(month+1)/10))+dayOfMonth)%7;
    console.log(dayOfTheWeek);
    return (Math.floor(dayOfTheWeek));
    }
}


 function akanName( myGender){
    if (gender[0].checked==true && gender.value==="option1" ) {
        myGender = "Male";
   }
   else  if(gender[1].checked == true && gender.value==="option2") {
       myGender = "Female";
   }
   else if(gender[0].checked==false && gender[1].checked == false){
   alert('You must pick a gender!!');
    }
     
    var day = findDay();
    
    switch (myGender) {
        case "Male":
            document.getElementById('result').textContent ="You were born on " +days[day] + "and Your Akan Name is " +maleAkanName[day];
            console.log(maleAkanName[day]);
            break;
        case "Female":
            document.getElementById('result').textContent ="You were born on " +days[day] + "and Your Akan Name is " +femaleAkanName[day];
            console.log(femaleAkanName[day])
            break;
        default:
            alert('Please Re - enter Your Information again.')
          }  
        }


function clear(){
    document.getElementByClass('form-control').innerHTML = "";
}


