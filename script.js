// Contact form submit handler

document.getElementById('contact-form').addEventListener('submit', function (e) {

  e.preventDefault(); // Prevent default form submission

  // Collect form data

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const message = document.getElementById('message').value.trim();

  // Basic validation

  if (!name || !email || !message) {

    document.getElementById('form-status').textContent = "Please fill in all fields.";

    document.getElementById('form-status').style.color = "red";

    return;

  }

  // Simulate form sending (e.g., to email API)

  document.getElementById('form-status').textContent = "Message sent successfully!";

  document.getElementById('form-status').style.color = "green";

  // Clear form

  document.getElementById('contact-form').reset();

});