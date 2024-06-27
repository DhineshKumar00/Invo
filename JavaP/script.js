// Sample data structure to hold products (to be replaced with backend integration)
let products = [];

// Function to add a new product
function addProduct(event) {
    event.preventDefault();
    
    // Retrieve form values
    let productName = document.getElementById("productName").value;
    let productDescription = document.getElementById("productDescription").value;
    let productQuantity = parseInt(document.getElementById("productQuantity").value);
    let productPrice = parseFloat(document.getElementById("productPrice").value);
    
    // Create a new product object
    let newProduct = {
        name: productName,
        description: productDescription,
        quantity: productQuantity,
        price: productPrice
    };
    
    // Add the new product to the products array
    products.push(newProduct);
    
    // Clear the form fields
    document.getElementById("productName").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
    
    // Refresh the product table
    displayProducts();
}

// Function to display products in the table
function displayProducts() {
    let tableBody = document.querySelector("#productTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    
    products.forEach((product, index) => {
        let row = tableBody.insertRow();
        
        let nameCell = row.insertCell(0);
        let descriptionCell = row.insertCell(1);
        let quantityCell = row.insertCell(2);
        let priceCell = row.insertCell(3);
        let actionCell = row.insertCell(4);
        
        nameCell.textContent = product.name;
        descriptionCell.textContent = product.description;
        quantityCell.textContent = product.quantity;
        priceCell.textContent = product.price.toFixed(2);
        
        // Action button (optional - delete product)
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            deleteProduct(index);
        });
        actionCell.appendChild(deleteBtn);
    });
}

// Function to delete a product
function deleteProduct(index) {
    products.splice(index, 1); // Remove product from array
    displayProducts(); // Refresh table
}

// Function to cancel adding a product
function cancelAddProduct() {
    document.getElementById("addProductForm").style.display = "none";
}

// Sample login functionality (replace with actual authentication)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulated login
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".register-container").style.display = "none";
    document.querySelector(".main-container").style.display = "block";
});

// Sample registration functionality (replace with actual registration logic)
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulated registration
    alert("Registration successful!");
});
