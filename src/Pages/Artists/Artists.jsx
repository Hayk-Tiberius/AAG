import React from "react"
import { useState, useEffect } from "react";
import artistData from "./artist-data.json"

const filterArts = (searchText, listOfArts) => {
    if (!searchText) {
        return listOfArts
    }
    return listOfArts.filter(({ artist_name }) =>
        artist_name.toLowerCase().includes(searchText.toLowerCase())
    )
}
const data =  artistData

const Artists = () => {

    const [artList, setArtList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredArts = filterArts(searchTerm,data)
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
                    {artList.map((car,index) => {
                        return <li key={index} className=""> </li>
                    }
                )}
                </ul>
            </div>
        </div>        
)}

export default Artists