import React from 'react';

class App extends React.Component {
    state = {
        counter:0,
    };

    incrementClickHandler = () => {
        this.setState({counter:this.state.counter+1});
    };

    decrementClickHandler = () =>{
        this.setState({counter:this.state.counter-1});
    };

    render(){
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.incrementClickHandler}>Increment</button>
                <button onClick={this.decrementClickHandler}>Decrement</button>
            </div>
        );
    }
}

export default App;