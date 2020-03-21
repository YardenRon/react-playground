import React from 'react';

export const ThemeContext = React.createContext('light');

const ContextComponent = () => {
    return (
        <ThemeContext.Provider value="dark">
            <div className="parent-container">
                <ParentComponent />
            </div>
        </ThemeContext.Provider>
    );
};

const ParentComponent = () => {
    return (
        <div className="child-container">
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