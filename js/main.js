const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    {id: 5, title: 'Monitor', price: 14500},
    {id: 6, title: 'Monitor', price: 10000},
    {id: 7, title: 'Monitor', price: 12500},
    {id: 8, title: 'Headphones', price: 500},
    {id: 9, title: 'Microphone', price: 700},
    {id: 10, title: 'Flash', price: 400},
    {id: 11, title: 'Flash', price: 500},
    {id: 12, title: 'Adapter', price: 600},
];

const renderProduct = (title, price, img = 'placeholder') => {
    return `<div class="product-item">
                <img class="product-pic" scr="${img}">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
            </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(good => renderProduct(good.title, good.price));
    let productHtml = '';
    productList.forEach(element => productHtml += element);
    document.querySelector('.products').innerHTML = productHtml;
};

renderProducts(products);