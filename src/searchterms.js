export class Search {
  constructor(location, query, name, specialtyUID, gender, sort, limit, skip){
    this.location = location;
    this.query = query;
    this.name = name;
    this.specialtyUID = specialtyUID;
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