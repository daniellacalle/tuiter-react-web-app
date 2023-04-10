import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (
    {
        tuit = {
            "topic": "Space",
            "time": "1d",
            "userName": "NASA",
            "tuit": "If I could relive that day, I would say, “We almost never get the design right on the first pass. We design a piece of the hardware, build it, test it, find out what’s not working the way it needs to, have it fixed, then test it again before integrating it into the spacecraft.",
            "replies": 189,
            "liked": false,
            "likes": 120,
            "retuits": 90,
        }
    }
) => {
    const dispatch = useDispatch();
    return(
        <>
            <div className="col-1"></div>
            <div className="col-2">
                <i className="bi bi-chat"> {tuit.replies}</i>
            </div>
            <div className="col-2">
                <i className="bi bi-arrow-repeat"> {tuit.retuits}</i>
            </div>
            <div className={"col-2"}>
                <div>
                    Likes: {tuit.likes}
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...tuit,
                                                                   likes: tuit.likes + 1
                                                               }))} className="bi bi-heart-fill me-2 text-danger"></i>
                </div>
                
                {/*<i className={*/}
                {/*    (tuit.liked) ?  "bi bi-heart-fill" : "bi bi-heart"*/}
                {/*}> {tuit.likes}</i>*/}
            </div>
            <div className={"col-3"}>
                <div>
                    Dislikes: {tuit.dislikes}
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...tuit,
                                                                   dislikes: tuit.dislikes + 1
                                                               }))} className="bi bi-hand-thumbs-down-fill"></i>
                </div>
                {/*<i className="bi bi-hand-thumbs-down-fill"*/}
                {/*> {tuit.dislikes}</i>*/}
            </div>
            <div className={"col-2"}>
                <i className={"bi bi-share"}></i>
            </div>
</>
    );
};

export default TuitStats;