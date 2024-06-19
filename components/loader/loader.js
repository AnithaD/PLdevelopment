let currentCount = 0;
const loader = () => {
    let getLoadMoreBtn = document.querySelector('.product-listing__load-more');
    let getTotalCount = document.querySelector('.product-listing__count span');
    // load more button click event 
    function loadItem() {
        let getAllActiveCards = document.querySelectorAll('.product-listing__card.active');
        let totalCard = getAllActiveCards.length;
        let perClickItemToLoad = 10;
        getTotalCount.innerHTML = getAllActiveCards.length;
        currentCount++;
        document.querySelectorAll('.product-listing__card').forEach
        for (let i = 0; i < (perClickItemToLoad * currentCount); i++) {
            if (getAllActiveCards[i]) {
                getAllActiveCards[i].classList.remove('d-none');
            }
        }
        if (perClickItemToLoad * currentCount >= totalCard) {
            getLoadMoreBtn.classList.add('d-none')
        }
    }
    getLoadMoreBtn.addEventListener('click', function () {
        loadItem();
    })
    getLoadMoreBtn.click();
}
// reset function for resetting currentCount
function resetCount() {
    currentCount = 0;
}
export { resetCount, currentCount, loader };