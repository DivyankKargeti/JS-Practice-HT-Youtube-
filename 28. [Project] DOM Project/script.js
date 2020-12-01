const tshirts = [
  {
    name: "Red Tshirt",
    price: "299",
  },
  {
    name: "Yellow Tshirt",
    price: "599",
  },
  {
    name: "Green Tshirt",
    price: "699",
  },
  {
    name: "Blue Tshirt",
    price: "399",
  },
  {
    name: "Pink Tshirt",
    price: "250",
  },
];


function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  tshirts.forEach((tshirt) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(tshirt.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + tshirt.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  tshirts.sort((a, b) => a.price - b.price);
  generateLIST();
});
