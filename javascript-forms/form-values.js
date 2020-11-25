var contactForm = document.getElementById('contact-form');
function submitForm(event) {
  event.preventDefault();
  var messageData = {};
  messageData.name=contactForm.elements.name.value;
  messageData.email=contactForm.elements.email.value;
  messageData.message=contactForm.elements.message.value;
  console.log(messageData);
}
contactForm.addEventListener('submit', submitForm);
