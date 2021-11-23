//  Getting the size of the window in pixels and returning corresponding value

let screenWidth = window.screen.width;
function screenSize() {
    if (screenWidth <= 440) {
        return 'xs';
    } else if (screenWidth <= 1024) {
        return 'sm';
    } else if (screenWidth <= 1200) {
        return 'md';
    } else if (screenWidth <= 1400) {
        return 'lg';
    } else {
        return 'xl';
    };
};