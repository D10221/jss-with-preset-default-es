import jss, { preset } from '../lib/index.js';
import styles from "./styles.js"
const presets = preset();
jss.setup(presets);
const { classes } = jss.createStyleSheet(styles).attach();
console.log(classes);

/** @type {object} */
const { plugins } = presets;
const names = Object.keys(plugins).map(key => plugins[key].name || plugins[key].constructor);
document.body.innerHTML = `
<div style="margin: 1em; padding: 1em">
    <h1>JSS-preset-default</h1>
    <h3>Plugins</h3>    
    <ul>${names.map(name => `<li>${name}</li>`).join("\n")}</ul>
    <span>${classes.button}</span>
</div>
`;



