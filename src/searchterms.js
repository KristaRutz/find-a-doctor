export class Search {
  constructor(location, query, name, specialtyUID, gender, sort, limit, skip, apiKey){
    this.location = location;
    this.query = query;
    this.name = name;
    this.specialtyUID = specialtyUID;
    this.gender = gender;
    this.sort = sort;
    this.skip = skip;
    this.limit = limit;
    this.apiKey = apiKey;
  }

  getSearchTerms(){
    return this;
  }

  setSearchTerms(term, value){
    this[term] = value;
  }
}