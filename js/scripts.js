
// const lastElementOfBody = parentElement.querySelector('script');
// ----------------------------------------------------------------
// Here I fetched a different url Url gets 12 random results
fetch('https://randomuser.me/api/?results=12')
  .then(checkStatus)
  .then(response => response.json())
  .then(data => {
    console.log(data.results);
    generateCards(data);
    generateModal(data);

  })

// ----------------------------------------------------------------
// Here I selected the search container division and created dom elements by following
// search markup specified as comment in hmtl file.
// YOU MAY WANT TO ALTER THIS!
  const searchContainer = document.querySelector('.search-container');
  // console.log(searchContainer);
  const html = document.createElement('FORM');
  let inputElement1 = document.createElement('INPUT')
  inputElement1.type = "search";
  inputElement1.id = "search-input";
  inputElement1.classList = "search-input";
  inputElement1.placeholder = "Search...";
  html.appendChild(inputElement1);
  let inputElement2 = document.createElement('INPUT')
  inputElement2.type = "submit";
  inputElement2.value = "Randomize";
  inputElement2.classList = "search-submit";
  inputElement2.id = "search-submit";
  html.appendChild(inputElement2);
searchContainer.appendChild(html);
// ---------------------------------------------------------------

// Division containg cards created and added its inner html which is dynamic.

function generateCards(data){
  const addhere = document.querySelector('#gallery');
  for(let i = 0; i < 12; i++){
    const html = `
    <div class="card">
                      <div class="card-img-container">
                          <img class="card-img" src=${data.results[i].picture.thumbnail} alt="profile picture">
                      </div>
                      <div class="card-info-container">
                          <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                          <p class="card-text">${data.results[i].email}</p>
                          <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                      </div>
                  </div>
    `
    addhere.innerHTML += html;
  }
}
// -----------------------------------------------------------------
function generateModal(data){
  const  bodyElement = document.getElementsByTagName("BODY");
  const relativPosition = document.getElementsByTagName('HEADER');
  const selectCard = document.querySelector('#gallery');
  selectCard.addEventListener('click', (e) => {
    console.log('I am generateModal function');
    console.log(bodyElement[0]);
    console.log(e.target);
  const html = `
  <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
  </div>
  `
bodyElement[0].appendChild(html);
  })
}
// ------------------------------------------------------------------
// Select elements here

// var searchContainerElement = $('.search-container');
// var galleryDiv = $('#gallery');
// var header = $('.header-text-container');

// -------------------------------------
// This part is unnecessary  think before going into long tasks
// -------------------------------------
// const galleryContainer = document.createElement('DIV');
// galleryContainer.classList = 'card';
// const cardImageContainer = document.createElement('DIV');
// cardImageContainer.classList = 'card-img-container';
// const img = document.createElement('IMG');
// img.classList = 'card-img';
// img.src = "https://placehold.it/90x90";
// img.alt = "profile picture";

// const cardInfoContainer = document.createElement('DIV');
// cardInfoContainer.classList = "card-info-container";
// const h3 = document.createElement('H3');
// h3.id = "name";
// h3.classList = "card-name cap";
// h3.textContent = 'first last';

// const firstP = document.createElement('P');
// firstP.classList = 'card-text';
// firstP.textContent = 'email';

// const secondP = document.createElement('P');
// secondP.classList = 'card-text cap';
// secondP.textContent = "city, state";

// cardImageContainer.appendChild(img);

// cardInfoContainer.appendChild(h3);
// cardInfoContainer.appendChild(firstP);
// cardInfoContainer.appendChild(secondP);
// // console.log(cardInfoContainer);

// galleryContainer.appendChild(cardImageContainer);
// galleryContainer.appendChild(cardInfoContainer);

// console.log(galleryContainer);


function checkStatus(response){
  // You do not need to equalize this to true since it is a value either true or false/
  if(response.ok){
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



