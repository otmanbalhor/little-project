
function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

export const label = ElementClass('label', 'check-panier__btn');
export const input = ElementClass('input', 'check-panier__panier__btn__input');
input.type = "checkbox";

document.addEventListener('DOMContentLoaded', () => {
    const basCards = document.querySelectorAll(".card__article");

    document.addEventListener('click', function () {

        basCards.forEach(basCard => {
            
            if (input.checked === true) {

                
                document.body.style.backgroundColor = "#542424";
                document.body.style.color = "#FFFFFF";
                basCard.style.backgroundColor = "#be9782";
                basCard.style.color = "#542424";
            }
            else {
                document.body.style.backgroundColor = "";
                document.body.style.color = "";
                basCard.style.backgroundColor = "";
                basCard.style.color = "";
            }
        });
    });
})



