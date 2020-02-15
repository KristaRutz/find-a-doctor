import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { DoctorService } from './doctor-service';
import { Search } from './searchterms';

async function asyncApiCall(search){
  let doctorList = new DoctorService();
  let response = await doctorList.asyncApiCall(search);
  getElements(response);
}

function getElements(response) {
  console.log("before getElements");
  console.log(response.meta.total);
  if(response.meta.total > 0){
    console.log("results");
  } else {
    console.log("no results");
  }
  if(response.data.length){
    for (let i = 0; i < response.data.length; i++){
      console.log(response.data[i].practices);
      displayInfo(response.data[i]);
      $("#displayResults").show();
    }
  } else {
    $("#errorResult").text("Your search did not match any results.");
  }
}

function displayInfo(doctor){
  const profile = doctor.profile;
  const mainPractice = doctor.practices[0];

  let website = mainPractice.website;
  if (!mainPractice.website){
    website = " ";
  }
  let newPatients = "Yes";
  if (!mainPractice.accepts_new_patients){
    newPatients = "No";
  }

  let newRow = `<tr class="${profile.slug}"><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.profile.title}</td><td>${mainPractice.visit_address.street}<br>${mainPractice.visit_address.city}, ${mainPractice.visit_address.state} ${mainPractice.visit_address.zip}</td><td>${mainPractice.phones[0].number}</td><td>${website}</td><td>${newPatients}</td></tr>`

  $("#resultsList").append(newRow);
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    console.log("form submitted");
    $("#resultsList").text("");
    $("#errorResult").text("");
    $("#displayResults").hide();
    console.log($("#userSymptom").val());

    //const state = $("#state").val().toLowerCase();
    //const city = $("#city").val().toLowerCase();

    console.log($("#state").val());
    const state = "wa"
    const city = "seattle"

    const location = `${state}-${city}`;
    let queryTerm = $("#userSymptom").val();
    //let queryTerm = "throat";
    console.log(queryTerm);
    const specialtyUID = "speech-therapist";
    const gender = "";
    const sort = "distance-asc";
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