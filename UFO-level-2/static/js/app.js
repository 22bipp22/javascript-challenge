// Reference the table body
let tableBody = d3.select("tbody");

//Assign a variable for the data
let ufoData = data;
// console.log(data)

//Populate the table with the data from data.js
data.forEach((ufoSighting) => {
    // console.log(ufoSighting);
    let row = tableBody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    });
});

//Set the button and date field to variables
let button = d3.select("#filter-btn");
let form = d3.select("#form");

//Create the event handlers
button.on("click", dataFilter);
form.on("submit", dataFilter);

//Function to filter the data if date entered
function dataFilter() {

    //Prevent the page from refreshing on submit
    d3.event.preventDefault();

    d3.selectAll("li").on("change", function() {
        // you can select the element just like any other selection
        let valueInput = d3.select(this);
        let valueInputText = valueInput.text();
        console.log(valueInputText);
      });
    //Select the html where the date will be entered
    // let valueInput = d3.event.target.value;
    // console.log(valueInput);
    
    //Select the html where the date will be entered
    let inputDate = d3.select("#datetime");
    let inputCity = d3.select("#city");
    let inputState = d3.select("#state");
    let inputCountry = d3.select("#country");
    let inputShape = d3.select("#shape");

    //Get the value of what was entered
    let dateValue = inputDate.property("value");
    let cityValue = inputCity.property("value");
    let stateValue = inputState.property("value");
    let countryValue = inputCountry.property("value");
    let shapeValue = inputShape.property("value");
    
    
    //Determine which fields had values entered and save them to an array. 
    let filterKeys = [];
    let filterValues = [];
    let filteredData = " ";

    if (dateValue) {
        let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);
        console.log(newData);
        
    };

    if (cityValue) {
        let newData = newData.filter(sighting => sighting.city === cityValue);
        console.log(newData);
        
    };

    if (stateValue) {
        filterKeys.push("state");
        filterValues.push(stateValue);
        
    };

    if (countryValue) {
        filterKeys.push("country");
        filterValues.push(countryValue);
        
    };

    if (shapeValue) {
        filterKeys.push("shape");
        filterValues.push(shapeValue);
        
    };

      //Use the date entered to filter the data
    let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);

    // let filteredData = newData
      // console.log(filteredData);
  
      //Display only the filtered rows
    let tbody = d3.select("tbody");

    //Clear the previously displayed data
    tbody.html("");

    //Populate the table area
    filteredData.forEach((foundDate) => {
        console.log(foundDate);
        let newRow = tbody.append('tr');
        Object.entries(foundDate).forEach(([key, value]) => {
            let newCell = newRow.append('td');
            newCell.text(value);
        });
    });
};  
    // console.log(`keys ${filterKeys}, values ${filterValues}`);
    //Use the date entered to filter the data

   

//     //loop through the filter keys and filter the data. 
//     for (let x = 0; x < filterKeys.length; x ++) {
//         let searchItem = filterKeys[x];
//         let filteredData = ufoData.filter(ufoData.searchItem === filterValues[x]);
//         console.log(ufoData.searchItem);
//         console.log(filteredData);
// }

    //let filteredData = ufoData.filter(sighting => sighting.datetime === dateValue);

    
    // console.log(filteredData);


// }
// function letsFilter(item, value) {
//     let newUfoData = ufoData.filter(sighting => sighting.datetime === value);
//     console.log(newUfoData);
// 