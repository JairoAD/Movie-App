import { Loader } from "./components/loader.js";
import { Header } from "./components/header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infiniteScroll.js";
import { Banner } from "./components/Banner.js";
import { SortOptions } from "./components/SortOptions.js";

export function App() {
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Banner());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    infiniteScroll();
}

