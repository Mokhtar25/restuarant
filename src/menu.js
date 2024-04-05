
import second from './static/side.jpg'
import salad from './static/salad.jpg'

export default function CreateMenu(){

    const text = 'Lorem Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. ipsum Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
    
    const text2 = 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.'

    const wrapper = document.createElement('div');

    wrapper.classList.add('menu_wrapper');

    const card = document.createElement('div');
    card.classList.add('card')
    const card_img = document.createElement('img')
    card_img.classList.add('img');
    const salad_img  = new Image()
    salad_img.src = salad;
    salad_img.alt = 'salad'
    card_img.appendChild(salad_img);
    
    const card_text = document.createElement('div');
    card_text.classList.add('text');
    card_text.textContent = text;

    card.appendChild(salad_img);
    card.appendChild(card_text);

    wrapper.appendChild(card);


    const card2 = document.createElement('div');
    card2.classList.add('card');
    
    const side = new Image();
    side.src = second;
    side.alt = 'side dish';

    const card2_text = document.createElement('div');
    card2_text.textContent = text2;
    card2_text.classList.add('text');

    card2.appendChild(side);
    card2.appendChild(card2_text);

    wrapper.appendChild(card2)


    return wrapper
     
}
