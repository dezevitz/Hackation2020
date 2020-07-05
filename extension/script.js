replaceText(document.body,word);

function replaceText(element,newWord) {
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }   else if (element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(newWord)){
            element.parentElement.remove();
        }
    }   
}
