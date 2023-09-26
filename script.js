
async function fetchMakeupData() {
  try {
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

function displayMakeupProducts(products) {
  const container = document.getElementById('container');

  products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const brand = document.createElement('p');
    brand.textContent = `Brand: ${product.brand}`;

    const name = document.createElement('p');
    name.textContent = `Name: ${product.name}`;

    const price = document.createElement('p');
    price.textContent = `Price: ${product.price}`;

    const image = document.createElement('img');
    image.src = product.image_link;

    const description = document.createElement('p');
    description.textContent = `Description: ${product.description}`;

    const link = document.createElement('a');
    link.href = product.product_link;
    link.textContent = 'View Product';

    card.appendChild(brand);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(link);

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchMakeupData();
    displayMakeupProducts(data);
  } catch (error) {
  }
});
