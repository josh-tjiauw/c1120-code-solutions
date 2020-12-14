var surveyBG = document.getElementById('overlay');
var surveyBox = document.querySelector('.survey');
var openButton = document.querySelector('button.open-button');
var noButton = document.querySelector('button.no-button');

function openModal() {
  surveyBG.className = 'dimmed';
  surveyBox.className = 'survey';
}

function closeSurvey() {
  surveyBox.className = 'survey hidden';
  surveyBG.className = '';
}

openButton.addEventListener('click', openModal);
noButton.addEventListener('click', closeSurvey);
