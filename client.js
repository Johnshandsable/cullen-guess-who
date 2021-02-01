console.log('Here are all the available people:', people);

console.log('js working');

$(document).ready(function () {
  console.log('jquery loaded');

  // render a random user
  render();

  $(document).on('click', '.profile', checkUserWasRight);
});

let guess = getName();

function render() {
  $('#guessWho').append(`
    <h1 id="guess"> Guess Who This Is: ${guess}</h1>
  `);

  // Generates user names and githubUsernames, but uses a default picture
  for (let peep of people) {
    $('#profilePics').append(`
    <div class="profile" data-name="${peep.name}">
      <img src="https://github.com/${peep.githubUsername}.png?size=250" alt="Profile image of ${peep.name}">
    </div>
    `);
  }
} // end render

// index goes from zero to six
function getName(min = 0, max = 6) {
  let index = Math.floor(Math.random() * (1 + max - min) + min);
  console.log(index);
  // console.log(people[index].name);
  return people[index].name;
} // end getName

function checkUserWasRight() {
  // console.log("what's happening");
  // console.log($(this).data('name'));
  // console.log(guess);

  if ($(this).data('name') == guess) {
    console.log('you win!');
  } else {
    console.log('you guessed wrong!');
  }
} // end checkUserWasRight
