import React, { useState } from 'react'


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

        { name: 'c', value: 'c2', type: 'natural' },
        { name: 'c#', value: 'c#2', type: 'accidental' },
        { name: 'd', value: 'd2', type: 'natural' },
        { name: 'd#', value: 'd#2', type: 'accidental' },
        { name: 'e', value: 'e2', type: 'natural' },
        { name: 'f', value: 'f2', type: 'natural' },
        { name: 'f#', value: 'f#2', type: 'accidental' },
        { name: 'g', value: 'g2', type: 'natural' },
        { name: 'g#', value: 'g#2', type: 'accidental' },
        { name: 'a', value: 'a2', type: 'natural' },
        { name: 'a#', value: 'a#2', type: 'accidental' },
        { name: 'b', value: 'b2', type: 'natural' },
    ];

    const scales =
    {
        C: {
            name: 'C major',
            notes: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
            keysToHighlght: []

        },
        D: {
            name: 'D major',
            notes: ['d', 'e', 'f#', 'g', 'a', 'b', 'c#'],
            keysToHighlght: []
        },
        E: {
            name: 'E major',
            notes: ['e', 'f#', 'g#', 'a', 'b', 'c#', 'd#'],
            keysToHighlght: []
        },
        F: {
            name: 'F major',
            notes: ['f', 'g', 'a', 'a#', 'c', 'd', 'e'],
            keysToHighlght: []
        },
        G: {
            name: 'G major',
            notes: ['g', 'a', 'b', 'c', 'd', 'f#', 'g'],
            keysToHighlght: []
        },
        A: {
            name: 'A major',
            notes: ['a', 'b', 'c#', 'd', 'e', 'f#', 'g#'],
            keysToHighlght: []
        },
        B: {
            name: 'B major',
            notes: ['b', 'c#', 'd#', 'e', 'f#', 'g#', 'a#'],
            keysToHighlght: []
        }

    }

    const [selectedScale, setScale] = useState(scales['F']);

    const setHighlightStyle = (key) => {
        if (key.name === selectedScale.notes[0]) {
            return 'root'
        } else if (selectedScale.keysToHighlght.includes(key.value)) {
            return 'highlight'
        }
    }

    const setHighlights = () => {
        let hitFirstRoot = false;
        let hitSecondRoot = false
        keys.forEach(key => {
            // hit second root note
            if (hitFirstRoot && key.name === selectedScale.notes[0]) hitSecondRoot = true;
            // hit first root note
            if (key.name === selectedScale.notes[0]) hitFirstRoot = true;
            // only highlight first octave of a scale
            if (hitFirstRoot && !hitSecondRoot && selectedScale.notes.includes(key.name)) selectedScale.keysToHighlght.push(key.value);
        });
    }

    const renderKeys = () => {
        setHighlights();
        return keys.map(key => {
            return key.type === 'natural' ?
                <div key={key.value} className={`natural-key ${setHighlightStyle(key)}`}>
                    {key.name}
                </div>
                :
                <div key={key.value} className='piano-accidental-key-wrapper'>
                    <div className={`accidental-key ${setHighlightStyle(key)}`}>
                        {key.name}
                    </div>
                </div>
        });
    }

    const scaleSelector = Object.entries(scales).map(scale => {
        const scaleName = scale[1];
        const scaleKey = scale[0];
        return <button key={scale} className='scale-button' onClick={() => (setScale(scales[scaleKey]))}>
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
                    {renderKeys()}
                </div>
                <div className='scale-selector'>
                    {scaleSelector}
                </div>
            </div>

        </>
    )
}

export default Piano; 