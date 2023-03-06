/* eslint-env jquery */
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return(`
    <div class="row">
        <div class="list-group">
        ${posts.map(post => PostSummaryItem(post)).join("")}
        </div>
    </div>
    `)
}

export default PostSummaryList;
