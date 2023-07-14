// swap favicon for light and dark mode
var lightSchemeIcon = document.getElementById('light-scheme-icon');
var darkSchemeIcon = document.getElementById('dark-scheme-icon');
var matcher = window.matchMedia('(prefers-color-scheme: light)');
matcher.addEventListener('change', onUpdate);
onUpdate();

function onUpdate() {
    if (matcher.matches) {
        lightSchemeIcon.parentNode.removeChild(lightSchemeIcon);
        document.head.append(darkSchemeIcon);
    } else {
        darkSchemeIcon.parentNode.removeChild(darkSchemeIcon);
        document.head.append(lightSchemeIcon);
    }
}
