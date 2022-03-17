



 function yeniYilKalanZamanHesaplayici(params) {

    let time = new Date();
    let time2 = new Date("12/31/2022");

    let ayFarki = Math.floor((time2-time)/1000/60/60/24/30);
let gunFarki=Math.floor((time2-time)/1000/60/60/24);
let saatFark=Math.floor((time2-time)/1000/60/60);
let dakikaFark=Math.floor((time2-time)/1000/60);
var saniyeFark=Math.floor((time2-time)/1000);


document.getElementById("ay").innerText=ayFarki;
document.getElementById("gun").innerText=gunFarki%30;
document.getElementById("saat").innerText=saatFark%24;
document.getElementById("dakika").innerText=dakikaFark%60;
document.getElementById("saniye").innerText=saniyeFark%60;


}









 setInterval(yeniYilKalanZamanHesaplayici, 1000);


