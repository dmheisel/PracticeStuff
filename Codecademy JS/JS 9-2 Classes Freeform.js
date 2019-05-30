class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = []
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    return (this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this.ratings.length);
  }
  addRating(rating) {
    if (typeof rating === 'number' &&rating <=5 && rating >= 1) {
    	this._ratings.push(rating);
    } else {
      console.log(`ERROR: please input a valid rating between 1 and 5`);
    };
  }
  addRatingArray(ratingArr) {
    ratingArr.forEach(rating => this.addRating(rating));
    
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._isCheckedOut = false;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }  
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }   
}

class CD extends Media {
  constructor(title, artist, songList) {
    super(title);
    this._artist = artist;
    this._songList = songList;
  }
  get artist() {
    return this._artist;
  }
  get songList() {
    return this._songList
  }
}

//adding and testing below
const historyOfEverything = new Book ('A Short History of Everything', 'Bill Bryson', 544);

const speed = new Movie ('Speed', 'Jan de Bont', 116);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRatingArray([5, 4, 5]);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRatingArray([1,4,1]);
speed.addRatingArray([3,3]);
console.log(speed.getAverageRating());


