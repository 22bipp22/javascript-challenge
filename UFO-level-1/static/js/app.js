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
// let tr = document.createElement('TR');
// tableBody.appendChild(tr);

// tableData.forEach((item) => {
    
//     // get the entries for every object in the array
//     Object.entries(item.forEach(([key, value]) => {
//         let td = item.createElement('TD');
//         tr.appendChild(item.createTextNode(key));
//         tr.appendChild(tr)
//         td.appendChild(item.createTextNode(value));
//         td.appendChild(td);
        
//         console.log(`Key: ${key} and Value: ${value}`);
//     }));
// });