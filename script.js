
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
    <button class="btn btn-primary" id="${data[i].name}">Click for Weather</button>
  </div>
</div>
      </div>`;
      getWeather(`${data[i].name}`);
      
      //document.getElementById(`${data[i].name}`).addEventListener("click", getWeather);
          }
}

function getWeather(data){
    console.log(data);
    document.getElementById(data).addEventListener("click", function() {
        // Function to execute when the button is clicked
        console.log("Button  clicked!");
      });
    // document.getElementById(`${data}`).onclick = function() {
    //     console.log("hgsdfhbdsd");
    //   };

}
function getWeatherData(){
    
}
