// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productGrid = document.querySelector('.product-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            // Implement filtering logic here
            // You can filter the products based on the data-filter attribute
        });
    });

    // Add more interactive JavaScript as needed
});
document.querySelector('.fashion-container button').addEventListener('click', () => {
    const inputValue = document.querySelector('.fashion-container input').value;
    console.log(inputValue);
 });
 