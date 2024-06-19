import filter from "../filter/filter.js";
import { loader } from "../loader/loader.js";
//to create a card from API respose
let uniqueCatagoryArray;
const cardCreation = () => {
    let generateHtml = '';
    let getdatafromsession;
    let categoryArr = [];
    let data= '';
 // fetch data from API
    const fetchData = async(fetchUrl) => {
        fetch(fetchUrl).then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Oops!! Something went wrong. Please try again later.');
          })
          .then((response) => {
            sessionStorage.setItem('card-data', JSON.stringify(response));
            getdatafromsession = response;
            toCreateCard(getdatafromsession);
          })
          .catch((error) => {
            document.querySelector('.product-listing__card-container').innerHTML = `<p class="error">${error}</p>`;
          });
        
    }
    if (sessionStorage.getItem('card-data') != null && sessionStorage.getItem('card-data').length > 0) {
        getdatafromsession = JSON.parse(sessionStorage.getItem('card-data'));
        toCreateCard(getdatafromsession);
       
    }
    else {
        fetchData('https://fakestoreapi.com/products');
    }
// card creation 
    function toCreateCard(cards) {
        cards.length > 0 && cards.forEach(element => {
            categoryArr.push(element.category);
            generateHtml += `
        <div class="product-listing__card d-none active" category="${element.category}">
        <div class="product-listing__card-wrapper">
            <div class="product-listing__card-img-sec"><img class="product-listing__card-img" src=${element.image} alt="Card Image"></div>
            <div class="product-listing__card-content">
                <p class="product-listing__card-description">${element.description}</p>
                <p class="product-listing__card-price"><b>$ ${element.price}</b></p>
                <img class="product-listing__fav-icon" alt="fav-icon" src="./assets/fav.png" />
            </div>
        </div>
        </div>
    </div>`
        });
        document.querySelector('.product-listing__card-container').innerHTML = generateHtml;
        uniqueCatagoryArray = [...new Set(categoryArr)];
        filter();
        loader();
       
    }
}

export { uniqueCatagoryArray, cardCreation };