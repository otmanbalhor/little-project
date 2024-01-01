function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

const panierLogo = ElementClass('img', 'check-panier__panier');
panierLogo.id = "panierLogo";
panierLogo.src = "images/panier.png";

const popup = ElementClass('div', 'check-panier__popup');
popup.id = "popup";

const popupPanier = popup;

const contenuPopup = ElementClass('div', 'check-panier__popup__contenu');

const paraPopup = document.createElement('p');
paraPopup.innerText = `Your basket is empty`;

const buttonPopup = document.createElement('button');
buttonPopup.innerText = 'Close basket';
buttonPopup.id = "closePopup"

const closePopup = buttonPopup;


panierLogo.addEventListener('click', () => {

    popupPanier.style.display = '';

});

closePopup.addEventListener('click', () => {

    popupPanier.style.display = 'none';

});

document.addEventListener('DOMContentLoaded', function () {
    const addBaskets = document.querySelectorAll('.card__article__add');

    addBaskets.forEach(addBasket => {

        addBasket.addEventListener('click', function () {

            
            const articlePrix = parseFloat(this.dataset.price);
            const articleNom = this.dataset.name;

            const articlePara = document.createElement('p');
            articlePara.innerText = `${articleNom}: $${articlePrix.toFixed(2)}`;

            contenuPopup.append(articlePara);

            paraPopup.innerText = 'Your basket contains:'

            popupPanier.style.display = '';

            closePopup.addEventListener('click', function () {
                contenuPopup.innerHTML = '';
                paraPopup.innerText = 'Your basket is empty';
                popupPanier.style.display = 'none';

            })

        });
    });
});



export { panierLogo, popup, contenuPopup, paraPopup, buttonPopup };