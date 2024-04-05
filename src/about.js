export default function CreateAbout(){
    // to do

    const text = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."         
    const wrapper = document.createElement('div');

    const text_div = document.createElement('div');

    text_div.textContent = text;

    wrapper.classList.add('about_wrapper');
    text_div.classList.add('about_text');

    wrapper.appendChild(text_div);

    return wrapper;
}
