import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { DoctorService } from './doctor-service';
import { Search } from './searchterms';

async function asyncApiCall(){
  let doctorList = new DoctorService();
  let jsonifiedResponse = await doctorList.asyncApiCall(searchTerms);
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
  //console.log(response.data[10].profile.first_name);
  //console.log(response.data[11].profile.first_name);
}

$(document).ready(function() {
  $("#devBtn").click(function(){
    console.log("dev button clicked");
    let searchTerms = new Search();
    

    console.log("form submitted");
    const state = "WA".toLowerCase();
    const city = "Seattle".toLowerCase();
    
    const location = `${state}-${city}`;
    const query = "lisp";
    const specialtyUID = "speech-therapist";
    const gender;
    const sort = "best-match-asc";
    const limit = 10;
    const skip = 0;



    asyncApiCall();
  });
});