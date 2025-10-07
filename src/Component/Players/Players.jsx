import { use, useState } from "react";
import Player from "../Player/Player";

const Players = ({playersPromise}) => {

     const players = use(playersPromise)

    const [showAll, setShowAll] = useState(false)
    const visiblePlayers = showAll? players : players.slice(0, 6) 

   
    

    return (
        <div>
            <h2>This is players</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    visiblePlayers.map((player,index)=><Player key={index} player={player} ></Player>)
                }
            </div>
            <button onClick={()=>setShowAll(!showAll)} className="mt-10 bg-amber-300 p-4">Show All</button>
        </div>
    );
};

export default Players;