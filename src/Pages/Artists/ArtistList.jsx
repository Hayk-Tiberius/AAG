import React from "react";
import Artist from "./Artist";

const AristList = ({artList}) => {
    return (
        <div className="artist-list">
            {artList.map((artist,index)=>{
            return (
                    <Artist
                        key={index}
                        artistName={artist.artist_name}
                        artistBirth={artist.arist_birthage}
                        artistActivity={artist.artist_activity}
                    />
                    )
                })
            }
        </div>
    )
}

export default AristList