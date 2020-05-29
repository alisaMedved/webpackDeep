import component from "./simpleComponents/dom";
import './theme/main.css';

let element = component();
document.body.appendChild(element);

// как ты помнишь react-hot-loader - надо подрубить бабель - а потом
// hot(module)(component);


// если у реакт элемента есть это свойство hot (а это свойство добавляет ему вебпак)
if (module.hot) {
    module.hot.accept('./simpleComponents/dom', function() {
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element)
    })
}
