import { Component } from "react";

class CreateContent extends Component{
    render(){
      return(
        <article>
           <h3>Create</h3>
            <form action="/create_process" method="post" onSubmit={function(e){
              //e.preventDefault();
              //debugger;
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
              alert("전송");
            }.bind(this)}>
              <p><input name="title" placeholder="제목"/></p>
              <p><input name="desc" placeholder="설명"/></p>
              <p><input type="submit" value="입력"/></p>
            </form>
        </article>
      );
    }
  }
  export default CreateContent;