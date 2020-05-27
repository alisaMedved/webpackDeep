export default (text = 'ЛЛЛЛЛЛ!!! HHHH') => {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}
