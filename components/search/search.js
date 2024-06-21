const search = () => {
    const searchInput = document.querySelector('.product-listing__search input');
     const listItems = document.querySelectorAll('.product-listing__card.active');
     let debounceTimeout;
    const debounceDelay = 300; // 300 milliseconds
    searchInput.addEventListener('keyup', () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const query = searchInput.value.toLowerCase();
            Array.from(listItems).forEach(item => {
                if(searchInput != '') {
                    const text = item.getAttribute('category').toLowerCase();
                    if (text.includes(query)) {
                        item.classList.remove('d-none');
                    } else {
                        item.classList.add('d-none');
                    }
                }
                else {
                    item.classList.remove('d-none');
                }
                
            });
        }, debounceDelay);
    });
}
export default search;
