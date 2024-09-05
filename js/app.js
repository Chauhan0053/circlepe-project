const properties = [
    {
        name: "Sky Dandelions Apartment",
        rating: "4.9",
        location: "Sector 28, Gurgaon",
        price: "₹ 22,000/month",
        imageUrl: "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg"
    },
    {
        name: "Wings Tower",
        rating: "4.7",
        location: "Sector 27, Gurgaon",
        price: "₹ 17,000/month",
        imageUrl: "https://vaarivana.com/wp-content/uploads/2023/05/Unveiling_the_Splendor.jpg.webp"
    },
    {
        name: "Wayside Modern House",
        rating: "4.4",
        location: "MG Road, Gurgaon",
        price: "₹ 18,000/month",
        imageUrl: "https://static.independent.co.uk/2024/01/09/12/FAO_83054_Villa_Mangas_Albufeira_0723_01_RGB-136-DPI-For-Web.jpg"
    },
    {
        name: "Nirala Aspire",
        rating: "4.4",
        location: "Sector 37, Gurgaon",
        price: "₹ 23,000/month",
        imageUrl: "https://static.independent.co.uk/2024/01/09/12/FAO_83054_Villa_Mangas_Albufeira_0723_01_RGB-136-DPI-For-Web.jpg"
    },
    {
        name: "Supertech Ecovillage 2",
        rating: "4.2",
        location: "Sector 31, Gurgaon",
        price: "₹ 26,000/month",
        imageUrl: "https://static.independent.co.uk/2024/01/09/12/FAO_83054_Villa_Mangas_Albufeira_0723_01_RGB-136-DPI-For-Web.jpg"
    },
    {
        name: "Cleo County",
        rating: "4.9",
        location: "Sector 29, Gurgaon",
        price: "₹ 28,000/month",
        imageUrl: "https://static.independent.co.uk/2024/01/09/12/FAO_83054_Villa_Mangas_Albufeira_0723_01_RGB-136-DPI-For-Web.jpg"
    }
];

const propertyList = document.getElementById('property-list');

properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card';
    propertyCard.innerHTML = `
                <img src="${property.imageUrl}" alt="${property.name}">
                <div class="property-info">
                    <h3>${property.name}</h3>
                    <p>⭐ ${property.rating} • ${property.location}</p>
                    <p class="price-i">${property.price}</p>
                </div>
            `;

    // Add click event to each card
    propertyCard.addEventListener('click', () => {
        showPropertyDetails(property);
    });

    propertyList.appendChild(propertyCard);
});

// Function to handle card click and show new screen
function showPropertyDetails(property) {
    const url = new URL('property-details.html', window.location.href); // Change 'property-details.html' to your new HTML file
    url.searchParams.set('name', property.name);
    url.searchParams.set('rating', property.rating);
    url.searchParams.set('location', property.location);
    url.searchParams.set('price', property.price);
    url.searchParams.set('imageUrl', property.imageUrl);
    url.searchParams.set('monthlyPayment', property.monthlyPayment);
    url.searchParams.set('totalAmount', property.totalAmount);
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', function() {
    const periodButtons = document.querySelectorAll('.period-button');
    
    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            periodButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
            
            // You can add more functionality here, such as updating the price or other details
            console.log(Selected period: ${this.textContent});
        });
    });
});
