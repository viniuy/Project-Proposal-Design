var ramenMenu = new Map();
ramenMenu.set("Wagyu Ramen", { imgsrc: "../components/products/ramen/ramen.jpg", info: "wonton noodles", price: 150 });
ramenMenu.set("Miso Ramen", { imgsrc: "../components/products/ramen/ramen.jpg", info: "wonton noodles spicy", price: 160 });
ramenMenu.set("Beef Noodles", { imgsrc: "../components/products/ramen/ramen.jpg", info: "beef noodles", price: 200 });

var sushiMenu = new Map();
sushiMenu.set("Nigirizushi", { imgsrc: "../components/products/sushi/sushi.jpg", info: "", price: 460 });
sushiMenu.set("Maki", { imgsrc: "../components/products/sushi/sushi.jpg", info: "", price: 599 });
sushiMenu.set("Sashimi", { imgsrc: "../components/products/sushi/sushi.jpg", info: "", price: 545 });

var bentoMenu = new Map();
bentoMenu.set("Wagyu Bento", { imgsrc: "../components/products/bento/bento.jpg", info: "", price: 365 });
bentoMenu.set("Chicken Teriyaki Combo", { imgsrc: "../components/products/bento/bento.jpg", info: "", price: 355 });
bentoMenu.set("Pork Tonkatsu Combo", { imgsrc: "../components/products/bento/bento.jpg", info: "", price: 365 });

var dessertMenu = new Map();
dessertMenu.set("Element Glaze", { imgsrc: "../components/products/dessert/dessert.jpg", info: "", price: 255 });
dessertMenu.set("Chocolate Sundae", { imgsrc: "../components/products/dessert/dessert.jpg", info: "", price: 265 });
dessertMenu.set("Fudge Brown", { imgsrc: "../components/products/dessert/dessert.jpg", info: "", price: 250 });

var groupMenu = new Map();
groupMenu.set("Element Glaze", { imgsrc: "../components/products/group/group.jpg", info: "", price: 255 });
groupMenu.set("Chocolate Sundae", { imgsrc: "../components/products/group/group.jpg", info: "", price: 265 });
groupMenu.set("Fudge Brown", { imgsrc: "../components/products/group/group.jpg", info: "", price: 250 });

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


// Initial Render
renderMenu(ramenMenu, 'menu');

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
