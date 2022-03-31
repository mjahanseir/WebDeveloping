# REACT Flash Cards!

- Fundamental in REACT is the component 
- Everything we build in REACT will be one and mostly will use combinations of them.
- We will combine components using composition not inheritance
- When defining a component use and uppercase name
- React will treat a lowercase name as DOM tag

  - Components are defined as Classes(or functions ) in REACT

      class name extends Components

- This basic syntax will define a viewable Component but will be stateless.
- To define state for a class,we ‘ll add a constructor and use props $ state
- props(properties) give us a mechanism to pass data between components
  - State provides us a means to store data in our component

      Constructor (props){
            super(props);
            this.state={  ....    }
      }

- With in the component, to display something we use a render(){ ... }  method containing a  return()
Example:


        class App extends Component{
            constructor (props){
                    super(props);
                    this.state={ name: “Ginny”}
            }
            render(){
                    return(<h2>{this.state.name}</h2>);  
               }
        }
- If passing something like object then we cant use state

          ReactDom.render(<App name=”Dave” />, document.getbyID(‘root’);)

State doesn't have to be defined entirely in the constructor .It can be altered w/in our component.
           
            * Don't do —-------->   state.name=”Joe”
            * Instead —-------->     setState(variable :   value)
- If we create handler methods in a component they will need to found if they work w/ state method

         this._________=this._____.bind(this);

### Class components can also contain lifecycle methods
        -componentDidMount
        -componentWillUnmount
- ComponentDidMount: execute immediately after the component  mounts
  - ComponentWillUnmount: execute just before teardown.
  
  - Can use didMount for setting up data
  - Can use WillUnmount for clearing resources
