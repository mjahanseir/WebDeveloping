import React, {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <Header/>
                <Content/>
            </div>

        );
    }
}

class Header extends Component{
    render(){
        return (
            <h1> This is the Header </h1>
        );
    }
}
class Content extends Component{
    render(){
        return (
            <h1> This is the Content </h1>
        );
    }
}

export default App;
