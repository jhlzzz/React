import { Component } from "react";

class Control extends Component{
    render(){
      return(
        <ul>
         <li><a 
            href="/create"
            onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode("create");
            }.bind(this)}
            >입력</a>
         </li>
         <li><a 
            href="/update"
            onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode("update");
            }.bind(this)}
            >수정</a>
         </li>
         <li><a 
            href="/delete"
            onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode("delete");
            }.bind(this)}
            >삭제</a>
         </li>
       </ul>
      );
    }
  }
  export default Control;