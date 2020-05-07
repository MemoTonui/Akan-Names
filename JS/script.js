const CURRENTYEAR = 2020;
const maleAkan = ['Kwasi','Kwadwo','Kwadena','Kwanu','Yaw','Kofi','Kwame'];
const femaleAkan = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

var year1 = function (age,yearBorn) {
    if(CURRENTYEAR-yearBorn !== age){
        alert("please re-enter your age or year of birth");
        return year1;
}
var dayOfTheWeek= function() {
    var centuryDigits;
    var yearDigits;
    var month;
    var dayOfMonth;

    dayOfTheWeek = ((((centuryDigits/4)- 2*centuryDigits-1)+(5*yearDigits/4)+(26 * (month+1)/10)+dayOfMonth)% 7);
    return dayOfTheWeek;
}
var akanName = function() {
    
    
}