const sticky = document.getElementById("sticky");

 const stickyOffset = sticky.offsetTop;

const stick = () => {

    const scroll = window.scrollY;
    if(scroll >= 90) {
        sticky.style.position = "sticky "
        sticky.style.top = "3rem"
    } else {
        sticky.style.position = "relative "
        sticky.style.top = "8rem"
    }
}