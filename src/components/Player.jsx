import { useState } from "react"


let Player = ({name,symbole}) => {
    const [isEditing,setIsEditing] = useState(false)
    let editHandler = () => {
        setIsEditing(isEditing=>!isEditing)
    }
    return(
        <li>
            <span className="player">
                
                {isEditing? <input type="text" value={name}></input>: <span className="player-name" > {name}</span>}
                <span className="player-symbole" > {symbole}</span>
            </span>
            <button onClick={editHandler}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}
export default Player