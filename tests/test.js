// Well, John wasn’t exactly ‘The Boogeyman.’

class Wick {
  constructor(props) {
    this.location = props.location;
    this.birthYear = props.birthYear;
    this.weaknesses = null;
  }

  add = (a, b) => a + b;
}

// He was the one you sent to kill the f**king Boogeyman.

const John = new Wick({
  location: 'The Continental',
  birthYear: 1964,
});
