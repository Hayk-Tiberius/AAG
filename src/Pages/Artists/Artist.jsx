import React from "react";

const Artist = ({artistName, artistBirth, artistActivity}) => {
    return (
        <div className="ArtistDataList">
            <div className="ArtistName">Name: {artistName}</div>
            <div className="ArtistBirth">Birth: {artistBirth}</div>
            <div className="ArtistActivity">Activity: {artistActivity}</div>
        </div>
    )
}

export default Artist