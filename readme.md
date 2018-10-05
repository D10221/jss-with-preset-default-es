# JSS & JSS-preset-default:

repackage jss & jss-preset-default for use in browser modules

| Original work @https://github.com/cssinjs 

### Usage:

     <head>
        <script type="module">
                window.process = {
                    env: {
                        NODE_ENV: undefined
                    }
                }
        </script>        
        <script type="module">
        import jss, { preset } from 'https://unpkg.com/@australis/jss-with-preset-default';
        import styles from "./styles.js"
        const presets = preset();
        jss.setup(presets);
        const { classes } = jss.createStyleSheet(styles).attach();
        console.log(classes);
        </script>
     </head>    

### Test:

    serve .
    browser  http://localhost:5001/test
    # open dev tools and see if there is any error

### Notes: 

    jss is bundled

