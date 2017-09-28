import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter:0,
        };
    }

    incrementClickHandler() {
        this.setState({counter:this.state.counter+1});
    }

    render() {
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.incrementClickHandler.bind(this)}>Increment</button>
            </div>
        );
    }
}

export default App;