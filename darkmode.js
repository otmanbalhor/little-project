
function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}

export const label = ElementClass('label','check-panier__btn');
export const input = ElementClass('input','check-panier__panier__btn__input'); 
input.type="checkbox";

document.addEventListener('click',function(){

    if(input.checked === true){

        document.body.style.backgroundColor="rgb(45,45,45)";
        document.body.style.color="#FFFFFF";
    }
    else{
        document.body.style.backgroundColor="";
        document.body.style.color="";
    }
});
