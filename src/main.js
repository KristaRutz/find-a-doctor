import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;

$(document).ready(function() {
  $("#devBtn").click(function(){
    
    asyncApiCall();

    async function asyncApiCall(){
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    }

    function getElements(response) {
      console.log(response.data[0].practices[0].name);
      console.log(response.data[0].practices[1].name);
    }

  });
});