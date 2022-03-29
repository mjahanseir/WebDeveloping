import React, {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h1>{this.props.contentProp}</h1>
            </div>

        );
    }
}


export default App;
