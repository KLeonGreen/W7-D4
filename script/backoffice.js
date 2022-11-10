async function addNewProduct() {
  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    brand: document.querySelector("#product-brand").value,
    imageUrl: "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
    price: document.querySelector("#product-price").value,
  };

  const options = {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVjYmQ0YmUzZDAwMTU4NDYwMDciLCJpYXQiOjE2NjgwODUxOTUsImV4cCI6MTY2OTI5NDc5NX0.MIa8PmB0AzDGoIKLSP-18F6DEOXtTpGCqy2M5o8yIc4",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  };

  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options);
  const data = await response.json();
  console.log(data);

  if (response.ok) {
    alert("Product added successfully");
  }
}
