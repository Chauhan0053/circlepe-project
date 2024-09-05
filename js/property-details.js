
function showSlider() {
    var slider = document.getElementById('slider');
    slider.classList.toggle('show');
}

function goBack() {
    window.history.back();
}

function paymentOption(property) {
    const url = new URL('payment-option.html', window.location.href); 
    window.location.href = url;
}

function checkOut(property) {
    const url = new URL('checkout-option.html', window.location.href);
    window.location.href = url;
}