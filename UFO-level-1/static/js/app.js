// Reference the table body
let tableBody = d3.select("tbody");

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

    //Select the html where the date will be entered
    let inputDate = d3.select("#datetime");

    //Get the value of what was entered
    let dateValue = inputDate.property("value");

    console.log(dateValue);
    console.log(data);

}