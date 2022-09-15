function submit(){
    let cityname = document.querySelector('#cityName').value
    // console.log(cityname);
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
        )
    
.then((res)=> res.json())       
.then((res) =>{
    console.log(res)
    
    var bodi = document.querySelector('.middle-cont')
    bodi.innerHTML +=`
    <center>
     <div class="weather"> 
    <h1 id="city"></h1>
    <h1 id="min_temp"></h1><br/>
    <img src="" id="img" >
    <h1 id="humidity"></h1> 
</div>
</center>
` 


    // console.log(res);

     try{
    let city = document.getElementById('city').innerHTML = "City :"+" " + `${res.name}`
    if(!res.name){

        document.getElementById('city').innerHTML = ""
        // swal( `${cityname}`+'/// '+"city not found")
        swal("Not Found");
    }
    else{
    // let max = document.getElementById('max_temp').innerHTML = `${res.main.temp_max}`
    let min = document.getElementById('min_temp').innerHTML = "Temp :"+" " + `${res.main.temp_min} C`
    let humidity = document.getElementById('humidity').innerHTML = "Humidity :"+" "+ `${res.main.humidity}`
    // let wind = document.getElementById('dowresult').innerHTML = res.wind.deg
    let img = document.getElementById('img').src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
}
}
     catch(err){
console.log(err)
     }

})

    
}


// async function submit( ){
//     let cityname = document.querySelector('#cityName').value
//     // console.log(cityname);
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=b42b1aac1910568ed886ad0b10a6b06b&units=metric`
//         )
    
// .then((res)=> res.json())       
// .then((res) =>{


//     console.log(res)
    
//     var bodi = document.querySelector('body')
//     bodi.innerHTML +=`
//     <center>
//      <div class="weather"> 
//     <h1 id="city"></h1>
//     <h1 id="min_temp"></h1><br/>
//     <img src="" id="img" >
//     <h1 id="humidity"></h1> 
// </div>
// </center>
// ` 


//     // console.log(res);

//      try{
//     let city = document.getElementById('city').innerHTML = `${res.name}`
//     if(!res.name){

//         document.getElementById('city').innerHTML = ""
//         swal( `${cityname}`+'/// '+"city not found")
//     }
//     else{
//     // let max = document.getElementById('max_temp').innerHTML = `${res.main.temp_max}`
//     let min = document.getElementById('min_temp').innerHTML = "TEMPERATURE"+" "+"</br>"+"("+`${res.main.temp_min}`+")"
//     let humidity = document.getElementById('humidity').innerHTML =  "HUMIDITY"+" "+"</br>"+"("+`${res.main.humidity}`+")"
//     // let wind = document.getElementById('dowresult').innerHTML = res.wind.deg
//     let img = document.getElementById('img').src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
// }
// }
//      catch(err){
// console.log(err)
//      }

// })

    
// }