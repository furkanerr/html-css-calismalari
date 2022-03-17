
let userNameCol = document.querySelector("#myName");
let clockCol = document.querySelector("#myClock");

function startTime(){
    const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

    let weekday = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'][new Date().getDay()]

    
    function checkTime(i){
        if (i < 10) {i = '0' + i};
        return i;
    };

  

    clockCol.innerHTML = `${h}:${m}:${s} ${weekday}`;
   
    
     setTimeout(startTime,500);

}



let userName = prompt("Adınız Nedir?");
   
userNameCol.innerHTML = userName;
    