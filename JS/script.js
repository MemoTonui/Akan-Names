const CURRENTYEAR = 2020;
const maleAkanName = ['Kwasi','Kwadwo','Kwadena','Kwanu','Yaw','Kofi','Kwame'];
const femaleAkanName = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const days = ['Sunday','Monday','Teusday','Wednesday','Thursday','Friday','Saturday'];
var yearBorn = document.getElementById('year');
var age = document.getElementById('age');
var centuryDigits ;
var yearDigits;
var month ;
var dayOfMonth = document.getElementById('date');


var year1 = function (age,yearBorn) {
   
    if(CURRENTYEAR-yearBorn !== age){
        alert("please re-enter your age or year of birth");
        
}
var daysOfTheWeek= function() {
    dayOfTheWeek = ((((centuryDigits/4)- 2*centuryDigits-1)+(5*yearDigits/4)+(26 * (month+1)/10)+dayOfMonth)% 7);
    Math.floor(dayOfTheWeek);
}
var akanName = function(event) {
    event.preventDefault();

    if (yearBorn || age === ' ' ){
        year1();
        alert('Kindly Fill in all the blanks');
    }
    else{
        var male = document.getElementById('male');
        var female = document.getElementById('female');
        var result;
        if (result = male) {
            
        
        switch (Math.floor(dayOfTheWeek)) {
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
    else {
        switch (Math.floor(dayOfTheWeek)) {
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
            alert('Please Re - enter Yout Information again.');
            break;
    }

    }
            
        
    }

    
    
}
}