//Problem#1//
var nam, weight, height, rheight1, rheight2, rweight;

nam = prompt ("Nickname: ");
weight = prompt ("Weight (in kg): ");
height = prompt ("Height (in inch): ");

rweight = weight * 2.205;
rheight2 = (height % 12);
rheight1 = (height / 12) - (rheight2 / 12);

if (confirm ("Do you want to share your information to this site?") == true)
{
    alert ("Name: " + nam);
    alert ("Weight: " + rweight + " lb");
    alert ("Height: " + rheight1+ "\'" + rheight2 + "\"");
}
else
{
    alert("User does not wish to share his/her information.");
}

//Problem#2//
var nam, weight, height, rheight1, rheight2, rweight;

nam = prompt ("Name: ");
weight = prompt ("Weight (in kg): ");
height = prompt ("Height (in inch): ");

rweight = weight * 2.205;
rheight2 = (height % 12);
rheight1 = (height / 12) - ((height % 12) / 12);

if (confirm("Do you want to share your information to the site?")==true){
    alert ("Nickname: " + nam);
    alert ("Weight: " + rweight + " lb");
    alert ("Height: " + rheight1+ "\'" + rheight2 + "\"");
}
else {
    alert("User does not wish to share his/her information.");
}

//Problem#3//
var fname, lname, byear,txtfname, txtlname, txtbyear, txt, age;

fname= prompt("What is your first name?");
lname = prompt("What is your last name?");
byear = prompt("What is your birth year?");

age = 2024 - byear;

txt = document.getElementById("output");

txt.innerHTML = "Hello " + fname + " " + lname + "! How does it feel to be " + age + " years old?";
alert(txt.innerHTML);