import { Component } from "react";

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    }
  }
    render(){
      return(
        <article>
           <h3>Update</h3>
            <form action="/update_process" method="post" onSubmit={function(e){
              e.preventDefault();
              //debugger;
              this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
              alert("전송");
            }.bind(this)}>
              <p><input name="title" placeholder="제목" value={this.state.title}
              onChange={function(e){
                this.setState({
                  title:e.target.value
                });  
              }.bind(this)}/></p>
              <p><textarea name="desc" placeholder="설명" value={this.state.desc}
              onChange={function(e){
                this.setState({
                  desc: e.target.value
                });
              }.bind(this)}/></p>
              <input type="hidden" name="id" value={this.state.id}/>
              <p><input type="submit" value="수정"/></p>
            </form>
        </article>
      );
    }
  }
  export default UpdateContent;