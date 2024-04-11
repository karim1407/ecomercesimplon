/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './script.js';
import './animation.js';
import './styles/app.scss';

fetch('api/products')
.then(response => response.json())
.then(json => console.log(json));