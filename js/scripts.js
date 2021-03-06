
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
// YOU MAY HIDE THIS PART
//   const searchContainer = document.querySelector('.search-container');
//   // console.log(searchContainer);
//   const html = document.createElement('FORM');
//   let inputElement1 = document.createElement('INPUT')
//   inputElement1.type = "search";
//   inputElement1.id = "search-input";
//   inputElement1.classList = "search-input";
//   inputElement1.placeholder = "Search...";
//   html.appendChild(inputElement1);
//   let inputElement2 = document.createElement('INPUT')
//   inputElement2.type = "submit";
//   inputElement2.value = "Randomize";
//   inputElement2.classList = "search-submit";
//   inputElement2.id = "search-submit";
//   html.appendChild(inputElement2);
// searchContainer.appendChild(html);
// ---------------------------------------------------------------

// Division containg cards created and added its inner html which is dynamic.
// Looped 12 times since we are expected to do so..
// Followed the design mockup instructions in html file.
// Also set ids to index of objects..
function generateCards(data){
  const addhere = document.querySelector('#gallery');
  for(let i = 0; i < 12; i++){
    const html = `
    <div class="card" id='${i}'>
                      <div class="card-img-container" id='${i}'>
                          <img class="card-img" id='${i}' src=${data.results[i].picture.thumbnail} alt="profile picture">
                      </div>
                      <div class="card-info-container" id='${i}'>
                          <h3 id="${i}" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                          <p class="card-text" id='${i}'>${data.results[i].email}</p>
                          <p class="card-text cap" id='${i}'>${data.results[i].location.city}, ${data.results[i].location.state}</p>
                      </div>
                  </div>
    `
    addhere.innerHTML += html;
  }
}
// -----------------------------------------------------------------
// Here I created a function in order to create the modal from the targeted card.
// I took index by checking its id - which i defined in the previous function..
// Used index to match the card with the Modal pops out when card clicked..
function generateModal(data){
  const  bodyElement = document.getElementsByTagName("BODY");
  const newDiv = document.createElement('DIV');
  newDiv.classList = "to-be-removed";

  // const relativPosition = document.getElementsByTagName('HEADER');
  const selectCard = document.querySelector('#gallery');
  selectCard.addEventListener('click', (e) => {
    console.log('I am generateModal function');
    // console.log(bodyElement);

    const dataArray = data.results
    console.log(dataArray);
    let indexOfTargetE = e.target.id;
    let integer = parseInt(indexOfTargetE, 10);
    console.log(integer);
  const html = `
  <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${data.results[integer].picture.thumbnail}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data.results[integer].name.first}</h3>
                        <p class="modal-text">${data.results[integer].email}</p>
                        <p class="modal-text cap">${data.results[integer].location.city}</p>
                        <hr>
                        <p class="modal-text">${data.results[integer].cell}</p>
                        <p class="modal-text"> ${data.results[integer].location.street.name} ${data.results[integer].location.street.number}, ${data.results[integer].location.state}, ${data.results[integer].location.postcode}</p>
                        <p class="modal-text">Birthday: ${data.results[integer].dob.date.slice(8,10)}/${data.results[integer].dob.date.slice(5,7)}/${data.results[integer].dob.date.slice(0,4)}</p>
                    </div>
                </div>
  </div>
  `
  newDiv.innerHTML = html;
  bodyElement[0].appendChild(newDiv);
  const closeModal = document.querySelector('button');
  // console.log(closeModal);
  closeModal.addEventListener('click', () => {
    // const  bodyElement = document.getElementsByTagName("BODY");
    const removeDivElement = document.querySelector('.to-be-removed');
    bodyElement[0].removeChild(removeDivElement);

  })
  })
}
// ------------------------------------------------------------------
function checkStatus(response){
  // You do not need to equalize this to true since it is a value either true or false/
  if(response.ok){
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



