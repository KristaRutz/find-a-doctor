import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { DoctorService } from './doctor-service';
import { Search } from './searchterms';

async function asyncApiCall(search){
  let doctorList = new DoctorService();
  try {
    let response = await doctorList.asyncApiCall(search);
    getElements(response);
  } catch (error) {
    $("#errorResult").text("There was an error handling your request: " + error.message);
  }
}

function getElements(response) {
  let total = response.meta.total;
  $("#totalHits").text(total);
  if (total >= 15){
    $("#maxShown").text(15);
  } else {
    $("#maxShown").text(total);
  }

  if(response.meta.total > 0){
    for (let i = 0; i < response.data.length; i++){
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

  let newRow = `<tr class="${profile.slug}"><td>${doctor.profile.first_name} ${doctor.profile.last_name}</td><td>${doctor.profile.title}</td><td>${mainPractice.visit_address.street}<br>${mainPractice.visit_address.city}, ${mainPractice.visit_address.state} ${mainPractice.visit_address.zip}</td><td>${mainPractice.phones[0].number}</td><td>${website}</td><td>${newPatients}</td></tr>`;

  $("#resultsList").append(newRow);
}

function searchWithTerms(){
  const inputtedCity = $("#city").val();
  const inputtedState = $("#state").val();
  const specialtyUID = encodeURI($("#specialty").val());
  console.log(specialtyUID);
  const queryTerm = encodeURI($("#userSymptom").val());
  const name = encodeURI($("#docName").val());

  //default location is Seattle, WA, unless user changes it
  let location = "wa-seattle";
  if (inputtedCity && inputtedState){
    const state = encodeURI(inputtedState.toLowerCase());
    const city = encodeURI(inputtedCity.toLowerCase());
    location = `${state}-${city}`;
  } else if (inputtedState) {
    location = inputtedState;
  }

  //advanced search options coming soon
  let gender;
  let sort;
  let limit = 15;
  let skip = 0;

  let searchTerms = new Search(location, queryTerm, name, specialtyUID, gender, sort, limit, skip);
  return searchTerms;
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("#resultsList").text("");
    $("#errorResult").text("");
    $("#displayResults").hide();

    let searchTerms = searchWithTerms();
    asyncApiCall(searchTerms);
  });
});