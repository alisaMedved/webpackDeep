export default (text = 'Привет мир') => {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}
