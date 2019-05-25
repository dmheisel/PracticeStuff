let raceNumber = Math.floor(Math.random() * 1000);
let isEarlyBird = false;
let isYouth = false;
let age = 18;
let earlyBirdText = 'Early bird adult runs at 9:30 AM.'
let adultText = 'Adult runs begin at 11:00 PM'
let youthStartText = 'Youth run at 12:30 PM.'
let seeRegDesk = 'Please see the registration desk for assistance.'


if (age <= 18) {
  isYouth = true;
}

if (isYouth) {
  console.log(youthStartText);
}
if (!isYouth) {
  if (isEarlyBird) {
    console.log(earlyBirdText);
  } else {
    console.log(adultText)
  }
}
