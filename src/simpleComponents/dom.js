export default (text = 'Hello Meow!!! HHHH') => {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}
