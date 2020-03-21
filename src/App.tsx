import React from 'react';
import './app.scss';
import DynamicSelect from './dynamic-select';
import { ComponentsList } from './config';

interface AppState {
  selectedComponent: keyof typeof ComponentsList
}

class App extends React.Component {

  state: AppState = {
    selectedComponent: "HelloComponent"
  };

  onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      selectedComponent: e.target.value
    });
  };

  render() {
    const Component = ComponentsList[this.state.selectedComponent];

    return (
      <div className="app">
        <div className="picker-container">
          <DynamicSelect componentsNames={Object.keys(ComponentsList)} handleChange={this.onSelectChange} />
        </div>
        <div className="component-container">
          <Component />
        </div>
      </div>
    );
  }
}

export default App;
