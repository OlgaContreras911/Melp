const httpGet = theUrl => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
};

const InfoRestaurant = httpGet("https://melp-b8aa4.firebaseio.com/data.json");

const paintInfo = InfoRestaurant => {
  const printData = document.getElementById("printData");
  printData.innerHTML = "";
  InfoRestaurant.forEach(item => {
    printData.innerHTML += `
    
    <div class="card my-4" style="width: 18rem;">
  <img src="https://i.ibb.co/q7V0dPR/580-mainmenu.jpg" class="card-img-top" alt="alt="580-mainmenu">
  <div class="card-body color-white">
    <h5 class="card-title color-white">${item.name}</h5>
    </div>
  <ul class="list-group list-group-flush"> 
    <li class="list-group-item"><i class="fa-map-marker-alt color-white"></i> Calle: ${
      item.address.street
    }, Ciudad: ${item.address.city}, Estado: ${item.address.state}</li>
   
    <li class="list-group-item"><i class="fas fa-envelope color-white"></i> ${
      item.contact.email
    }</li>
    <li class="list-group-item"><i class="fas fa-phone color-white"></i> ${
      item.contact.phone
    }</li>
    <li class="list-group-item"><i class="fas fa-globe color-white"></i> ${
      item.contact.site
    }</li>
    <li class="list-group-item"><i class="fas fa-star color-white"></i> ${
      item.rating
    }</li>
  </ul>
</div>
    
  `;
  });
};

const orderAsName = () => {
  InfoRestaurant.sort((a, b) => a.name.localeCompare(b.name));
  paintInfo(InfoRestaurant);
};
document.getElementById("orderAsName").addEventListener("click", orderAsName);

const orderDesName = () => {
  InfoRestaurant.sort((a, b) => b.name.localeCompare(a.name));
  paintInfo(InfoRestaurant);
};
document.getElementById("orderDesName").addEventListener("click", orderDesName);

const orderAsRtg = () => {
  InfoRestaurant.sort((a, b) => a.rating - b.rating);

  paintInfo(InfoRestaurant);
};
document.getElementById("orderAsRtg").addEventListener("click", orderAsRtg);

const orderDesRtg = () => {
  InfoRestaurant.sort((a, b) => b.rating - a.rating);

  paintInfo(InfoRestaurant);
};
document.getElementById("orderDesRtg").addEventListener("click", orderDesRtg);
