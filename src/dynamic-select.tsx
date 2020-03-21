import React from 'react';

interface Props {
    componentsNames: string[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DynamicSelect = (props: Props) => {
    return (
        <select id="components" onChange={props.handleChange}>
            { props.componentsNames.map(
                (componentName, i) => ( <option value={componentName} key={i}> { componentName }</option> )
            ) }
        </select>
    );
};

export default DynamicSelect;
