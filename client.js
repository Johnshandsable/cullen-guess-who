console.log('Here are all the available people:', people);

console.log('js working');

$(document).ready(function () {
  console.log('jquery loaded');

  // Generates user names and githubUsernames, but uses a default picture
  for (let peep of people) {
    $('body').append(`
    <div class="profile" data-index=${people.index}>
      ${peep.name}
      ${peep.githubUsername}
      <img src="https://github.com/${peep.githubUsername}.png?size=250" alt="Profile image of ${peep.name}">
    </div>
    `);
  }

  $(document).on('click', '.profile', checkUserWasRight);
});

function checkUserWasRight() {
  console.log("what's happening");
}

// minimum number of people is 1 and max is 7
function randomNumber(min = 1, max = 7) {
  let index = Math.floor(Math.random() * (1 + max - min) + min);
  return people[index];
}
