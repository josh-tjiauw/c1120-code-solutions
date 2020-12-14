/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstInitial = person.firstName[0];
  var lastInitial = person.lastName[0];
  var fullInitialsOfPerson = firstInitial + lastInitial;
  return fullInitialsOfPerson;
}
