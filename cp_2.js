function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then(response => response.json())
    .then(data => {
      data.slice(0, 5).forEach(product =>
        console.log(product.fields.name)
      );
    })
    .catch(error => {
      handleError(error)
    });
}


async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Display first 5 products, creating a div element to display name image and price
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  const displayfirstFiveProducts = products.slice(0, 5);
  displayfirstFiveProducts.forEach(product => {
    const { name, price, image } = product.fields;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h3>${name}</h3>
      <p>₹${(price / 100).toFixed(2)}</p>
    `;
    container.appendChild(card);
  });
}

// adding a reusable error handler function
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}