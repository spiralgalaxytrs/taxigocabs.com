var myLatLng = { lat: 13.0827, lng: 80.2707 };
var mapOptions = {
    center: myLatLng,
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Hide result box
//document.getElementById("output").style.display = "none";
//document.getElementById("output1").style.display = "block";
// Create/Init map
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

// Create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

// Create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// Bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);
var sedano;
var sedanr;
var suvo; 
var suvr;
var n;
var psuvo;
var psuvr;
var traveller;

// Define calcRoute function
function calcRoute() {
     var y = document.getElementById("ma");
        y.style.display = "block";
        var z = document.getElementById("Location");
        z.style.display = "none";
    //create request
    var request = {
        origin: document.getElementById("location-1").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    // Routing
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time            
            var d=result.routes[0].legs[0].distance.value/1000;
            n = d.toFixed(0);
            sedano=((n*13)+400);
            sedanr=2*((n*10)+400);
            psedano=((n*14)+400);
            psedanr=2*((n*11)+400);
            suvo=((n*18)+400);
            suvr=2*((n*13)+400);
            psuvo=((n*19)+400);
            psuvr=2*((n*14)+400);
            traveller=(2*((n*18)+500));
            
            
            //    var nElement = document.createElement("input");
            //    nElement.id = "nElement";
            //    nElement.style.display = "none";
            //    nElement.type = "text";
            //    nElement.value = `${n}`;
            //    console.log(nElement,nElement.value);
            console.log(n);
               var strText8 = document.getElementById("ser").value;
               var returndate = document.getElementById("returndate");
               // strText8="One-Way";
               var oneway = document.getElementById("oneway");
            //    oneway.appendChild(nElement);
                var twoway = document.getElementById("twoway");
            if(strText8=="One-Way"){
                twoway.style.display = "none";
                oneway.style.display = "block";
                $(".Dist").html(n);
                $("#1").html(psedano);
                $("#3").html(psuvo);    
                $("#5").html(sedano);     
                $("#7").html(suvo);    
                returndate.style.display = "none";
            }
            else{
                twoway.style.display = "block";
                oneway.style.display = "none";
                n=n*2;
                $(".Dist").html(n);
                $("#2").html(psedanr);
                $("#4").html(psuvr);
                $("#6").html(suvr);
                $("#8").html(sedanr);
                $("#9").html(traveller);
                returndate.style.display = "block";
                returndate.attributes.required = "required"; 
            }
        
           
 /*         //  $("#output").html("<div class='result-table'> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />SUV Rate: ₹" +((n)*12)+"-"+((n)*15)+".<br />Sedan Rate: ₹" +((n)*8)+"-"+((n)*11)+".<br />Hatchback Rate: ₹" +((n)*16)+"-"+((n)*19)+ ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>");
            //document.getElementById("output").style.display = "block";
           // $("#output1").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> One Way : ₹" +sedano+"</span><br /><span> Round Way : ₹" +sedanr+"</span></div>");
            document.getElementById("output1").style.display = "block";
            $("#output2").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> One Way : ₹" +suvo+"</span><br /><span> Round Way : ₹" +suvr+"</span></div>");
            document.getElementById("output1").style.display = "block";
            $("#output3").html("<div class='meta-item;'>  <span> Distance: " + result.routes[0].legs[0].distance.text + "</span><br /><span> Round Way : ₹" +traveller+"</span><br /><span> One Way : Not available </span></div>");
            document.getElementById("output1").style.display = "block";
            //display route <span> Price  :  ₹13 / Km.</span>
            directionsDisplay.setDirections(result);
            
*/


        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //Show error message           
           
            alert("Can't find road! Please try again!");
            clearRoute();
        }
    });

}

// Clear results

function clearRoute(){
    document.getElementById("output").style.display = "none";
    document.getElementById("location-1").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({ routes: [] });
    
}

//autocomplete only for cities in india
var options = {
 types: ['(cities)'],
 componentRestrictions: {country: "in"}
};


var input1 = document.getElementById("location-1");
var autocomplete1 = new google.maps.places.Autocomplete(input1,options);

var input2 = document.getElementById("location-2");
var autocomplete2 = new google.maps.places.Autocomplete(input2,options);
