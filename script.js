import { bakery } from "./objet.js";
import { label,input } from "./darkmode.js";


function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

function ElementId(ElementName, ElementId) {

    const element = document.createElement(ElementName);
    element.id = ElementId;

}

const header = document.querySelector("header");
const divHeader = ElementClass('div', 'title-logo');
const logo = ElementClass('img', 'title-logo__logo');
const title = ElementClass('h1', 'title-logo__title');
title.innerText = 'SugarCraft Delights';

header.append(label);
label.append(input);
header.append(divHeader);
divHeader.append(logo);
divHeader.append(title);


const main = document.querySelector('main');
main.classList.add('container')
const divTri = ElementClass('div', 'tri');
const btnEclair = ElementClass('button', 'tri_eclair');
btnEclair.innerHTML = "Eclair"
const btnCake = ElementClass('button', 'tri_cake');
btnCake.innerHTML = "Cake";
const btnTarte = ElementClass('button', 'tri_tarte');
btnTarte.innerHTML = "Tart";
const btnMacaron = ElementClass('button', 'tri_macaron');
btnMacaron.innerHTML = "Macaron";

main.append(divTri);
divTri.append(btnEclair);
divTri.append(btnCake);
divTri.append(btnTarte);
divTri.append(btnMacaron);

bakery.forEach(element => {

    const section = ElementClass('section', 'card');
    const divimg = ElementClass('div', 'card__div');
    const img = ElementClass('img', 'card__div__img');
    img.src = element.picture;
    const article = ElementClass('article', 'card__article');
    const h1article = ElementClass('h1', 'card__article_h1');
    h1article.innerText = element.name;
    const para = ElementClass('p', 'card__article__para');
    para.innerText = element.description;
    const divtriprix= ElementClass('div','card__article__dib')
    const btnTri = ElementClass('button','card__article__div__tri')
    btnTri.innerHTML = element.category;
    const prix = ElementClass('p', 'card__article__div__prix');
    prix.innerText = element.price;

    main.append(section);
    section.append(divimg);
    divimg.append(img);
    section.append(article);
    article.append(h1article);
    article.append(para);
    article.append(divtriprix);
    divtriprix.append(btnTri);
    divtriprix.append(prix);

});