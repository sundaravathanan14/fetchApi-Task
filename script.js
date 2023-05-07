
var country =fetch("https://restcountries.com/v2/all");
 
  // feting country from api
  async function getCountries(){
    var countries=await country;
    
    var  countriesdata=await countries.json();
    getData(countriesdata);

  }

  getCountries();

  //  creating Html element 

  var container=document.createElement("div");
  container.setAttribute("class","container");
  var row=document.createElement("div");
  row.setAttribute("class","row");
  container.append(row);
  document.body.append(container);

//iterating countries 

function getData(data){
    for(let i=0;i<data.length;i++){

        row.innerHTML+=`<div class="col-lg-4 col-sm-12">
        <div class="card  mb-3" style="max-width: 18rem;">
  <div class="card-header">${data[i].name}</div>
  <img src="${data[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
    
    <p class="card-text">Capital:${data[i].capital}</p>
    <p class="card-text">Region:${data[i].region}</p>
    <p class="card-text">Country code:${data[i].alpha3Code}</p>
    <button class="btn btn-primary" onclick="getWeather('${data[i].latlng}')" >Click for Weather</button>
  </div>
</div>
      </div>`;
     
      
      
          }
}

function getWeather(data){
    var latlon=data.split(',');
    var apiKey ="2456919eae82039d466104d57053167d";
    var lat = latlon[0];
    var lng = latlon[1];
    var weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`);
   getWeatherData(weatherApi);

}
 // feting country from api
 async function getWeatherData(data){
  var weatherData=await data;
  
  var  weatherReport=await weatherData.json();
  display(weatherReport);

}
var dataDisplay = document.createElement("div");
document.body.append(dataDisplay);
 function display(data){
  dataDisplay.innerHTML = `<div class="modal fade show" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="display: block;">
 <div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h1 class="modal-title fs-5" id="staticBackdropLabel">Weather Report</h1>
       <button type="button"  onclick="closePopup()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
       <p>Temperature</p>
       <h6>${data.main.temp}</h6>
       <p>Weather description</p>
       <h6>${data.weather[0].description}</h6>
     </div>
   </div>
 </div>
</div>`;

 }
 function closePopup(){
  document.getElementById("staticBackdrop").style.display = "none";
 }
