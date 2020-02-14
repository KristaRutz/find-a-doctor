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
}

function displayInfo(doctor){
  const profile = doctor.profile;
  const practices = doctor.practices;
  //const numPractices = doctor.practices.length;

  let newRow = `<tr class="${profile.slug}"><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.profile.title}</td><td>${doctor.practices[0].visit_address.street}<br>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</td><td>${doctor.practices[0].phones[0].number}</td><td>${doctor.practices[0].website}</td><td>${doctor.practices[0].accepts_new_patients}</td></tr>`

  if (practices.length > 0) { 
    for (let i = 1; i <= practices.length; i++){
      newRow += `<tr class="${profile.slug}-practice-${i}"><td></td><td></td><td>${doctor.practices[i].visit_address.street}<br>${doctor.practices[i].visit_address.city}, ${doctor.practices[i].visit_address.state} ${doctor.practices[i].visit_address.zip}</td><td>${doctor.practices[i].phones[i].number}</td><td>${doctor.practices[i].website}</td><td>${doctor.practices[i].accepts_new_patients}</td>`;
    }
  }

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