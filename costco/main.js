const container = document.querySelector('.container');
const tableBody = document.querySelector('.responsive-table');
const loader = document.querySelector('.loader');

fetch("https://lightswitchapi.com/io/1dc0b46aa6ce4325b9b92f37b11835d8/cosapi/dev/cospi", {
    method: "GET"
})
.then(response => response.json())
.then(json => {
    if (!json.success) {
        throw new Error(json.message);
    }

    const fuelDataString = json.data.records[0].data;
    const fuelData = JSON.parse(fuelDataString); // Parse the string to convert it to an object
    console.log(fuelData);

    const storeStates = {
        "Casuarina": "WA",
        "Perth Airport": "WA",
        "Adelaide": "SA",
        "Epping": "VIC",
        "Moorabbin": "VIC",
        "Canberra": "ACT",
        "Crossroads": "NSW",
        "Marsden Park": "NSW",
        "Lake Macquarie": "NSW",
        "Gold Coast": "QLD",
        "Ipswich": "QLD",
        "North Lakes": "QLD"
    };

    for (const storeName in fuelData) {
        if (fuelData.hasOwnProperty(storeName)) {
            const rowData = fuelData[storeName];
            const state = storeStates[storeName] || ''; // Get the state corresponding to the store
            let tableRow = `<tr><td>${storeName}</td>`;
            for (const key in rowData) {
                if (rowData.hasOwnProperty(key) && key !== 'unleaded95') { // Exclude 'unleaded95' column
                    let value = rowData[key]; // Get the value
                    if (typeof value === 'string') { // Check if value is a string
                        value = value.replace('$', ''); // Remove '$' from the start of the value
                    }
                    tableRow += `<td>${value}</td>`;
                }
            }
            tableRow += `<td>${state}</td>`; // Add the state column
            tableRow += '</tr>';
            tableBody.insertAdjacentHTML('beforeend', tableRow);
        }
    }

    loader.style.display = 'none';
})
.catch(error => {
    alert(error.message);
});
