
export function trie(categorie){
    const card = document.querySelectorAll(".card");
    
    card.forEach(function(carte) {
        const categorieCarte = carte.querySelector('.card__article__div__tri').innerText;
            
        if(categorie==='All'||categorie === categorieCarte ){
            carte.style.display = '';
        }else{
            carte.style.display = 'none';
        }
    });
}



