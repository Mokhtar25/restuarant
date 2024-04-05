export default function Createhome(){
    // to  do :

    const wrapper= document.createElement('div');
    
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto sit repellat placeat vel, quos neque vero saepe cumque nostrum, enim aperiam ullam error necessitatibus. Sit ipsa voluptatum quam voluptatibus.';
   wrapper.classList.add('home_wrapper');

    const header = document.createElement('h2');
    header.textContent = 'This Resturant is good'

    const para = document.createElement('p');

    para.textContent = text;

    wrapper.appendChild(header);
    wrapper.appendChild(para); 



    return wrapper;

};
