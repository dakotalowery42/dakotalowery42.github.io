const text_field = document.getElementById("weahter_input");
const key = apikey()
$("#btn").on('click', function(){
    console.log(text_field.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text_field.value}&appid=${key}`)
    // console.log(key)
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
        // console.log(data.weather[0].description)
        const weather = data.weather[0].description
        console.log(weather)
        const weatherDiv = document.getElementById("div1");
        div1.innerHTML = `<p>The Weather in ${text_field.value} is: ${weather}</p>`;
        if(weather == 'clear sky'){
            $('body').css({"background-color":"LightYellow"})
            var clearskyImg = document.createElement('img');
            clearskyImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/clearsky.png";
            document.getElementById('div1').appendChild(clearskyImg);
        }else if(weather == 'broken clouds'){
            $('body').css({"background-color":"DarkGray"})
            var brokencloudsImg = document.createElement('img');
            brokencloudsImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/broeknclouds.png";
            document.getElementById('div1').appendChild(brokencloudsImg);
        }else if(weather == 'scattered clouds'){
            $('body').css({"background-color":"Gray"})
            var scatteredcloudsImg = document.createElement('img');
            scatteredcloudsImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/scatteredclouds.png";
            document.getElementById('div1').appendChild( scatteredcloudsImg);
        }else if(weather == 'overcast clouds'){
            $('body').css({"background-color":"Gray"})
            var overcastcloudsImg = document.createElement('img');
            overcastcloudsImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/overcastclouds.png";
            document.getElementById('div1').appendChild(overcastcloudsImg);
        }else if(weather == 'few clouds'){
            $('body').css({"background-color":"LightGray"})
            var fewcloudsImg = document.createElement('img');
            fewcloudsImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/fewclouds.png";
            document.getElementById('div1').appendChild(fewcloudsImg);
        }else if(weather == 'shower rain'){
            $('body').css({"background-color":"Blue"})
            var showerrainImg = document.createElement('img');
            showerrainImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/showerrain.png";
            document.getElementById('div1').appendChild(showerrainImg);
        }else if(weather == 'rain'){
        $('body').css({"background-color":"DarkBlue"})
            var rainImg = document.createElement('img');
            rainImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/rain.png";
            document.getElementById('div1').appendChild(rainImg);
        }else if(weather == 'thunderstorm'){
            $('body').css({"background-color":"DarkBlue"})
            var thunderstormImg = document.createElement('img');
            thunderstormImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/thunderstorm.png";
            document.getElementById('div1').appendChild(thunderstormImg);
        }else if(weather == 'snow'){
            $('body').css({"background-color":"Gainsboro"})
            var snowImg = document.createElement('img');
            snowImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/snow.png";
            document.getElementById('div1').appendChild(snowImg);
        }else if(weather == 'mist'){
        $('body').css({"background-color":"LightBlue"})
            var mistImg = document.createElement('img');
            mistImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/mist.png";
            document.getElementById('div1').appendChild(mistImg);
        }else if(weather == 'light rain'){
            $('body').css({"background-color":"LightBlue"})
            var lightrainImg = document.createElement('img');
            lightrainImg.src = "https://github.com/dakotalowery42/dakotalowery42.github.io/blob/9c3791cf0f0ff6d32b4790b09554970cb0b9cd52/weathericons/lightrain.png";
            document.getElementById('div1').appendChild(lightrainImg);
        }
    })
    .catch((error)=>{
        console.log(error)
    });
})