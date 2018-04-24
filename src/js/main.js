// src/js/main.js

import multiply from './multiply.js'

const text = document.getElementById('test')
text.innerText = '2 * 3 = ' + multiply(2, 3)
