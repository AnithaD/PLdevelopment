const sort = () => {
    let getSortItem = document.querySelectorAll('.sort-item');
    let getCardPrice = [];
    let getAllCard = document.querySelectorAll('.product-listing__card');
    getAllCard.length > 0 && getAllCard.forEach(ele => {
        getCardPrice.push(ele.querySelector('.product-listing__card-price b').innerHTML.split(' ')[1]);
    })
    // sort dropdown click event
    getSortItem.forEach(ele => {
        ele.addEventListener('click', function (e) {
            e.preventDefault();
            // sorting action performed based on the user selection
            getCardPrice.sort(function (a, b) { return a - b });
            if (ele.getAttribute('data-sort') == 'high') {
                getCardPrice.reverse();
            }
            getAllCard.forEach(ele => {
                getCardPrice.forEach((price, index) => {
                    if (price == ele.querySelector('.product-listing__card-price b').innerHTML.split(' ')[1]) {
                        ele.style.order = index;
                    }
                })
            })
        })
    })
}
export default sort;