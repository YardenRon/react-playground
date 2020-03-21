import React from 'react';
import './app.css';
import DynamicSelect from './dynamic-select';

class App extends React.Component {

  components = {
    "HelloComponent": null,
    "TestComponent": null,
    "ContextComponent": null
  };

  state = {
    selectedComponent: ""
  };

  onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      selectedComponent: e.target.value
    });
  };

  render() {
    const Component = this.state.selectedComponent;

    return (
      <div className="app">
        <div className="pickerContainer">
          <DynamicSelect componentsNames={Object.keys(this.components)} handleChange={this.onSelectChange} />
        </div>
        <div className="componentContainer">
          {/* <Component /> */}
        </div>
      </div>
    );
  }
}

export default App;
