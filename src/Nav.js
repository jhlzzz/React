import { Component } from "react";

class Nav extends Component {
    /*state = {
        list: []
    }*/
    /*componentDidMount(){
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
    }*/
    render(){
        var listTag = [];
        for(var i=0;i<this.props.list.length;i++){
            var li = this.props.list[i];
            listTag.push(
            <li key={li.id}>
                <a href={li.id}
                    data-id={li.id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onClick(e.target.dataset.id);
                    }.bind(this)}>{li.title}</a>
            </li>
            );
        }
        return(
            <nav>
                <ul>
                {listTag}
                </ul>
            </nav>
        );
    }
}
export default Nav;
