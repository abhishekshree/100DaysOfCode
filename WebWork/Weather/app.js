window.addEventListener('load', ()=>{
    let long;
    let lat;
    let tempdesc = document.querySelector(".temperature-description");
    let temperature = document.querySelector(".temperature-degree");
    let timezone = document.querySelector(".location-timezone");
    let section = document.querySelector(".temperature");
    let cf = document.querySelector(".CF");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=0ab6d25da9922fd7b3da26632fca161a`;


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temp = data.main.temp -273.15;
                    const summary = data.weather[0].description;
                    const headline = data.weather[0].main
                    
                    //Set elements
                    temperature.textContent = temp;
                    tempdesc.textContent = summary;
                    document.querySelector(".temperature-headline").textContent = headline;
                    timezone.textContent = data.name + ", " + data.sys.country;

                    const iconcode = data.weather[0].icon;
                    const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    document.querySelector("#wicon").setAttribute('src', iconurl);

                    const farenheit = ((9/5)*temp) + 32;

                    //C to F or vice versa
                    section.addEventListener('click', ()=>{
                        if(cf.textContent === "C"){
                            cf.textContent = "F";
                            temperature.textContent = Math.round(farenheit);
                        }else{
                            cf.textContent = "C";
                            temperature.textContent = temp;
                        }

                    });

                });


    });
   
    }

    function setIcon(icon, iconid){
        const skycons = new skycons({color : "white"});
    }


});

