// Reference the table body
let tbody = d3.select("tbody");

//Assign a variable for the data
let ufoData = data;
// console.log(data)

//Populate the table with the data from data.js
ufoData.forEach((ufoSighting) => {
    // console.log(ufoSighting);
    let row = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    });
});

//Set the button and date field to variables
let button = d3.select("#filter-btn");
let form = d3.selectAll(".filter");

//Create the event handlers
button.on("click", clearSearches);
form.on("change", dataFilter);

//Clear the search data and re-display the table with the data from data.js 
//This will happen when button is clicked.
function clearSearches() { 
    //Clear the previously displayed data
    tbody.html("");

    //Repopulate the screen with all data
    ufoData.forEach((ufoSighting) => {
        // console.log(ufoSighting);
        let row = tbody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            let cell = row.append('td');
            cell.text(value);
        });
    });

    // Restore search values to placeholders
    let initDate = d3.select('#datetime');    
    initDate.property("value", "");

    let initCity = d3.selectAll('#city');
    initCity.property("value", "");
    
    let initState = d3.selectAll('#state');
    initState.property("value", "");

    let initCountry = d3.selectAll('#country');
    initCountry.property("value", "");

    let initShape= d3.selectAll('#shape');
    initShape.property("value", "");

    ///Clear the previous filters.
    filterValues = {}
    
};


//Initialize the area to hold the filters
let filterValues = {};

// Function to handle  the data if data entered
function dataFilter() {

    //Grab the event and set filter values. 
    
    let variable = d3.select(this).select("input");
    let filterKey = variable.attr("id");
    let filterValue = variable.property("value");

    //If data was entered into the filter field, add it to the filters list
    if (filterValue) {
        filterValues[filterKey] = filterValue;
        // console.log(filterValues);
    }
    else {
        delete filterValues[filterKey];
    }

    filterItems();    
   
};  
//filter the data based on input and populate the screen. 
function filterItems() {
    let filteredData = ufoData
    
    Object.entries(filterValues).forEach(([key, value]) => {
        filteredData = filteredData.filter(item => item[key] === value);
    });
    //Clear the previously displayed data
    tbody.html("");

    //Populate the table area with the filtered data
    filteredData.forEach((found) => {
        // console.log(found);
        let newRow = tbody.append('tr');
        Object.entries(found).forEach(([key, value]) => {
            let newCell = newRow.append('td');
            newCell.text(value);
        });
    });       
};
