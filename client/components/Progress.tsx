import React from 'react';

const Progress:React.FC<TrackProgressProps> = ({left, onChange, right}) => {
    return (
        <div style={{ display: 'flex' }}>
            <input type="range"
                    min={left}
                    max={right}
                    value={left}
                   onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default Progress;

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}