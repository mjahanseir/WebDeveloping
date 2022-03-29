import React, {Component} from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myVar: "this is  just some text",
            data: [{ "id": 1, "name": "Foo", "age": "20" }, { "id": 2, "name": "Bar", "age": "30" }, { "id": 3, "name": "Baz", "age": "40" }]
        }
    }
    render() {
        return (
            <table>
                <tbody>
                {this.state.data.map((person, i) =>
                    <TableRow key={i} tableData={person} />)}
                </tbody>
            </table>
        );
    }
}
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


export default App;
