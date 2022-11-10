const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVjYmQ0YmUzZDAwMTU4NDYwMDciLCJpYXQiOjE2NjgwODUxOTUsImV4cCI6MTY2OTI5NDc5NX0.MIa8PmB0AzDGoIKLSP-18F6DEOXtTpGCqy2M5o8yIc4",
    "Content-Type": "application/json",
  },
};
const getProduct = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options);
  const products = await response.json();

  //   console.log(products);
  products.forEach((product) => {
    console.log(product);
    const productContainer = document.querySelector("#product-container");
    productContainer.innerHTML += `<div class="col-2 mt-5">
                                        <div class="card" style="width: 200px; padding: 10px">
                                        <div class="card-img-top">
                                            <img src=${product.imageUrl}alt="" style="width: 100%" />
                                        </div>
                                        <div class="card-body">
                                            <h4>${product.name}</h4>
                                            <h5>${product.brand}</h5>
                                            <h6>${product.description}</h6>
                                        </div>
                                        </div>
                                    </div`;
  });
};

getProduct();
