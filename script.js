let btnTourSelection = document.getElementById('btn-tour-selection');
btnTourSelection.addEventListener("click", tourSelection);

function tourSelection() {
    let selectedTourCountry = prompt('Which country tour are you interested in?').toLowerCase();
    let message;
    let price;
    switch (selectedTourCountry) {
        case 'egypt':
            message = "Tour of this country is available.";
            price = 200;
            break;
        case 'italy':
            message = "Tour of this country is available.";
            price = 350;
            break;
        case 'greece':
            message = "Tour of this country is available.";
            price = 220;
            break;
        case 'turkey':
            message = "Tour of this country is available.";
            price = 160;
            break;
        case 'romania':
            message = "Tour of this country is available.";
            price = 100;
            break;
        case 'tunis':
            message = "Tour of this country is available.";
            price = 210;
            break;
        case 'uae':
            message = "Tour of this country is available.";
            price = 400;
            break;
        default: message = 'There is no tour in this country';
    }
    message = confirm(`${message} It costs ${price}$. Do you want a hot tour?`);
    price *= 0.8;
    (message === true) ? alert(`Discount -20%. This tour costs ${price}$`) : alert("Okay");
}