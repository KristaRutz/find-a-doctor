export class DoctorService{

  async asyncApiCall(search){
    try {
      let url = this.buildURL(search);
      let response = await fetch(url);
      let jsonifiedResponse = await response.json();
     // console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch (error) {
      console.error("There was an error handling your request: " + error.message);
      throw new Error(error.message);
    }
  }

  buildURL(search){
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${search.location}&skip=${search.skip}&limit=${search.limit}&user_key=${process.env.API_KEY}`;
    if (search.name){
      url += `&name=${search.name}`;
    }
    if (search.query){
      url += `&query=${search.query}`;
    }
    if (search.specialtyUID){
      url += `&specialty_uid=${search.specialtyUID}`
    }
    console.log(url);
    return url;
  }
}