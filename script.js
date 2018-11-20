if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    require('style-loader!css-loader!codemirror/lib/codemirror.css');
    require('style-loader!css-loader!./cm-night-owl.css');
    require('style-loader!css-loader!./styles.css');
    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/jsx/jsx');
}
