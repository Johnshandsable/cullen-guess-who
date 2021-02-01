console.log('Here are all the available people:', people);

console.log('js working');

$(document).ready(function () {
  console.log('jquery loaded');

  // render a random user
  $('body').append(`
    <h1 id="GUESS WHO THIS IS!">${returnName()}</h1>
  `);
  // Generates user names and githubUsernames, but uses a default picture
  for (let peep of people) {
    $('body').append(`
    <div class="profile" data-index=${people.index}>
      <img src="https://github.com/${peep.githubUsername}.png?size=250" alt="Profile image of ${peep.name}">
    </div>
    `);
  }

  $(document).on('click', '.profile', checkUserWasRight);
});

function checkUserWasRight() {
  console.log("what's happening");
  returnName;
}

// minimum number of people is 1 and max is 7
function returnName(min = 1, max = 7) {
  let index = Math.floor(Math.random() * (1 + max - min) + min);
  console.log(index);
  console.log(people[index].name);
  return people[index].name;
}
