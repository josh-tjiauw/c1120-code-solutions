var surveyBG = document.getElementById('overlay');
var surveyBox = document.querySelector('.survey');

function openModal() {
  surveyBG.className = 'dimmed';
  surveyBox.className = 'survey';
}

function closeSurvey() {
  surveyBox.className = 'survey hidden';
  surveyBG.className = '';
}
