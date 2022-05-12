import React from 'react';

const Progress: React.FC<TrackProgressProps> = ({left, onChange, right, width, minuteFormat = false}) => {
    const secToMin = (seconds: number): string => {
        let min = ~~(seconds / 60)
        return `${min}:${String(seconds - min * 60).padStart(2, '0')}`
    }

    return (
        <div style={{display: 'flex'}}>
            <input type="range"
                   min={0}
                   max={right}
                   value={left}
                   onChange={onChange}
                   style={{width: width + "vw", marginRight: 10}}
            />
            <div>
                {
                    minuteFormat
                        ? secToMin(left) + ' / ' + secToMin(right)
                        : left  + ' / ' + right
                }
            </div>


        </div>
    );
};

export default Progress;

interface TrackProgressProps {
    left: number;
    right: number;
    width?: number;
    minuteFormat?: boolean
    onChange: (e) => void;
}