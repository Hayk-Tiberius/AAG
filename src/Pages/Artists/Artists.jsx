import React from "react"
import { useState, useEffect } from "react";
import data from "./artist-data.json"

import ArtistList from "./ArtistList.jsx";


const filterArts = (searchText) => {
    if (!searchText) {
        return data
    }
    return data.filter(({ artist_name }) =>
        artist_name.toLowerCase().includes(searchText.toLowerCase())
    )
}

const Artists = () => {

    const [artList, setArtList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredArts = filterArts(searchTerm)
            setArtList(filteredArts) 
        },300)

        return () => clearTimeout(Debounce);
    }, [searchTerm]);

    return ( 
        <div className="Artists__main">  
            <div className="Button">
                <label>Enter the Name/Birth age/Activity of the artist </label>
                <input 
                    type="text"
                    autoComplete="off"
                    placeholder="Searching for an artist"
                    className="Artist_input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <ul>
                    <ArtistList artList={artList}/>
                </ul>
            </div>
        </div>        
)}

export default Artists