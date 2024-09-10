let ramenMenu = new Map();
let sushiMenu = new Map();
let bentoMenu = new Map();
let dessertMenu = new Map();
let groupMenu = new Map();

function fetchMenuData() {
    fetch('https://mocki.io/v1/0b9c3794-3a29-4199-977b-632fe9e848b6')
        .then(response => response.json())
        .then(data => {
            data.ramenMenu.forEach(item => {
                ramenMenu.set(item.name, {
                    imgsrc: item.imgsrc,
                    info: item.info,
                    price: item.price
                });
            });

            data.sushiMenu.forEach(item => {
                sushiMenu.set(item.name, {
                    imgsrc: item.imgsrc,
                    info: item.info,
                    price: item.price
                });
            });

            data.bentoMenu.forEach(item => {
                bentoMenu.set(item.name, {
                    imgsrc: item.imgsrc,
                    info: item.info,
                    price: item.price
                });
            });

            data.dessertMenu.forEach(item => {
                dessertMenu.set(item.name, {
                    imgsrc: item.imgsrc,
                    info: item.info,
                    price: item.price
                });
            });

            data.groupMenu.forEach(item => {
                groupMenu.set(item.name, {
                    imgsrc: item.imgsrc,
                    info: item.info,
                    price: item.price
                });
            });

            // Render default menu (ramen)
            renderMenu(ramenMenu, 'menu');
        })
        .catch(error => console.error('Error fetching menu data:', error));
}

fetchMenuData();

function createMenuCard(dishName, dishData, index) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('menu-card');
    cardDiv.classList.add(dishName.replace(/\s+/g, '-').toLowerCase());

    let img = document.createElement('img');
    img.src = dishData.imgsrc;
    img.alt = dishName.toLowerCase().replace(/\s+/g, '-') + '-image';

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('information');

    let heading = document.createElement('h4');
    heading.innerText = dishName;

    let paragraph = document.createElement('p');
    paragraph.innerText = dishData.info;

    let pricePara = document.createElement('p');
    pricePara.innerText = "Price: $" + dishData.price;

    let quantityWrapper = document.createElement('div');
    quantityWrapper.classList.add('quantity-wrapper');

    let decrementButton = document.createElement('input');
    decrementButton.classList.add('button-group', 'btn');
    decrementButton.type = 'button';
    decrementButton.value = "-";
    decrementButton.onclick = function() { decrementFunction(index); };

    let inputValue = document.createElement('input');
    inputValue.classList.add('button-group', 'output-area');
    inputValue.type = "text";
    inputValue.id = `output-area-${index}`;  
    inputValue.value = "0";
    inputValue.readOnly = true;

    let incrementButton = document.createElement('input');
    incrementButton.classList.add('button-group', 'btn');
    incrementButton.type = 'button';
    incrementButton.value = "+";
    incrementButton.onclick = function() { incrementFunction(index); };

    quantityWrapper.appendChild(decrementButton);
    quantityWrapper.appendChild(inputValue);
    quantityWrapper.appendChild(incrementButton);

    infoDiv.appendChild(heading);
    infoDiv.appendChild(paragraph);
    infoDiv.appendChild(pricePara);
    infoDiv.appendChild(quantityWrapper);

    cardDiv.appendChild(img);
    cardDiv.appendChild(infoDiv);

    return cardDiv;
}

function renderMenu(menu, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 
    let index = 0;
    menu.forEach((dishData, dishName) => {
        const card = createMenuCard(dishName, dishData, index);
        container.appendChild(card);
        index++;
    });
}

function checkActiveMenu() {
    const circles = document.querySelectorAll('.small-circle');
    let activeMenu = null;

    circles.forEach(circle => {
        if (circle.classList.contains('active')) {
            activeMenu = circle.dataset.item;
        }
    });

    switch (activeMenu) {
        case 'ramen':
            renderMenu(ramenMenu, 'menu');
            break;
        case 'sushi':
            renderMenu(sushiMenu, 'menu');
            break;
        case 'bento':
            renderMenu(bentoMenu, 'menu');
            break;
        case 'dessert':
            renderMenu(dessertMenu, 'menu');
            break;
        case 'group':
            renderMenu(groupMenu, 'menu');
            break;
        default:
            renderMenu(ramenMenu, 'menu');
    }
}

// Quantity handling
var quantities = [];

function initializeQuantities(menu) {
    quantities = Array.from(menu).map(() => 0);
}

function incrementFunction(index) {
    let currentValue = parseInt(document.getElementById(`output-area-${index}`).value, 10);
    if (isNaN(currentValue)) {
        currentValue = 0;
    }
    
    currentValue++;
    
    document.getElementById(`output-area-${index}`).value = currentValue;
}

function decrementFunction(index) {
    let currentValue = parseInt(document.getElementById(`output-area-${index}`).value, 10);
    if (isNaN(currentValue)) {
        currentValue = 0;
    }
    
    if (currentValue > 0) {
        currentValue--;
    }
    
    document.getElementById(`output-area-${index}`).value = currentValue;
}
