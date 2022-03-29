import { render } from '@testing-library/react';
import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            myvar: "this is just some text",
            data: [
                    {
                            "id"  :1,
                            "name": "Dave",
                            "age" : "20"
                    },
                    {
                        "id"  :2,
                        "name": "Joe",
                        "age" : "30"
                    },
                    {
                        "id"  :3,
                        "name": "Bob",
                        "age" : "35"
                    }
                ]
        }
    }
    render(){
        return (
            <div> 
                <h1>{this.props.headerProp}</h1>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }


render(){
    return(
            <table>
                <tbody>
                    {this.state.data.map((person,i) => <TableRow key={i} tableData={person} />)}
                </tbody>
            </table>
        );
    }
}
//sub component
       //tableDatais arbitary name

class TableRow extends Component{
render(){
    return(
            <tr>    
                    <td><h1> { this.props.tableData.id }</h1> </td>
                    <td> { this.props.tableData.name }</td>
                    <td> { this.props.tableData.age }</td>

            </tr>
            
        )
    }

}



// class Header extends Component{
//     render(){
//         return (
//             <h1> This is the Header </h1>
//         );
//     }
// }
// class Content extends Component{
//     render(){
//         return (
//             <h1> This is the Content </h1>
//         );
//     }
// }




App.defaultProps={
    headerProp:"Header from default prop",
    contentProp:"CONTENT from  default prop"
}

export default App;