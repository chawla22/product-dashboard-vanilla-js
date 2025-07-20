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