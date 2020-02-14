export class Search {
  constructor(location, query, specialityUID, gender, sort, limit, skip){
    this.location = location;
    this.query = query;
    this.specialityUID = specialityUID;
    this.gender = gender;
    this.sort = sort;
    this.skip = skip;
    this.limit = limit;
  }

  getSearchTerms(){
    return this;
  }

  setSearchTerms(term, value){
    this[term] = value;
  }
}