import React from "react";
import { useSelector } from "react-redux";

function Data() {
    let { otherUser } = useSelector(state => state.user)
    return (
        <div className="dataDiv">
            {
                otherUser?.map((user,index) => {
                    return (
                        <div key={user._id} className="dataDiv" >
                            <br />
                            <p id="maindata"><span id="userName">User Id :- </span> {index + 1}</p>
                            <h1 id="maindata"><span id="userName">Name :- </span>{user.userName || user.name}</h1>
                            <h1 id="maindata"><span id="userName">Phone no. :-</span>{user.contact}</h1>
                            <h1 id="maindata"> <span id="userName">Date :-</span>{new Date(user.createdAt).toLocaleDateString()}</h1>

<br /><br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Data