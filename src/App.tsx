import * as React from 'react';
import './App.css';

import Toggleable from './lib/Toggleable';
import logo from './logo.svg';

class App extends React.Component<any,any> {

  constructor(props:any){
    super(props);
    this.state = {value:0};
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Toggleable value={this.state.value} onChange={this.handleChange}>
          <div> here 0 </div>
          <div onClick={this.handleClickItem}> here 1 </div>
          <button onClick={this.handleClickItem2}> here 2 </button>
        </Toggleable>
      </div>
    );
  }

  private handleClickItem=()=>{
    window.alert("test");
  }

  private handleClickItem2=()=>{
    window.alert("test2");
  }

  private handleChange = (newValue:number) => {
    // tslint:disable-next-line:no-console
    console.info(newValue);
    this.setState({value:newValue});
  }
}

export default App;
