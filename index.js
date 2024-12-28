


function timeDetails(){


    const fullDate = new Date() ;
    console.log(fullDate);
    
    
    const day = ["sunday", "Monday", "tuesday", "wednesday","thursday", "friday","saturday" ]
    
    // to get full year 
    const year = fullDate.getFullYear();
    let currentyear= document.getElementById('year')
    currentyear.innerHTML=year;
    
    
    
    // to get day
    
    
    let currentday= document.getElementById('currentday');
    currentday.innerHTML=day[fullDate.getDay()].toUpperCase();
    
    
    
    //  seconds 
    
    let  seconds = document.getElementById('seconds');
    seconds.innerHTML=fullDate.getSeconds(); 
    
    
    // to get minutes 
    let  minutes = document.getElementById('minutes');
    minutes.innerHTML=fullDate.getMinutes(); 
    
    
    // to get hours 
    
    let  hours = document.getElementById('hours');
    hours.innerHTML=fullDate.getHours(); 


    

     
   

}

function updateMilliseconds() {
    const fullDate = new Date();
    let miliseconds = document.getElementById('miliseconds');
    miliseconds.innerHTML = fullDate.getMilliseconds().toString().padStart(3, '0');
    requestAnimationFrame(updateMilliseconds);
}
updateMilliseconds(); 
setInterval(timeDetails, 1000);