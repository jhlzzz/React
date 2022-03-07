import { Component } from "react";

class NavC extends Component{
    shouldComponentUpdate(newProps){
      console.log("#NavC shouldComponentUpdate()", newProps.data, this.props.data);
      if(this.props.data === newProps.data){
        return false;
      }
      return true;//리턴값이  true여야 render()가 실행된다.
    }
    render(){
      console.log("#NavC render()")
        var lists = [];
        var data = this.props.data;
        for(var i=0;i<data.length;i++){
            lists.push(<li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    onClick={function(id, e){
                        e.preventDefault();
                        this.props.onChangePage(id);
                    }.bind(this, data[i].id)}>
                    {data[i].title}
                </a>
            </li>);
        }
      return(        
        <nav>
           <ul>
             {lists}
           </ul>
          </nav>
      );
    }
}
  export default NavC;