import React from 'react';
import ChirpBody from "./ChirpBody.jsx";

let Timeline = props => {
    return props.chirps.map(chirp => {
        return <ChirpBody chirp={chirp}/>
    })
}

export default Timeline