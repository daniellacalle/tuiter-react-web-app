/* eslint-env jquery */

function WhoToFollowListItem(who) {
    return(`
        <div class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <div class="row">
                        <img width=28 class="rounded-circle pe-1 img-fluid" src="${who.avatarIcon}"/>
                    </div>
                </div>
                <div class="col-7">
                    <div class="row">
                        <p class="m-0">${who.userName}
                            <i class="fa fa-circle-check"></i></p>
                        <p class="m-0">@${who.tuiterHandle}</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <button class="btn btn-primary btn-sm rounded-pill">Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `)
}

$(WhoToFollowListItem)
export default WhoToFollowListItem;