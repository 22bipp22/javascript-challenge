// Reference the table body
let tbody = d3.select("tbody");

//Assign a variable for the data
let ufoData = data;
// console.log(data)

//Populate the table with the data from data.js
data.forEach((ufoSighting) => {
    // console.log(ufoSighting);
    let row = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key, value]) => {
        let cell = row.append('td');
        cell.text(value);
    });
});

//Set the button and date field to variables
let button = d3.select("#filter-btn");
let form = d3.selectAll(".form-control");

//Create the event handlers
button.on("click", init);
form.on("change", dataFilter);

//Clear the search data and re-display the table with the data from data.js 
//This will happen when button is clicked.
function init() { 
    //Clear the previously displayed data
    tbody.html("");

    //Repopulate the screen with all data
    data.forEach((ufoSighting) => {
        // console.log(ufoSighting);
        let row = tbody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            let cell = row.append('td');
            cell.text(value);
        });
    });

    // Restore search values to placeholders
    let initDate = d3.select('#datetime');    
    initDate.property("value", initDate.attr("placeholder"));

    let initCity = d3.selectAll('#city');
    initCity.property("value", initCity.attr("placeholder"));
    
    let initState = d3.selectAll('#state');
    initState.property("value", initState.attr("placeholder"));

    let initCountry = d3.selectAll('#country');
    initCountry.property("value", initCountry.attr("placeholder"));

    let initShape= d3.selectAll('#shape');
    initShape.property("value", initShape.attr("placeholder"));
};

//filter the data based on input and populate the screen. 
function filterItems(items, searchVal) {
    return items.filter((item) => Object.values(item).includes(searchVal));
    
};

// Function to handle  the data if data entered
function dataFilter() {

    //Prevent the page from refreshing on submit
    d3.event.preventDefault();
    
    //Grab the event and set filter values. 
    let filterValues = {};
    let filteredData = {};
    
    let variable = d3.select(this);
    filterValues = {
        filterKey: variable.attr("id"),
        filterValue: variable.property("value")
    };
    
    // console.log(filterValues);
    // console.log(`key = ${filterValues.filterKey}` );
    // console.log(`value = ${filterValues.filterValue}`);
    
    let searchVal = filterValues.filterValue;

    filteredData = filterItems(ufoData, searchVal); 
    
    // console.log(filteredData);
  
    //   // Display only the filtered rows
    //let tbody = d3.select("tbody");

    //Clear the previously displayed data
    tbody.html("");

    //Populate the table area with the filtered data
    filteredData.forEach((foundDate) => {
        console.log(foundDate);
        let newRow = tbody.append('tr');
        Object.entries(foundDate).forEach(([key, value]) => {
            let newCell = newRow.append('td');
            newCell.text(value);
        });
    });
};  
