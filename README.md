# weatherreport
A chrome extension that displays real time weather information on countries around the world. 

To make the extension work: 

-add your API key by modifying the value of the variable API_key in script.js. A free key can be obtained from openweathermap.org. 


To add your location: 

-add a new table row in index.html. The ID's for each table data cell should follow the ones above it, with your country code followed by "-location/temperature/description/humidity". 

-call the function fetchCountry(),with the arguments being the latitude of your desired location, the longitude of your desired location, 
 the country code you used when defining your table data cell IDs, and your full location name, in that order.
 
 
To remove a location:

-remove the corresponding table row (and all corresponding table data cells) in index.html

-remove the corresponding fetchCountry() call in script.js


To set Farenheit to the default temperature unit:
-set var celsius to false in script.js
