export class Search {
  constructor(location, query, name, specialityUID, gender, sort, limit, skip){
    this.location = location;
    this.query = query;
    this.name = name;
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