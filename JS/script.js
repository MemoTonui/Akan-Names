$(document).ready(function(){
    $(document).submit(function akanNameRun(event) {
        event.preventDefault();
        

        
    });

});
const CURRENTYEAR = 2020;
const maleAkanName = ['Kwasi','Kwadwo','Kwadena','Kwanu','Yaw','Kofi','Kwame'];
const femaleAkanName = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const days = ['Sunday','Monday','Teusday','Wednesday','Thursday','Friday','Saturday'];
var yearBorn = document.getElementById('year').value;
var age = parseInt(document.getElementById('age')).value;
var centuryDigits =parseInt(yearBorn.substring(0,2)) ;
var yearDigits = parseInt(yearBorn.substring(2,4));
var dayOfMonth = parseInt(document.getElementById('date')).value;
var month= parseInt(document.getElementById('month')).value;
var gender = document.getElementsByName('optionRadios').value;


   


function  validation(){
    if (yearBorn ===" "){
        alert("Please fill!!");
        
    }
    else if(month === ""){
        alert("Please fill!!");
       
        
    }
    else if(dayOfMonth=== ""){
        alert("Please fill!!");
        
    }
    else if (month > 12|| month<0){
        alert('Please input a correct month')
    }
    else if(CURRENTYEAR-yearBorn !== age){
        alert("please re-enter your age or year of birth");
        return false;
    }
    else if (dayOfMonth<0 || dayOfMonth >31){
        alert("Invalid Date.");
       
    }
    else{
    return true;
    }
}
var daysOfTheWeek= function() {
    
    dayOfTheWeek = ((((centuryDigits/4)- 2*centuryDigits-1)+(5*yearDigits/4)+(26 * (month+1)/10)+dayOfMonth)% 7);
    
}
 var akanName = function() {
    validation();
        
        if(gender[0].checked==true){

        if (gender.value==="male" ) {
            
        
        switch (daysOfTheWeek) {
                case 1:
                alert("You were born on " +days[0] + "and Your Akan Name is " +maleAkanName[0]);
                break;
                case 2:
                alert("You were born on " +days[1] + "and Your Akan Name is " +maleAkanName[1]);
                break;
                case 3:
                alert("You were born on " +days[2] + "and Your Akan Name is " +maleAkanName[2]);
                break;
                case 4:
                alert("You were born on " +days[3] + "and Your Akan Name is " +maleAkanName[3]);
                break;
                case 5:
                alert("You were born on " +days[4] + "and Your Akan Name is " +maleAkanName[4]);
                break;
                case 6:
                alert("You were born on " +days[5] + "and Your Akan Name is " +maleAkanName[5]);
                break;
                case 7:
                alert("You were born on " +days[6] + "and Your Akan Name is " +maleAkanName[6]);
                break;
        
            default:
                alert('Please Re - enter Yout Information again.');
                break;
        }
    }
    else if (gender[1].checked = true){
    if(gender.value=="female") {
        switch (daysOfTheWeek) {
            case 1:
            alert("You were born on " +days[0] + "and Your Akan Name is " +femaleAkanName[0]);
            break;
            case 2:
            alert("You were born on " +days[1] + "and Your Akan Name is " +femaleAkanName[1]);
            break;
            case 3:
            alert("You were born on " +days[2] + "and Your Akan Name is " +femaleAkanName[2]);
            break;
            case 4:
            alert("You were born on " +days[3] + "and Your Akan Name is " +femaleAkanName[3]);
            break;
            case 5:
            alert("You were born on " +days[4] + "and Your Akan Name is " +femaleAkanName[4]);
            break;
            case 6:
            alert("You were born on " +days[5] + "and Your Akan Name is " +femaleAkanName[5]);
            break;
            case 7:
            alert("You were born on " +days[6] + "and Your Akan Name is " +femaleAkanName[6]);
            break;
    
        default:
            alert('Please Re - enter Your Information again.');
            break;
    }
}

    }
    else {
        alert("You must Pick a gender!!!")
    }
}
}

function clear(){
    document.getElementByClass('form-control').innerHTML = "";
}

            
        

    function getMyAkan() {
    
        akanName ();
        
    }


