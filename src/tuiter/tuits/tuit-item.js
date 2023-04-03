import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";
const TuitItem = (
    {
            tuit = {
            "topic": "Space",
            "time": "1d",
            "userName": "NASA",
            "tuit": "If I could relive that day, I would say, “We almost never get the design right on the first pass. We design a piece of the hardware, build it, test it, find out what’s not working the way it needs to, have it fixed, then test it again before integrating it into the spacecraft.",
                "replies": 190,
                "liked":false
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1"><img width="40" alt="twitter profile icon" className="rounded-circle" src={`../tuiter-old/explore/images/${tuit.image}`}/></div>
                <div className="col-11">

                    <div>{tuit.username} . {tuit.time}
                        <i className=" ps-1 bi bi-patch-check-fill"></i>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i></div>

                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.tuit}</div>

                </div>

            </div>
            <div className="row">
                {
                    <TuitStats tuit={tuit}/>
                }
            </div>
        </li>
    );
};

export default TuitItem;