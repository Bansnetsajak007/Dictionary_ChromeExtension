//will check this tommorrow

const word = document.querySelector('#input_');
const button = document.querySelector('#button_');
const result = document.querySelector('#result');

const getMeaning = async () => {
    const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;

    const response =await fetch( API);
    const data = await response.json();

    display_data(data);
}

const display_data = (data) => {

  const content = document.createElement('div');
  content.classList.add('content');

  if(data && data.length > 0){
    const mainMeaning = data[0].meanings[0];
    const mainDefination = mainMeaning.definitions[0];

    const meaningElement = document.createElement('div');

    meaningElement.innerHTML = `
      <p>
      Definition: ${mainDefination.definition} <br>
      
      </p>
      `;

    content.appendChild(meaningElement);

  } else{
    content.innerHTML = '<p>No results found.</p>';
  }
  
  result.innerHTML = ""
  result.appendChild(content);
}






button.addEventListener('click', () => {
    getMeaning();
})
