import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;

$(document).ready(function() {
  $("#devBtn").click(function(){
    
    console.log("dev button clicked");

    asyncApiCall();

    async function asyncApiCall(){
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    }

    function getElements(response) {
      console.log(response.data[0].profile.first_name);
      console.log(response.data[1].profile.first_name);
      console.log(response.data[2].profile.first_name);
      console.log(response.data[3].profile.first_name);
      console.log(response.data[4].profile.first_name);
      console.log(response.data[5].profile.first_name);
      console.log(response.data[6].profile.first_name);
      console.log(response.data[7].profile.first_name);
      console.log(response.data[8].profile.first_name);
      console.log(response.data[9].profile.first_name);
      console.log(response.data[10].profile.first_name);
      console.log(response.data[11].profile.first_name);
    }

  });
});