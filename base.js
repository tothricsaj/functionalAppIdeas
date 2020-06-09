export const changeTextContent = (elem, content) => {document.querySelector(elem).textContent = content; console.log('change value')}
export const getInputValue = (inputElem) => {
    if(document.querySelector(inputElem).tagName !== 'INPUT') return undefined
    return document.querySelector(inputElem).value
}

export const createModal = (message) => {
    let dom = `
        <div class="FAIModalWrapper">
            <div class="FAIModalMessage">${message} <span class="FAIModalClose">X</span></div>
        </div>
    `

    document.body.insertAdjacentHTML('afterbegin', dom)

    document.querySelector('.FAIModalClose').addEventListener('click', () => {
        document.body.removeChild(document.querySelector('.FAIModalWrapper'))
    })
}