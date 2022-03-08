import Nav from "./Nav";
import { Component } from "react";

class Article extends Component {
    render(){
        return(
            <article>
                <h3>{this.props.title}</h3>
                {this.props.desc}
            </article>
        );
    }
}
class App extends Component {
  state = {
    article: {title:"환영", desc:"어서와~"},
    list: []
  }
  componentDidMount(){
    fetch("list.json")
    .then(function(result){
        var temp = result.json()
        console.log("temp", temp);
        return temp;
    })
    .then(function(js){
        // console.log(js);
        this.setState({
            list: js
        });
    }.bind(this))
}
  render(){
    return (
      <div className="App">
        <h1>Ajax 홈</h1>
        <Nav
          list={this.state.list}
          onClick={function(id){
          // console.log(id);
          fetch(id+".json")
          .then(function(result){
            return result.json();
          })
          .then(function(js){
            this.setState({
              article: {title:js.title, desc:js.desc}
            });
          }.bind(this))
        }.bind(this)}/>
          <Article title={this.state.article.title} desc={this.state.article.desc}></Article>       
      </div>
    );
  }
}
export default App;
