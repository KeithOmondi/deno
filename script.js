// Initialize counters
var yesCounter = 0;
var noCounter = 0;

document.getElementById('proposalButton').addEventListener('click', function() {
  var proposalMessage = document.getElementById('proposalMessage');
  var yesButton = document.getElementById('yesButton');
  var noButton = document.getElementById('noButton');

  // Display the proposal message and options
  proposalMessage.style.display = 'block';

  // Hide the initial proposal button
  this.style.display = 'none';

  // Add event listener to the "Yes" button
  yesButton.addEventListener('click', function() {
    // Increment the "Yes" counter
    yesCounter++;
    
    // Display a message and a laughing emoji for the "Yes" option
    proposalMessage.innerHTML = '<p>I knew it, You Love Me!! 😂😂😂😂😂</p>';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    // Log the click to the console (you can replace this with server-side logging)
    console.log('Yes clicked. Total Yes clicks: ' + yesCounter);
  });

  // Add event listener to the "No" button
  noButton.addEventListener('click', function() {
    // Increment the "No" counter
    noCounter++;

    // Display a danger message for the "No" option
    proposalMessage.innerHTML = '<p>YOU UGLY, DUMMY! 💔</p>';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    // Log the click to the console (you can replace this with server-side logging)
    console.log('No clicked. Total No clicks: ' + noCounter);
  });
});
