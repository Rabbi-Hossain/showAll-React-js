
const Player = ({ player }) => {
    const {player_image,player_name,  price} = player

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={player_image}
                        alt="Shoes"
                        className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{player_name}</h2>

                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">{price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;