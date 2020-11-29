import React, { FunctionComponent } from 'react';


export interface SwitchProps {
    isActive: boolean,
    onSelect: () => void,
}

const Switch: FunctionComponent<SwitchProps> = (props) => {
    return (
        <div>
            hello world
        </div>
    );
};

export default Switch;
