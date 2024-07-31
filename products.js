document.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const container = document.getElementById('productCardsContainer');

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: ${product.price}</p>
                        <button class="btn btn-info purchase-button">Purchase</button>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', productCard);
    });

    
    document.querySelectorAll('.purchase-button').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: '<strong>Congratulations!</strong>',
                icon: 'success',
                html: '<p>You have successfully purchased the product!</p>',
                showCloseButton: true,
                showConfirmButton: true,
                confirmButtonText: 'OK',
                background: '#f4f6f9',
                customClass: {
                    popup: 'animated fadeInDown',
                    closeButton: 'btn-close-class'
                },
                buttonsStyling: false,
            });
        });
    });
});


