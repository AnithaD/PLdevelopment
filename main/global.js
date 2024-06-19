import { cardCreation } from "../components/card/card.js";
import filter from "../components/filter/filter.js";
import sort from "../components/sort/sort.js";
import fav from "../components/favorite/fav.js";
import search from '../components/search/search.js';

document.addEventListener("DOMContentLoaded", (event) => {
    cardCreation();
    fav();
    sort();
    search();
    if(sessionStorage.getItem('card-data') != null && sessionStorage.getItem('card-data').length > 0) {
        filter();  
    }
});