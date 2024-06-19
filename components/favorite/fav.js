const fav = () => {
    let getFavIcon = document.querySelectorAll('.product-listing__fav-icon');
    //fav icon click event functionality
    getFavIcon.forEach(ele => {
        ele.addEventListener('click', function () {
            if (!ele.classList.contains('active')) {
                ele.classList.add('active');
                ele.setAttribute('src', '../assets/fav-active.png')
            }
            else {
                ele.classList.remove('active');
                ele.setAttribute('src', '../assets/fav.png')
            }
        })
    })
}
export default fav;