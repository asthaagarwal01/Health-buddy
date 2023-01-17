let loc=document.getElementById("city");
let icon=document.getElementById("iconsc");
let temp=document.getElementById("temp");
let type=document.getElementById("type");
let iconimage;
const sinput=document.getElementById("in");
const sbut=document.getElementById("searches");

sbut.addEventListener('click', (e)=>
{
    var dropdowns = document.getElementsByClassName("doc");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
e.preventDefault();
getweather(sinput.value);
sinput.value='';


});


const getweather=async (city)=>
{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=184c8fd1b7ce130dead9a7e3277dfe51`,
        
            {mode: 'cors'}
        );

        const weatherdata=await response.json();
        console.log(weatherdata);
        const{name}=weatherdata;
        const{feels_like}=weatherdata.main;
        const{id,main}=weatherdata.weather[0];

        loc.textContent=name;

        if(loc.textContent.toLowerCase()==="gurgaon")
        {
            
            
            document.getElementById("gurgaon").classList.toggle("show");
            document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }
        
        else if(name.toLowerCase()==="noida")
        {
            document.getElementById("noida").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="mumbai")
        {
            document.getElementById("mumbai").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="kochi")
        {
            document.getElementById("kochi").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="jaipur")
        {
            document.getElementById("jaipur").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="nagpur")
        {
            document.getElementById("nagpur").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="delhi")
        {
            document.getElementById("delhi").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }


        else if(name.toLowerCase()==="hyderabad")
        {
            document.getElementById("hyderabad").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="banglore")
        {
            document.getElementById("banglore").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else if(name.toLowerCase()==="guwahati")
        {
            document.getElementById("guwahati").classList.toggle("show");
        document.getElementById("soon").innerHTML="Here are top doctors in your city";
        }

        else 
        {
            document.getElementById("soon").innerHTML="Health buddy is coming soon to your city";
            
        }
        

        type.textContent=main;
        temp.textContent=Math.round(feels_like-273);

        if(id<300 && id>200)
        {
            
            icon.src="images/thunderstorm.png"
        }
        else if(id<400 && id>300)
        {
            icon.src="images/drizzle.png"
        }
        else if(id<600 && id>500)
        {
            icon.src="images/raining.png"
        }
        else if(id<700 && id>600)
        {
            icon.src="images/snow.png"
        }
        else if(id==800)
        {
            
            icon.src="images/clearsky.png"
        }

        else if(id>800)
        icon.src="images/Clouds.png";
        
    }

    catch(error)
    {
        alert("city not found , Enter again");
    }
};