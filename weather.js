let formate = moment().format("ddd ha")
console.log(formate);

function submit() {
    let cityname = document.getElementById('cityName').value
    console.log(cityname);
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
    )

        .then((res) => res.json())
        .then((res) => {
            console.log(res)

            var bodi = document.querySelector('.middle-cont')
            bodi.innerHTML = `
     <div class="weather"> 

    <div id="mid-cont-child1">

    <div id="city-first-child" >

    <h2 id="city"></h2>
    <h6 id="pk"></h6>

    </div>
    <div id="city-sec-child">
    <p id="date"></p>
    </div>
    </div>

    <div id="mid-cont-child2">

    <div id="icon-div">
     <img src="" id="img"  >
     </div>
    
      <div id="feels-temp">
   <h1 id="temp"> </h1>
   <h6 id="h6" >haze </h6>

    </div>

    </div>

    <div id="mid-cont-child3">
<div id="temp-parent">
    <div id="temp1">

<div class="child1" id="feels_temp">Feels Like</div>
<div class="child1" id="feel_temp"></div>

    </div>
    <div id="temp2">

<div class="child2">Humidity</div>
<div class="child2" id="humidity"></div>

    </div>

    <div id="temp3">
<div class="child3">Winds</div>
<div class="child3" id="wind"></div>
    
    </div>
</div>
    </div>
</div>

`
            try {

                let city = document.getElementById('city').innerHTML = `${res.name}`
                if (!res.name) {

                    document.getElementById('city').innerHTML = ""
                    document.getElementById('temp-parent').innerHTML = ""
                    document.getElementById('h6').innerHTML = ""
                    
                    swal("City Not Found!", "error!", "error");
                }
                else {
                    let pk = document.getElementById('pk')
                    pk.innerHTML = `${res.sys.country}`
                    let date = document.getElementById('date')
                    date.innerHTML = `${formate}`
                    let temp = document.getElementById('temp')
                    temp.innerHTML = `${Math.floor(res.main.temp) }` 
                    let feel_temp = document.getElementById('feel_temp')
                    feel_temp.innerHTML = `${Math.floor(res.main.feels_like)}`
                    let humidity = document.getElementById('humidity')
                    humidity.innerHTML = `${res.main.humidity}`
                    let wind = document.getElementById('wind')
                    wind.innerHTML = `${res.wind.speed}`
                
                    // let wind = document.getElementById('dowresult').innerHTML = res.wind.deg
                    let img = document.getElementById('img').src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
                }
            }
            catch (err) {
                console.log(err)
            }

        })


}


