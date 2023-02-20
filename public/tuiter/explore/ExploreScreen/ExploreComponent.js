/* eslint-env jquery */
import PostSummaryList from "../PostSummaryList";

const MainExploreComponent = () => {
    return (`
        <div class="row">
            <div class="col-11">
                <i class="fa-solid fa-magnifying-glass pt-2 ps-3" style="color: black"></i>
                <input class="form-control ps-5 rounded-pill" type="text" placeholder="Search Tuiter"/>
            </div>
            <a class="col-1" href="#"><i class="fa-solid fa-gear pt-2"
                                         style="font-size: 1.5em;"></i></a>
        </div>
        <div class="row mt-2">
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active">For You</a></li>
                <li class="nav-item"><a class="nav-link">Trending</a></li>
                <li class="nav-item"><a class="nav-link">News</a></li>
                <li class="nav-item"><a class="nav-link">Sports</a></li>
                <li class="nav-item"><a class="nav-link">Entertainment</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="list-group mb-1">
               <img width=100% class="img-fluid" src="./images/sp-starship.webp"/>
               <h4 class="wd-starship position-absolute ms-1">SpaceX's Starship</h4>
            </div> 
        </div>
        ${PostSummaryList()}
    `)
}

export default MainExploreComponent;
