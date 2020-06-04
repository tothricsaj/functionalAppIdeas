import './style.scss'
import {pipe} from '../trzFuncitonal.js'
import {changeTextContent, getInputValue} from '../base.js'

console.log('This is the bin2dec')

const convertBtn = document.querySelector('.convertBtn')
const checkBinaryInput = (input) => input.split('').every((val) => val === '0' || val === '1') ? input : undefined

const checkCorrectInput = pipe(getInputValue, checkBinaryInput)

convertBtn.addEventListener('click', () => changeTextContent('.output', checkCorrectInput('#binaryInput')))
