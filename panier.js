function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

const panierLogo = ElementClass('img','check-panier__panier');
panierLogo.id = "panierLogo";
panierLogo.src = "images/panier.png";

const popup = ElementClass('div','check-panier__popup');
popup.id = "popup";

const popupPanier = popup;

const contenuPopup = ElementClass('div','check-panier__popup__contenu');

const paraPopup = document.createElement('p');
paraPopup.innerText=`Your basket is empty`;

const buttonPopup = document.createElement('button');
buttonPopup.innerText ='Close basket';
buttonPopup.id = "closePopup"

const closePopup = buttonPopup;


panierLogo.addEventListener('click', () => {

    popupPanier.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    
    popupPanier.style.display = 'none';

});


export { panierLogo,popup,contenuPopup,paraPopup,buttonPopup };