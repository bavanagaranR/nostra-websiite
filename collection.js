// collections
// Select all checkbox inputs
const filters = document.querySelectorAll('input[type="checkbox"]');

// Select all the products
const products = document.querySelectorAll('.product');

// Event listener for when any checkbox is clicked
filters.forEach(filter => {
    filter.addEventListener('change', filterProducts);
});

function filterProducts() {
    // Get all selected filter values
    let selectedFilters = Array.from(filters)
        .filter(checkbox => checkbox.checked) // Only keep checked checkboxes
        .map(checkbox => checkbox.value);     // Get the value of each checked checkbox

    products.forEach(product => {
        // Get the product's tags
        let tags = product.querySelector('tags').textContent.split(',');

        // Check if the product has all the selected filters
        let isMatch = selectedFilters.every(filter => tags.includes(filter));

        // Show or hide the product based on the match
        if (isMatch || selectedFilters.length === 0) {
            product.style.display = 'block'; // Show the product
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
}
