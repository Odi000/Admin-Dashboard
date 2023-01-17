//Sidebar Icon titles disappearance
const options = document.querySelectorAll('li,.sidebar > div');
const content = [];

for (let i = 0; i < options.length; i++) {
    content[i] = options[i].innerHTML;
}

document.body.onresize = () => {
    let i = 0;
    options.forEach(option => {
        if (window.innerWidth < 1100) {
            let img = option.innerHTML.match(/<[^<>]*>/);
            option.innerHTML = img[0];
        } else {
            option.innerHTML = content[i];
        }
        i++;
        if (i > 10) i = 0;
    })

}

//I know I could have writen this inside the HTML
//but its just an obssesion to shrink the HTML file
const paragraphs = [...document.querySelectorAll('.card>p,.announcements>p')];
const texts = {
    '0': `Sed tempus ut lacus ut scelerisque. 
    Suspendisse sollicitudin nibh erat, 
    id facilisis felis accumsan nec.`,
    '1': `Nullam condimentum ipsum ut lectus vehicula consectetur. 
    Quisque sed dolor tincidunt, consectetur sapien et, 
    facilisis dolor. Duis sem purus, dignissim ut sapien in, 
    varius pellentesque lacus.`,
    '2':`In hac habitasse platea dictumst. 
    Vivamus dictum rutrum arcu, a placerat velit sagittis`,
    '3':`Etiam cursus eros ac efficitur fringilla 
    Vestibulum dignissim urna eget accumsan aliquam. 
    Curabitur dignissim nisi in tortor commodo, 
    ac bibendum magna tincidunt.`,
    '4':`Quisque eget rutrum nisl. 
    Nam augue justo, cursus vitae metus vel, 
    pharetra hendrerit felis. 
    Aliquam sed malesuada`,
    '5':`Praesent convallis, 
    libero quis congue elementum, 
    nunc ante faucibus sapien, ac 
    scelerisque tortor purus sit amet ex. 
    Pellentesque mollis nec sem vel aliquam,`,
    '6':`Sed tempus ut lacus ut scelerisque. 
    Suspendisse sollicitudin nibh erat, 
    id facilisis felis accumsan nec.`,
    '7':`Nullam condimentum ipsum ut lectus vehicula consectetur. 
    Quisque sed dolor tincidunt, consectetur sapien et, 
    facilisis dolor. Duis sem purus, dignissim ut sapien in, 
    varius pellentesque lacus.`,
    '8':`In hac habitasse platea dictumst. 
    Vivamus dictum rutrum arcu, a placerat velit sagittis`,
    '9':`Site Maintenance<br>
    Vestibulum condimentum tellus lacus, in accumsan elit maximus ac.
    Donec hendrerit sodales congue...`,
    '10':`Community Share Day<br>
    Nam vel lectus tincidunt, rutrum nulla eu, omare libero. 
    Aliquam dictum accumsan porttitor...`,
    '11':`Updated Privacy Policy<br>
    Phasellus efficitur nisi eget elit consectetur, 
    eget condimentum ante auctor. 
    Cras fringilla sagittis sem in mattis...`
}

for(let i=0; i < paragraphs.length; i++){
    paragraphs[i].innerHTML = texts[i];
}