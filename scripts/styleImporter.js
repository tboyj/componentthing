function pullStyling() {
    const currentPathname = window.location.pathname;
    
    let cssPathname = currentPathname;
    if (cssPathname.endsWith(".html")) {
        cssPathname = cssPathname.slice(0, -5);
    } // assuming it ends with html

    cssPathname += ".css";

    console.log(cssPathname);
    // rule: must have the same name as the original html

}
// do this as soon as the window is opened.
document.addEventListener('DOMContentLoaded', () => {
    pullStyling();
});