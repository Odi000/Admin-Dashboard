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