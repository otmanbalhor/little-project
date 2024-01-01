import { bakery } from "./objet.js";
import { label, input } from "./darkmode.js";
import { genererLiens } from "./footer.js";
import { trie } from "./trie.js";
import { panierLogo,popup,contenuPopup,paraPopup,buttonPopup } from "./panier.js";



function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

const header = document.querySelector("header");
const divCheckPan = ElementClass('div','check-panier');
const divHeader = ElementClass('div', 'title-logo');
const logo = ElementClass('img', 'title-logo__logo');
logo.src = "images/logolittleproject.jpg";
const title = ElementClass('h1', 'title-logo__title');
title.innerText = 'SugarCraft Delights';

header.append(divCheckPan);
divCheckPan.append(label);
label.append(input);
divCheckPan.append(panierLogo);
divCheckPan.append(popup);
popup.append(contenuPopup);
contenuPopup.append(paraPopup);
contenuPopup.append(buttonPopup);
header.append(divHeader);
divHeader.append(logo);
divHeader.append(title);


const main = document.querySelector('main');
main.classList.add('container')
const divTri = ElementClass('div', 'tri');
main.append(divTri);

const triButtons = ['All', 'Eclair', 'Cake', 'Tart', 'Macaron'].map(category => {
    const button = ElementClass('button', 'tri__btn');
    button.innerHTML = category;
    button.dataset.category = category;
    button.addEventListener('click', function () {
        trie(category);
    });
    return button;
});

triButtons.forEach(button => divTri.append(button));

const sections = [];
bakery.forEach(element => {

    const section = ElementClass('section', 'card');
    const divimg = ElementClass('div', 'card__div');
    const img = ElementClass('img', 'card__div__img');
    img.src = element.picture;
    const article = ElementClass('article', 'card__article');
    const h2article = ElementClass('h2', 'card__article__h2');
    h2article.innerText = element.name;
    const para = ElementClass('p', 'card__article__para');
    para.innerText = element.description;
    const divtriprix = ElementClass('div', 'card__article__div')
    const btnTri = ElementClass('button', 'card__article__div__tri')
    btnTri.innerHTML = element.category;
    const prix = ElementClass('p', 'card__article__div__prix');
    prix.innerText = element.price;

    main.append(section);
    section.append(divimg);
    divimg.append(img);
    section.append(article);
    article.append(h2article);
    article.append(para);
    article.append(divtriprix);
    divtriprix.append(prix);
    divtriprix.append(btnTri);
    

    btnTri.addEventListener('click', function () {
        tri(element.category);
    });

    sections.push(section);

});

addEventListenerTri();

function addEventListenerTri() {
    triButtons.forEach(button => {
        button.addEventListener('click', function () {
            trie(button.innerText);
        });
    });
}

function tri(category) {
    const fragment = document.createDocumentFragment();

    sections.forEach(section => {
        const categorieCarte = section.querySelector('.card__article__div__tri').innerText;

        if (category === 'All' || category === categorieCarte) {
            fragment.appendChild(section.cloneNode(true));
        }
    });

    main.innerHTML = '';
    
    removeEventListenersTri();

    triButtons.forEach(button => {
        const clonedButton = button.cloneNode(true);
        clonedButton.addEventListener('click', function () {
            tri(button.innerText);
        });
         fragment.appendChild(clonedButton);
    });
    main.appendChild(fragment);

    addEventListenerTri();
}

function removeEventListenersTri() {
    triButtons.forEach(button => {
        const clonedButton = button.cloneNode(true);
        button.parentNode.replaceChild(clonedButton, button);
    });
}

genererLiens();





