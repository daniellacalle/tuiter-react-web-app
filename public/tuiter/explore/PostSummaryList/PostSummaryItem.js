/* eslint-env jquery */

function PostSummaryItem(post) {
    return(`
    <div class="list-group-item">
        <div class="row">
            <div class="col-10">
                <h6 class="wd-topic m-0">${post.topic}</h6>
                <p class="wd-article-header">${post.userName}
                    <i class="fa fa-circle-check"></i>
                    <span class="wd-time-elapsed">- ${post.time}</span>
                </p>
                <p class="fw-bold">${post.title}</p>
            </div>
            <div class="col-2">
                <img class="img-fluid rounded" src="${post.image}"/>
            </div>
        </div>
    </div>  
    `)
}

export default PostSummaryItem;