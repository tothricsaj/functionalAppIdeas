import './style.scss'
import {pipe} from '../trzFuncitonal.js'
import {changeTextContent, getInputValue, createModal} from '../base.js'

console.log('This is the bin2dec')

const convertBtn = document.querySelector('.convertBtn')
const clearValue = () => {
    document.querySelector('#binaryInput').value = ''
    changeTextContent('.output', 'Decimal output')
}
const checkBinaryInput = (input) => 
        input.split('').every((val) => val === '0' || val === '1') ? 
            input : 
            createModal('This is not binary syntax!!! Please use only 1 or 0')

const convertBin2Dec = (binVal) => parseInt(binVal, 2)
const convertedDecValue = pipe(pipe(getInputValue, checkBinaryInput), convertBin2Dec)

convertBtn.addEventListener('click', () => changeTextContent('.output', convertedDecValue('#binaryInput')))


const targetNode = document.body

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            clearValue()
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();