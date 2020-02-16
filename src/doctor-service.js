export class DoctorService{

  async asyncApiCall(search){
    try {
      let url = this.buildURL(search);
      let response = await fetch(url);
      let jsonifiedResponse = await response.json();
      if (jsonifiedResponse.meta.error){
        throw new Error(jsonifiedResponse.meta.message);
      }
      return jsonifiedResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  buildURL(search){
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${search.location}&skip=${search.skip}&limit=${search.limit}&user_key=${search.apiKey}`;
    if (search.name){
      url += `&name=${search.name}`;
    }
    if (search.query){
      url += `&query=${search.query}`;
    }
    if (search.specialtyUID){
      url += `&specialty_uid=${search.specialtyUID}`
    }
    return url;
  }
}