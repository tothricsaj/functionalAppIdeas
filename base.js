export const changeTextContent = (elem, content) => {document.querySelector(elem).textContent = content}
export const getInputValue = (inputElem) => {
    if(document.querySelector(inputElem).tagName !== 'INPUT') return undefined
    return document.querySelector(inputElem).value
}