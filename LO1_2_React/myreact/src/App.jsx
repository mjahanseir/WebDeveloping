import React, { Component } from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        //component with this.state containing an array of objects called data
        this.state = {
            myVar: "this is  just some text",
            data: [{ "id": 1, "name": "Foo", "age": "20" }, { "id": 2, "name": "Bar", "age": "30" }, { "id": 3, "name": "Baz", "age": "40" }]
        }
    }
    render() {
        return (
            /*      Step 2:
                    Then the component can be embedded within a table in the App
                    class using the array map function:   */
            <table>
                <tbody>
                {this.state.data.map((person, i) =>
                    <TableRow key={i} tableData={person} />)}
                </tbody>
            </table>
        );
        /*      Step 2 - B:
                Here we use an arrow function
                (person, i) => <TableRow key = {i} tableData = {person} />

                where person is the element to be mapped, i is the index and
                TableRow is the receiving component which will have two variables,
                i and person, passed as properties key and tableData to be
                referenced within the TableRow component. Note that 'person' and
                'tableData' are just identifiers and these names are not dependent
                on any other identifier used in this.state.

                What we've essentially done is use the map function to generate an
                array of TableRow components, each populated with one data object.

                For a review of how the javascript array function map() works:
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */


    }
}

/*      Step 1:
        We can use props as a mechanism to pass state data from the
        parent component to child components:
        Consider our component with this.state containing an array
        of objects called data as shown above.
        We could create a table in the parent object and then create
        a table row object as a child and pass our data array to the
        child to be outputted in table rows.

        The table row component could be created as:   */
class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.tableData.id}</td>
                <td>{this.props.tableData.name}</td>
                <td>{this.props.tableData.age}</td>
            </tr>
        );
    }
}

App.defaultProps = {
    headerProp: "Header from default prop",
    contentProp: "CONTENT from  default prop"
}
export default App;