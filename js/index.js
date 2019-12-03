let dropDownList= document.getElementById("city");

/* add event listener change to endpoint made request*/

dropDownList.addEventListener("change",function(){
    const endPoint=`http://api.weatherstack.com/current?access_key=98cbf395d4ee4dff3d9df0b2388d006f&query=${dropDownList.value}`;
});


/* THis sends https 
fetch('endpoint')*/

fetch(endPont)
.then(function(response){

    //this plucks the json data out of the response
    response.json()
    .then(function(data){   // data is json data that is converted
        alert(data.current.temperature);
    })
})