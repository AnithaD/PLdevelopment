import { uniqueCatagoryArray } from "../card/card.js";
import { resetCount } from "../loader/loader.js";

const filter = () => {
    let bindFilterHtml = '<div class="product-listing__close d-lg-none"><span class="product-listing__close-icon">X</span></div>';
    let getLoadMoreBtn = document.querySelector('.product-listing__load-more');
    let getBodyElement = document.querySelector('body');
    // create filter based on the response
    const toConstructFilter = (catagoryData) => {
        catagoryData.length > 0 && catagoryData.forEach((element) => {
            bindFilterHtml += `
        <div class="product-listing-filter--item">
            <label>
                <input class="filter-checkbox" data-catagory="${element}" type="checkbox" /> ${element}
            </label>
        </div>`
        })
        document.querySelector('.product-listing__filter-sec').innerHTML = bindFilterHtml;
    }
    toConstructFilter(uniqueCatagoryArray);
    let getCheckBox = document.querySelectorAll('.filter-checkbox');
    let getAllCards = document.querySelectorAll('.product-listing__card');
    let activeCatagory = [];
    // filter check box click event 
    getCheckBox.forEach(ele => {
        ele.addEventListener('change', (event) => {
            resetCount();
            getLoadMoreBtn.classList.remove('d-none')
            if (ele.checked) {
                activeCatagory.push(ele.getAttribute("data-catagory"));
            }
            else {
                activeCatagory.length > 0 && activeCatagory.forEach((catagory, index) => {
                    if (catagory == ele.getAttribute("data-catagory")) {
                        activeCatagory.splice(index, 1);
                    }
                })
            }
            getAllCards.forEach(element => {
                element.classList.add('d-none');
                element.classList.remove('active');
            })
            activeCatagory.forEach(catagory => {
                getAllCards.forEach(element => {
                    if (catagory == element.getAttribute('category')) {
                        element.classList.add('active');
                    }
                })
            })
            if (activeCatagory.length == 0) {
                getAllCards.forEach(element => {
                    element.classList.add('active');
                })
            }
            getLoadMoreBtn.click();
        })
    })
    // close icon click event Mobile View
    let getCloseIcon = document.querySelector('.product-listing__close-icon');
    let getFilterSection = document.querySelector('.product-listing-filter');
    getCloseIcon.addEventListener('click',function() {
            getBodyElement.classList.remove('hide-scroll');
            getFilterSection.classList.remove('product-listing-filter--animation');
    })
    // filter drawer event for mobile view 
    let getFilterTopSection = document.querySelector('.product-listing__filter-content');
    getFilterTopSection.addEventListener('click',function() {
           // window.scrollTo(0, 0);
            getBodyElement.classList.add('hide-scroll');
            getFilterSection.classList.add('product-listing-filter--animation');
    })
}
export default filter;