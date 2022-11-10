const param = new URLSearchParams(window.location.search);
const productID = param.get("productID");

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVjYmQ0YmUzZDAwMTU4NDYwMDciLCJpYXQiOjE2NjgwODUxOTUsImV4cCI6MTY2OTI5NDc5NX0.MIa8PmB0AzDGoIKLSP-18F6DEOXtTpGCqy2M5o8yIc4",
    "Content-Type": "application/json",
  },
};

const getProduct = async () => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productID}`, options);
  const product = await response.json();
  return product;
};

const displayProduct = (product) => {
  document.querySelector(".row").innerHTML = `  <div class="col-6 mt-5">
                            <h1>Product Details</h1>
                            <div class="card mt-5">
                                <img src=${product.imageUrl} alt="" />
                            </div>
                            </div>
                            <div id="display-product" class="col-6 mt-5" style="display: flex; align-items: center">
                            <div class="card card-body">
                            <h1>${product.name}</h1>
                            <h3>${product.brand}</h3>
                            <h6 style="margin-block-start: 1em">
                            ${product.description}
                            </h6>
                            <div class="mt-4">
                            <button class="btn btn-outline-info" onclick = "editProduct()">Edit</button>
                            <button class="btn btn-danger" onclick ="deleteProduct()">Delete</button>
                            </div>
                        </div>
                        </div>`;
};

window.onload = async () => {
  const product = await getProduct();
  displayProduct(product);
};

const deleteProduct = async () => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVjYmQ0YmUzZDAwMTU4NDYwMDciLCJpYXQiOjE2NjgwODUxOTUsImV4cCI6MTY2OTI5NDc5NX0.MIa8PmB0AzDGoIKLSP-18F6DEOXtTpGCqy2M5o8yIc4",
      "Content-Type": "application/json",
    },
  };
  if (confirm("Are you sure?")) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productID}`, options);
    const product = response.json();

    if (response.ok) {
      window.location.assign("../html/index.html");
    } else {
      console.log("something went wrong");
    }
  }
};

const editProduct = () => {
  window.location.assign(`../html/backoffice.html?productID=${productID}`);
};
