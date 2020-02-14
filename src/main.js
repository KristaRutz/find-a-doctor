import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { DoctorService } from './doctor-service';
import { Search } from './searchterms';

async function asyncApiCall(search){
  try {
    let doctorList = new DoctorService();
    let jsonifiedResponse = await doctorList.asyncApiCall(search);
    getElements(jsonifiedResponse);
  } catch (error) {
    $("#errorResult").text("There was an error getting elements from your request: " + error.message);
  }
}

function getElements(response) {
  if(response.data.length){
    for (let i = 0; i < response.data.length; i++){
      console.log(response.data[i].profile);
      displayInfo(response.data[i]);
      $("#displayResults").show();
    }
  } else {
    $("#errorResult").text("Your search did not match any results.");
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
  let newRow = `<tr class="${doctor.profile.slug}"><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.profile.title}</td><td>${doctor.practices[0].visit_address.street}<br>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</td><td>${doctor.practices[0].phones[0].number}</td><td>${doctor.practices[0].website}</td><td>${doctor.practices[0].accepts_new_patients}</td></tr>`;
  $("#resultsList").append(newRow);
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    console.log("form submitted");
    $("#resultsList").text("");
    $("#errorResult").text("");
    $("#displayResults").hide();

    const state = $("#state").val().toLowerCase();
    const city = $("#city").val().toLowerCase();

    const location = `${state}-${city}`;
    const queryTerm = $("#userSymptom").val();
    const specialtyUID = "speech-therapist";
    const gender = "";
    const sort = "best-match-asc";
    const limit = 20;
    const skip = 0;

    let searchTerms = new Search(location, queryTerm, specialtyUID, gender, sort, skip, limit);

    asyncApiCall(searchTerms);
  });

  $("#devBtn").click(function(){
    console.log("dev button clicked");
    let searchTerms = new Search();  
  });
});