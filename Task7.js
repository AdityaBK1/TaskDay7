<!DOCTYPE html>
<html>
    <head>
        <title>Guvi JS Day 3</title>
    </head>
    <body>
        <h1>Hello</h1>
        <h2>This is an example for XML HTTP Request</h2>
        <script>
            const xhr = new XMLHttpRequest ();
            xhr.open('GET', 'https://restcountries.com/v3.1/all');

            xhr.onload = function() {
                let data = JSON.parse(xhr.response);


//let hh = data.filter((element) => {
    // if (element.region === "Asia") {
    //     return element;
    // }
//});
  
//console.log(hh);
function by_region(data, region = 'Asia'){
	var asian_countries= data.filter((item)=> item['region'] === region);
    console.log(`Country from ${region} `, asian_countries)		
}


            
            }
        
            
            xhr.send();
        </script>
    </body>
</html>
