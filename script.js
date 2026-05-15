function openQuoteModal() {
    document.getElementById('quoteModal').style.display = 'block';
}

function closeQuoteModal() {
    document.getElementById('quoteModal').style.display = 'none';
}

function claimVIPSpot() {
    window.open('https://wa.me/27735420981?text=Hi%20Truth%2C%20I%20want%20to%20claim%20the%20VIP%20Spot%20%232%20for%20R3,700', '_blank');
}

window.onclick = function(event) {
    let modal = document.getElementById('quoteModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('quoteForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let business = document.getElementById('business').value;
    let package = document.getElementById('package').value;
    
    let whatsappMsg = `Hi Truth, Quote Request:%0AName: ${name}%0APhone: ${phone}%0ABusiness: ${business}%0APackage: ${package}`;
    window.open(`https://wa.me/27735420981?text=${whatsappMsg}`, '_blank');
    closeQuoteModal();
});

console.log("Truth's Web Master - Dark Purple Loaded");