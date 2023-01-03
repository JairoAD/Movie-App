import { SearchForm } from "./SearchForm.js";
import { SortOptions } from "./SortOptions.js";

export function Banner(){
    const $banner = document.createElement("section");
    $banner.innerHTML = `
    <div class= "banner-title">
        <p>Welcome. <br> Explore around thousands of movies</p>
    </div>
    `;
    $banner.classList.add("banner");
    $banner.appendChild(SearchForm());
    $banner.appendChild(SortOptions());
    SortOptions();
    return $banner;
}