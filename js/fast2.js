var sedano;
var sedanr;
var suvo; 
var suvr;
var psuvo;
var psuvr;
var traveller;

function book() {
    var CID =Math.floor((Math.random()*1000000)+1);
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText9 = document.getElementById("dropdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
   
    var Clink="https://droptaxiindia.com";
    var CPh="99409 80956";
    var Cname="Drop Taxi India";
    //calcRoute()
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if((strText7=="PSedan") && (strText8=="One-Way"))
    {rate=psedano;}
    else if((strText7=="PSedan") && (strText8="Round"))
    {rate=psedanr;}
    else if((strText7=="PSUV") && (strText8=="One-Way"))
    {rate=psuvo;}
    else if((strText7=="PSUV") && (strText8=="Round"))
    {rate=psuvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}
    console.log("read successful");
    console.log("book",strText8);
    var result;
    var carTypemsg = strText7[0]=='P'?strText7.replace('P',"Prime "):strText7;
     if(strText8=="One-Way"){
        console.log("result set in one way");
        result = 'Hi '+ strText + '%0AThanks for booking with droptaxiindia.com' +'%0ABooking Details:  '+ '%0ABooking ID:  ' + CID +  '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + carTypemsg+"%0APrice:"+rate+"%0ATotalKms: "+n + '%0A Charges will apply for extra KM' + '%0AToll, State, Parking, %0ALuggage charges extra' + '%0ADriver Batta included'+ '%0AFor any questions please contact:  99409 80956' ;
    }else{
        result = 'Hi '+ strText + '%0AThanks for booking with droptaxiindia.com' +'%0ABooking Details:  '+ '%0ABooking ID:  ' + CID + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 +'%0ADrop Date:'+ strText9 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate+"%0ATotalKms: "+n + '%0AExtra Km:  15-20/km based on car type' + '%0AToll, State, Parking, %0ALuggage charges extra' + '%0ADriver Batta included'+ '%0AFor any questions please contact:  99409 80956';
    }
    console.log(result);
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
        const url = 'https://api.telegram.org/bot1721938726:AAEqc3VUsUo88GIeAcrWvhRhFVvpmU1aJSE/sendMessage?chat_id=-518646833&text=' + result;
     request.open("post", url);
    request.send();
    console.log("Sent Telegram successfully");
    fetch("https://www.fast2sms.com/dev/bulkV2?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&route=dlt&sender_id=SMSTRS&message=126247&variables_values=%20" + strText + "%20%7C%20" + Clink + "%20%7C%20" + CID + "%20%7C%20" + strText + "%20%7C%20" + strText1 + "%20%20%7C%20" + strText2 + "%20%7C%20" + strText3 + "%20%20%7C%20" + strText4 + "%20%20%20" + strText6 + "%20%20%7C%20" + strText7 + "%20%20%20%20" + strText8 + "%20%20%7C%20" + n + "%20%7C" + rate + "%7C" + 15 + "%7C" + 450 + "%7C%20" + CPh + "%20" + "%20%7C&flash=0&numbers=" + strText1)
    .then(response=>{
           
            if(response.status==200)
            {
                console.log("Sent Message successfully");
                localStorage.setItem("result", strText);
                localStorage.setItem("result1", strText2);
                localStorage.setItem("result2", strText3);
                localStorage.setItem("carType", carTypemsg);
                localStorage.setItem("tripType", strText8);
                localStorage.setItem("fare", rate);
                window.location.href = "bookingSuccess.html";
            }
        })                
        }

});
}
