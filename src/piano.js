import React, { useState, useEffect } from 'react'


const Piano = () => {
    const keys = [
        { name: 'c', value: 'c1', type: 'natural' },
        { name: 'c#', value: 'c#1', type: 'accidental' },
        { name: 'd', value: 'd1', type: 'natural' },
        { name: 'd#', value: 'd#1', type: 'accidental' },
        { name: 'e', value: 'e1', type: 'natural' },
        { name: 'f', value: 'f1', type: 'natural' },
        { name: 'f#', value: 'f#1', type: 'accidental' },
        { name: 'g', value: 'g1', type: 'natural' },
        { name: 'g#', value: 'g#1', type: 'accidental' },
        { name: 'a', value: 'a1', type: 'natural' },
        { name: 'a#', value: 'a#1', type: 'accidental' },
        { name: 'b', value: 'b1', type: 'natural' },

        // { name: 'c', value: 'c2', type: 'natural', highlight: true },
        // { name: 'c#', value: 'c#2', type: 'accidental', highlight: true },
        // { name: 'd', value: 'd2', type: 'natural', highlight: true },
        // { name: 'd#', value: 'd#2', type: 'accidental', highlight: true },
        // { name: 'e', value: 'e2', type: 'natural', highlight: true },
        // { name: 'f', value: 'f2', type: 'natural', highlight: true },
        // { name: 'f#', value: 'f#2', type: 'accidental', highlight: true },
        // { name: 'g', value: 'g2', type: 'natural', highlight: true },
        // { name: 'g#', value: 'g#2', type: 'accidental', highlight: true },
        // { name: 'a', value: 'a2', type: 'natural', highlight: true },
        // { name: 'a#', value: 'a#2', type: 'accidental', highlight: true },
        // { name: 'b', value: 'b2', type: 'natural', highlight: true },

        { name: 'c', value: 'c3', type: 'natural' },
        { name: 'c#', value: 'c#3', type: 'accidental' },
        { name: 'd', value: 'd3', type: 'natural' },
        { name: 'd#', value: 'd#3', type: 'accidental' },
        { name: 'e', value: 'e3', type: 'natural' },
        { name: 'f', value: 'f3', type: 'natural' },
        { name: 'f#', value: 'f#3', type: 'accidental' },
        { name: 'g', value: 'g3', type: 'natural' },
        { name: 'g#', value: 'g#3', type: 'accidental' },
        { name: 'a', value: 'a3', type: 'natural' },
        { name: 'a#', value: 'a#3', type: 'accidental' },
        { name: 'b', value: 'b3', type: 'natural' },
    ];

    const scales =
    {
        C: {
            name: 'C major',
            keys: ['c', 'd', 'e', 'f', 'g', 'a', 'b']
        },
        D: {
            name: 'D major',
            keys: ['d', 'e', 'f#', 'g', 'a', 'b', 'c#']
        },
        F: {
            name: 'F major',
            keys: ['f', 'g', 'a', 'a#', 'c', 'd', 'e']
        }

    }

    const [selectedScale, setScale] = useState(scales['D']);

    const isInSelectedScale = (key) => {
        console.log(key, selectedScale)
            if (key.name === selectedScale.keys[0]) {
                return 'root'
            } else if (selectedScale.keys.includes(key.name) && !key.root) {
                return 'highlight'
            }
    }

    const renderKeys = keys.map(key => {
        return key.type === 'natural' ?
            <div key={key.value} className={`natural-key ${isInSelectedScale(key)}`}>
                {key.name}
            </div> :

            <div key={key.value} className='piano-accidental-key-wrapper'>
                <div key={key.value} className={`accidental-key ${isInSelectedScale(key)}`}>
                    {key.name}
                </div>
            </div>
    });

    const scaleSelector = Object.entries(scales).map(scale => {
        const scaleName = scale[1];
        const scaleKey = scale[0];
        console.log(scaleKey)
        return <button className='scale-button' onClick={() => (setScale(scales[scaleKey]))}>
            {scaleName.name}
        </button>

    });

    return (
        <>
            <div className='app-container'>
                <h1>
                    Scale Visuailizer
                </h1>
                <div className='piano-container'>
                    {renderKeys}
                </div>
                <div className='scale-selector'>
                    {scaleSelector}
                </div>
            </div>

        </>
    )
}

export default Piano; 