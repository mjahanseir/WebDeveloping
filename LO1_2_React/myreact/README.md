## Stateful REACT
State

Maintaining state within a REACT component requires the use of a constructor method and the this.state object. For our initial App component this would be:

      class App extends Component {
        constructor(){
          super();
          this.state = { ...  }
        }
        render(){
          return(
            <h1>My Header</h1>
          );
        }
      }
Note that we also invoke the parent constructor with super(). this.state will contain any data we wish to have available to work with in our component. It can contain one or more items and the items can be different data types or arrays. Let's update our App's state by adding an array of objects called data.

    constructor() {
      super();
      this.state = {
        data: [ {   },{   },{   } ]
      }
    }
now some fields('id', 'name' and 'age') and data in those objects: 

    constructor() {
      super();
      this.state = {
        data: 
        [
          {
            "id":1,
            "name":"Foo",
            "age":"20"
          },
          {
            "id":2,
            "name":"Bar",
            "age":"30"
          },
          {
            "id":3,
            "name":"Baz",
            "age":"40"
          }
        ]
      }
    }
We could also have this along with a single valued variable as well:

    constructor() {
      super();
      this.state = {
        myvar: "This is just some text",
        data: 
        [
          ...
        ]
      }
    }
So the built-in state object allows us to store whatever data we need within our component. 

We may also need some way to get data into a component as well. This can be done using Properties.

## Props

Props or properties are immutable variables which allow a means to pass data into a component. Properties are named by the passing module and that naming is then used to reference the property data in the receiving component.

There are three ways to look at props:

- Passing properties into our top level component from index.js
- Passing properties to child components
- Using default properties
Properties can be passed into our top level component by altering the ReactDOM.render as follows:

    ReactDOM.render(
      <App headerProp = "Header from props..." contentProp = "Content from props..." /> , 
      document.getElementById('root'));
These can then be referred to in our App component via the this.props object after including the parameter props in the constructors.

      constructor(props){
        super(props);

      }
      render(){
        return(
          <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
          </div>
        );
      }
We can also use default properties by adding the following:

      App.defaultProps = {
        headerProp: "Header from default props...",  
        contentProp: "Content from default props..."
      }
Finally, we can use props as a mechanism to pass state data from the parent component to child components:

Consider our component with this.state containing an array of objects called data as shown above. We could create a table in the parent object and then create a table row object as a child and pass our data array to the child to be outputted in table rows.

The table row component could be created as:

      class TableRow extends Component {
        render(){
          return(
            <tr>
              <td>{this.props.tableData.id}</td>
              <td>{this.props.tableData.name}</td>
              <td>{this.props.tableData.age}</td>
            </tr>
          );
        }
      }
Then the component can be embedded within a table in the App class using the array map function:

      <table>
        <tbody>
          {this.state.data.map((person, i) => <TableRow key = {i} tableData = {person} />)}
        </tbody>
      </table>
Here we use an arrow function:
      (person, i) => <TableRow key = {i} tableData = {person} />

where person is the element to be mapped, i is the index and TableRow is the receiving component which will have two variables, i and person, passed as properties key and tableData to be referenced within the TableRow component. Note that 'person' and 'tableData' are just identifiers and these names are not dependent on any other identifier used in this.state.

What we've essentially done is use the map function to generate an array of TableRow components, each populated with one data object.

For a review of how the javascript array function map() works, check the Mozilla documentation.
