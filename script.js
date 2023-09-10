let btnTourSelection = document.getElementById('btn-tour-selection');
btnTourSelection.addEventListener("click", tourSelection);

function tourSelection() {
    let selectedTourCountry = prompt('Which country tour are you interested in?').toLowerCase();
    let message = "Tour of this country is available.";
    let price;
    switch (selectedTourCountry) {
        case 'egypt':
            price = 200;
            break;
        case 'italy':
            price = 350;
            break;
        case 'greece':
            price = 220;
            break;
        case 'turkey':
            price = 160;
            break;
        case 'romania':
            price = 100;
            break;
        case 'tunis':
            price = 210;
            break;
        case 'uae':
            price = 400;
            break;
        default: alert('There is no tour in this country');
    }
    if (price !== undefined) {
        message = confirm(`${message} It costs ${price}$. Do you want a hot tour?`);
        price *= 0.8;
        (message === true) ? alert(`Discount -20%. This tour costs ${price}$`) : alert("Okay");
    }
}