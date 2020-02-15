export class DoctorService{
  async asyncApiCall(search){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=${search.location}&skip=0&limit=10&user_key=${process.env.API_KEY}&query=${search.query}&name=${search.name}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}