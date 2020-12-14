/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var fullDescriptionSentence = person.name + " is a " + person.occupation + " from " + person.birthPlace + ".";
  return fullDescriptionSentence;
}
