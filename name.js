function myFunction(){

const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku", "Yaw", "Kofi","Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const dayOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var gender ="null";
var birthday ="null";


// get users input gender and birthday.

    var gender = document.querySelector('input[type="radio"]:checked');     
     
    var birthday = document.getElementById("birthday");
    
    var year =  birthday.value;
    

// calculate the day of the week, from birthday.
    var DD = year.slice(0,1);
    var MM = year.slice(2,3);
    var YY = year.slice(5,6);
    var CC = year.slice(8,9);

   var day = parseInt(((( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7).toFixed(0)));

    
// use switch case expression to get Akhan name.
var x = day;
var y = 0;
var m = gender.value;


if(m === "male");
switch(akhan = (x+y)){
case 0:
message.innerHTML = "Your Akhan name is, kwasi.";  
break;
case 1:  
message.innerHTML = "Your Akhan name is, Kwadwo.";
break;

case 2:  
message.innerHTML = "Your Akhan name is, Kwabena.";  
break;

case 3:  
message.innerHTML = "Your Akhan name is, Kwaku.";  
break;

case 4:  
message.innerHTML = "Your Akhan name is, Yaw.";
break;

case 5:  
message.innerHTML = "Your Akhan name is, Kofi.";
break;

case 6:  
message.innerHTML = "Your Akhan name is, Kwame.";

}

if((m === "Female")){    
switch (akhan= (x+y)) {
case 0:
message.innerHTML = "Your Akhan name is, Akusa.";    
break;

case 1:
message.innerHTML = "Your Akhan name is, Adwoa.";
break;

case 2:  
message.innerHTML = "Your Akhan name is, Abenna.";    
break;

case 3: 
message.innerHTML = "Your Akhan name is, Akua.";  
break;

case 4:  
message.innerHTML = "Your Akhan name is, Yaa.";
break;

case 5:  
message.innerHTML = "Your Akhan name is, Afua.";
break;

case 6:  
message.innerHTML = "Your Akhan name is, Ama.";
}
}
  
  }
 



