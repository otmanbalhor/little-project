function ElementClass(ElementName, ClassName) {

    const element = document.createElement(ElementName);
    element.classList.add(ClassName);

    return element;
}


export function genererLiens() {
    const footer = document.querySelector('footer');
    const divRes = ElementClass('div', 'links');
    footer.append(divRes);
    const links = [
        { texte: "Facebook", url: "facebook.com" },
        { texte: "Instagram", url: "instagram.com" },
        { texte: "Pinterest", url: "pinterest.com" },
        { texte: "Tik-Tok", url: "tiktok.com" }
    ];

    for (const link of links) {

        const a = document.createElement('a');
        a.href = link.url;
        a.innerText = link.texte;
        divRes.append(a);
    }
}

