import './style.scss'
import {changeTextContent, getInputValue} from '../base.js'

console.log('This is the bin2dec')

const convertBtn = document.querySelector('.convertBtn')
convertBtn.addEventListener('click', () => changeTextContent('.output', getInputValue('#binaryInput')))

