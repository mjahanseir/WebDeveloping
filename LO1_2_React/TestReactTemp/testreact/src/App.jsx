import React,{Component} from "react";

class App extends Component{
    constructor (props){
        super(props);
        this.state={ name: 'Ginny'}
    }
    render(){
        this.setState(name);
        return(<h2>{this.state.name}</h2>);
       // this.props.name                // when passing by object use              .                                                                                                                 this   syntax

    }
}



//
// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             myvar: "this is just some text",
//             data: [
//                 {
//                     "id"  :1,
//                     "name": "Dave",
//                     "age" : "20"
//                 },
//                 {
//                     "id"  :2,
//                     "name": "Joe",
//                     "age" : "30"
//                 },
//                 {
//                     "id"  :3,
//                     "name": "Bob",
//                     "age" : "35"
//                 }
//             ]
//         }
//     }
//
//     render() {
//         return (
//             <table>
//                 <tbody>
//                 {this.state.data.map((person,i) =>
//                     <TableRow key={i} tableData={person} />)}
//                 </tbody>
//             </table>        );
//     }
// }
//
// class TableRow extends Component{
//     render(){
//         return(
//             <tr>
//                 <td><h1> { this.props.tableData.id }</h1> </td>
//                 <td> { this.props.tableData.name }</td>
//                 <td> { this.props.tableData.age }</td>
//
//             </tr>
//
//         )
//     }
//
// }
//
// App.defaultProps={
//     mo:"vvvavvavavav"}


export default App;