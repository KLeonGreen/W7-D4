const param = new URLSearchParams(window.location.search);
const productID = param.get("productID");
console.log(productID);

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVjYmQ0YmUzZDAwMTU4NDYwMDciLCJpYXQiOjE2NjgwODUxOTUsImV4cCI6MTY2OTI5NDc5NX0.MIa8PmB0AzDGoIKLSP-18F6DEOXtTpGCqy2M5o8yIc4",
    "Content-Type": "application/json",
  },
};

window.onload = async () => {
  if (productID) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productID}`, options);
    const product = await response.json();
    console.log(product);

    let submitBtn = document.querySelector("#create-product");
    let collapse = document.querySelector("#collapseExample");
    submitBtn.textContent = "Edit Product";
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-outline-info");
    collapse.classList.add("show");

    document.querySelector("#product-name").value = product.name;
    document.querySelector("#product-description").value = product.description;
    document.querySelector("#product-brand").value = product.brand;
    document.querySelector("#product-image").value = product.imageUrl;
    document.querySelector("#product-price").value = product.price;
  }
};

async function addNewProduct() {
  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    brand: document.querySelector("#product-brand").value,
    imageUrl: document.querySelector("#product-image").value,
    price: document.querySelector("#product-price").value,
  };

  const options = {
    method: productID ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVjYmQ0YmUzZDAwMTU4NDYwMDciLCJpYXQiOjE2NjgwODUxOTUsImV4cCI6MTY2OTI5NDc5NX0.MIa8PmB0AzDGoIKLSP-18F6DEOXtTpGCqy2M5o8yIc4",
      "Content-Type": "application/json",
    },
  };

  try {
    const selectApi = productID ? `https://striveschool-api.herokuapp.com/api/product/${productID}` : "https://striveschool-api.herokuapp.com/api/product/";

    const response = await fetch(selectApi, options);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert(productID ? "Product edited successfully" : "Product added successfully");
    } else {
      throw new error("Something Went Wrong");
    }
  } catch (error) {
    console.error(error);
  }
}
