/* eslint-env jquery */
import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
    return(`
    <div class="list-group">
    ${who.map(user => {
        return WhoToFollowListItem(user)
    }).join("")}
    </div>
    
    `)
}
export default WhoToFollowList;
$(WhoToFollowList);