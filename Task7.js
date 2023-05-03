//Get all the countries with a population of less than 2 lakhs using Filter function
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
                let countriesdata = JSON.parse(xhr.response);
                console.log(countriesdata.filter((element)=>element.population < 200000 && element.region))
            }
            xhr.send();
        </script>
    </body>
</html>

//Get all the countries from the Asia continent /region using the Filter function
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
                let countriesdata = JSON.parse(xhr.response);
                console.log(countriesdata.filter((element)=>element.region==="Asia"))  
            }
            xhr.send();
        </script>
    </body>
</html>

//Print the following details name, capital, flag using forEach function
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
                let countriesdata = JSON.parse(xhr.response);
                countriesdata.forEach(element => console.log(element.name.common,element.capital,element.flag));
            }
            xhr.send();
        </script>
    </body>
</html>
