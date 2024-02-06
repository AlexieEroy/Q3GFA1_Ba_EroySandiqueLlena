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
