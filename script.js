import { bakery } from "./objet.js";
import { label,input } from "./darkmode.js";
import { genererLiens } from "./footer.js";
import { trie } from "./trie.js";



function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

/*function ElementId(ElementName, ElementId) {

    const element = document.createElement(ElementName);
    element.id = ElementId;

}*/

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
main.append(divTri);

const btnAll = ElementClass('button','tri__btn');
btnAll.innerHTML = "All";
const btnEclair = ElementClass('button', 'tri__btn');
btnEclair.innerHTML = "Eclair";

const btnCake = ElementClass('button', 'tri_btn');
btnCake.innerHTML = "Cake";

const btnTarte = ElementClass('button', 'tri_btn');
btnTarte.innerHTML = "Tart";

const btnMacaron = ElementClass('button', 'tri_btn');
btnMacaron.innerHTML = "Macaron";

const triButtons = [btnAll,btnEclair, btnCake, btnTarte, btnMacaron];
triButtons.forEach(button => divTri.append(button));

const sections = [];
bakery.forEach(element => {

    const section = ElementClass('section', 'card');
    const divimg = ElementClass('div', 'card__div');
    const img = ElementClass('img', 'card__div__img');
    img.src = element.picture;
    const article = ElementClass('article', 'card__article');
    const h2article = ElementClass('h2', 'card__article_h1');
    h2article.innerText = element.name;
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
    article.append(h2article);
    article.append(para);
    article.append(divtriprix);
    divtriprix.append(btnTri);
    divtriprix.append(prix);

    btnTri.addEventListener('click',function(){
        tri(element.category);
    });

    sections.push(section);

});

function tri(categorie) {
    sections.forEach(section => {
        const categorieCarte = section.querySelector('.card__article__div__tri').innerText;
        if (categorie == categorieCarte) {
            main.appendChild(section);
        } else {
            section.remove();
        }
    });
}

genererLiens();


btnCake.addEventListener('click',function(){
    trie('Cake');
});

btnEclair.addEventListener('click',function(){
    trie('Eclair');
});

btnTarte.addEventListener('click',function(){
    trie('Tart');
});

btnMacaron.addEventListener('click',function(){
    trie('Macaron');
});
btnAll.addEventListener('click',function(){
    trie('All');
});

