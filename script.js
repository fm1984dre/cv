// База данни с авточасти (примерни артикули)
const productsData = [
    { id: 1, brand: 'EEC', name: 'Катализатор за Audi A4 2.0 TDi', price: '345.00 лв.', icon: '🚗' },
    { id: 2, brand: 'Klarius', name: 'Задно изпускателно гърне за VW Golf V', price: '120.00 лв.', icon: '⚙️' },
    { id: 3, brand: 'Euroflo', name: 'Изпускателна тръба за BMW E46', price: '85.50 лв.', icon: '🔧' },
    { id: 4, brand: 'Sigam', name: 'Средно гърне за Opel Astra H', price: '110.00 лв.', icon: '🚘' },
    { id: 5, brand: 'EEC', name: 'DPF Филтър за твърди части за Peugeot 307', price: '520.00 лв.', icon: '🚛' },
    { id: 6, brand: 'Klarius', name: 'Монтажен комплект и тампони за гърне', price: '15.00 лв.', icon: '🔩' },
    { id: 7, brand: 'Euroflo', name: 'Гъвкава връзка (мека връзка) за ауспух', price: '45.00 лв.', icon: '⛓️' },
    { id: 8, brand: 'Sigam', name: 'Спортно задно гърне универсално', price: '195.00 лв.', icon: '🏎️' }
];

// Функция за визуализиране на продуктите на екрана
function displayProducts(brandFilter = 'all') {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Изчистваме старите продукти

    // Филтрираме продуктите спрямо избраната марка
    const filteredProducts = brandFilter === 'all' 
        ? productsData 
        : productsData.filter(product => product.brand === brandFilter);

    // Генерираме HTML за всеки продукт
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">${product.icon}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <button class="buy-btn" onclick="alert('Продуктът е добавен в количката!')">Купи</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Слушател на събития за лявото меню
document.getElementById('sidebar-menu').addEventListener('click', function(e) {
    // Проверяваме дали е кликнато върху елемент от менюто
    if (e.target.classList.contains('menu-item')) {
        
        // Премахваме "active" класа от стария бутон и го слагаме на кликнатия
        document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');

        // Взимаме марката от "data-brand" атрибута
        const selectedBrand = e.target.getAttribute('data-brand');

        // Променяме заглавието на страницата
        const pageTitle = document.getElementById('page-title');
        pageTitle.innerText = selectedBrand === 'all' ? 'Всички Продукти' : `Продукти на ${selectedBrand}`;

        // Зареждаме съответните продукти
        displayProducts(selectedBrand);
    }
});

// Първоначално зареждане на сайта (показва всички продукти по подразбиране)
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
});