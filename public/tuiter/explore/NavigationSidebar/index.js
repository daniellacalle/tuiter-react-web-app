/* eslint-env jquery */
import NavigationItem from "./NavigationItem.js";
import navItems from "./navitems.js";

const NavigationSidebar = () => {
    return(`
        <div class="list-group">
         <a class="list-group-item" href="/">
           <i class="fab fa-twitter"></i></a>
         ${navItems.map(navItem => {
             return NavigationItem(navItem)}).join("")}
       </div>
       <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
       </div>
    `);
}
export default NavigationSidebar;
