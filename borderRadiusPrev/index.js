import './style.scss'
import '../base.js'
import { getInputValue } from '../base.js'

console.log('Border Radius previewer')

let refreshStyleTxt = (style) => document.querySelector('.stlyeText').textContent = `border-radius: ${style}`

let borderTransform = () => {
    document.querySelector('.borderViewer').style.borderRadius = `
        ${getInputValue('#topLeftX')}% ${getInputValue('#topRightX')}% ${getInputValue('#bottomRightX')}% ${getInputValue('#bottomLeftX')}% /
        ${getInputValue('#topLeftY')}% ${getInputValue('#topRightY')}% ${getInputValue('#bottomRightY')}% ${getInputValue('#bottomLeftY')}%
    `

    refreshStyleTxt(document.querySelector('.borderViewer').style.borderRadius)
}
let sliders = document.querySelectorAll('input[type="range"]')

sliders.forEach((el, i) => {
    el.addEventListener('input', () => {
        borderTransform()
    })
})

borderTransform()