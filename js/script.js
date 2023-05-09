document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting



    // Get the data from the form
    const rg = document.getElementById('rg').value;
    const region = document.getElementById('region').value;



    // Create an object with the data
    const data = {
        rg: rg,
        region: region
    };



    // Send the data to the server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log('Data saved successfully');
        })
        .catch(error => {
            console.error('Error saving data:', error);
        });
});













function allowDrop(even) {
    even.preventDefault();
}

function drag(even) {
    even.dataTransfer.setData("text", even.target.id);
}

function drop(even) {
    even.preventDefault();
    var fetchData = even.dataTransfer.getData("text");
    even.target.appendChild(document.getElementById(fetchData));
}

