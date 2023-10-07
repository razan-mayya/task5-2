function hidd() {
    const bafornav = document.querySelector('.bafornav');
    bafornav.style.display = "none";
}
function select() {
    const items = document.querySelectorAll('.item');
    var out = document.querySelector('.out');
    items.forEach(element => {
        element.addEventListener('click', function () {
            out.innerHTML = element.innerHTML;
        })
    });

}
const items = [
    {
        img: "file:///C:/Users/Razan/Desktop/hard/assests/img/ic11.webp",
        title: 'PERFECT CUT',
        title1: ' DUAL CAMERA',
        description: 'Tristique senectus et netus et malesuada ant reiet fames.'
    }
    , {
        img: "./img/ic11.webp",
        title: 'PRETTY',
        title1: ' INTELLIGENT PROCESSING',
        description: 'Consequat ac habit amet asse felis donec et odio pellentesque diam.'
    },
    {
        img: "./img/ic13.webp",
        title: 'MOST POPULAR',
        title1: ' 8GB DDR5 RAM',
        description: 'Dictum varius duis at consectetur lorem donec massa sap faucibus.'
    }
]
items.forEach(function (item) {
    const container = document.querySelector('.con');
    container.classList = "container con d-flex ";
    const row = document.querySelector('.row');
    const div1 = document.createElement("div");
    div1.classList = "div1   col-lg-4 col-md-4  col-sm-12";
    const div2 = document.createElement("div");
    div2.classList = "d-flex flex-column justify-content-center align-items-center div2";
    const img = document.createElement("img");
    img.src = item.img;
    img.classList = "p-5";
    const div3 = document.createElement("div");
    div3.classList = " div3 text-center";
    const h6 = document.createElement("h6");
    h6.innerHTML = item.title;
    const h4 = document.createElement("h4");
    h4.innerHTML = item.title1;
    const p = document.createElement("p");
    p.innerHTML = item.description;
    div3.appendChild(h6);
    div3.appendChild(h4);
    div3.appendChild(p);
    div2.appendChild(img);
    div2.appendChild(div3);
    div1.appendChild(div2);
    row.appendChild(div1);
    container.appendChild(row);
});


var result = fetch("https://dummyjson.com/products")
    .then(function (result) {
        return result.json();
    })
    .then(function (result) {
        displayData(result.products);
    });
function displayData(arr) {
    for (let index = 0; index < 6; index++) {
        const element = arr[index];
        const slider = document.querySelector('.slider');
        slider.classList = "slider d-flex";
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.classList = "cards-container";
        const card = document.querySelector('.card');
        card.classList = "flex-shrink-0";
        const div4 = document.createElement('div');
        div4.classList = "card text-center mb-3";
        const img = document.createElement('img');
        img.classList = "card-img-top ";
        img.src = element.images[0];
        var div5 = document.createElement('div');
        div5.innerHTML = 'Add yo card';
        div5.classList = 'w-100% bg-dark hidden text-white align-middle';
        div6 = document.createElement('div');
        div6.classList = 'card-body bg-body-tertiary';
        h5 = document.createElement('h5');
        h5.classList = element.title;
        h5.innerHTML = 'Special title';
        div7 = document.createElement('div');
        // div7.innerHTML = <i class="fa-solid fa-star" style="color: #f1ff2e;"></i>;
        // <i class="fa-solid fa-star" style="color: #f1ff2e;"></i>;
        // <i class="fa-solid fa-star" style="color: #f1ff2e;"></i>;
        p = document.createElement('p');
        p.classList = 'card-text text-danger';
        p.innerHTML = element.category;
        div6.appendChild(h5);
        div6.appendChild(div7);
        div6.appendChild(p);
        div4.appendChild(img);
        div4.appendChild(div5);
        div4.appendChild(div6);
        card.appendChild(div4);
        cardsContainer.appendChild(card);
        slider.appendChild(cardsContainer);

    }
}
const slider = document.querySelector('.slider');
const cardsContainer = document.querySelector('.cards-container');
const cardWidth = document.querySelector('.card').offsetWidth;
var currentPosition = 0;
document.querySelector('.next-btn').onclick = function () {
    currentPosition -= cardWidth;
    const card = document.querySelectorAll('.card')
    card.forEach(element => {
        element.style.transform = " translateX(-400px)";

    });

}
document.querySelector('.prev-btn').onclick = function () {
    currentPosition += cardWidth;
    const card = document.querySelectorAll('.card')
    card.forEach(element => {
        element.style.transform = " translateX(400px)";

    });
}

var card = document.querySelector('.card');

function cardover() {
    console.log(div5);
    div5.style.display = 'block';
    div5.style.color = 'red';
}

card.addEventListener('mouseout', function () {
    div5.style.display = 'block';
    div5.style.color = 'red';

});
