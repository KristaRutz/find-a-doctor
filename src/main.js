import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { DoctorService } from './doctor-service';
import { Search } from './searchterms';

async function asyncApiCall(search){
  let doctorList = new DoctorService();
  let jsonifiedResponse = await doctorList.asyncApiCall(search);
  getElements(jsonifiedResponse);
}

function getElements(response) {
  for (let i = 0; i < response.data.length; i++){
    console.log(response.data[i].profile);
    displayInfo(response.data[i]);
  }
  // console.log(response.data[1].profile.first_name);
  // console.log(response.data[2].profile.first_name);
  // console.log(response.data[3].profile.first_name);
  // console.log(response.data[4].profile.first_name);
  // console.log(response.data[5].profile.first_name);
  // console.log(response.data[6].profile.first_name);
  // console.log(response.data[7].profile.first_name);
  // console.log(response.data[8].profile.first_name);
  // console.log(response.data[9].profile.first_name);
  //console.log(response.data[10].profile.first_name);
  //console.log(response.data[11].profile.first_name);
}

function displayInfo(doctor){
  let newRow = `<tr class="${doctor.profile.slug}"><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.profile.title}</td></tr>`;
  $("#resultsList").append(newRow);
}

$(document).ready(function() {
  $("#devBtn").click(function(){
    console.log("dev button clicked");
    let searchTerms = new Search();
    

    console.log("form submitted");
    $("#resultsList").text("");
    const state = "WA".toLowerCase();
    const city = "Seattle".toLowerCase();
    
    // const location = `${state}-${city}`;
    // const queryTerm = "lisp";
    // const specialtyUID = "speech-therapist";
    // const gender;
    // const sort = "best-match-asc";
    // const limit = 10;
    // const skip = 0;

    asyncApiCall(searchTerms);

  });
});