document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;

    
    document.getElementById('googleLogin').addEventListener('click', function() {
        console.log('Google Login clicked');
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: true
        }).then(() => {
            $('#actionModal').modal('show');
        });
    });

    
    document.getElementById('emailLoginButton').addEventListener('click', function() {
        document.getElementById('emailLoginForm').style.display = 'block';
    });

    
    document.getElementById('emailLogin').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(`Email: ${email}, Password: ${password}`);
        $('#actionModal').modal('show');
    });

    
    document.getElementById('sellButton').addEventListener('click', function() {
        $('#sellCardModal').modal('show');
    });

    
    document.getElementById('sellProductForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImage = document.getElementById('productImage').value;
        const productPrice = document.getElementById('productPrice').value;

        
        const product = {
            name: productName,
            description: productDescription,
            image: productImage,
            price: productPrice
        };

        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        
        $('#sellCardModal').modal('hide');

        
        document.getElementById('sellProductForm').reset();

        
        window.location.href = 'products.html';
    });

    
    document.getElementById('purchaseButton').addEventListener('click', function() {
        window.location.href = 'products.html';
    });
});
