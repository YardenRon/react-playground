import React from 'react';

export const ThemeContext = React.createContext('light');

const ContextComponent = () => {
    return (
        <ThemeContext.Provider value="dark">
            <div className="parentContainer">
                <ParentComponent />
            </div>
        </ThemeContext.Provider>
    );
};

const ParentComponent = () => {
    return (
        <div className="childContainer">
            <ChildComponent />
        </div>
    );
};

class ChildComponent extends React.Component {
    static contextType = ThemeContext;

    render() {
        return <span> { this.context } </span>;
    }
}

export default ContextComponent;