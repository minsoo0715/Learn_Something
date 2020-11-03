import React, { Component} from 'react';


class TOC extends Component{
    


    // shouldComponentUpdate(newProps, newState) {
      
    //   console.log(newProps.data, this.props.data);

    //   if(this.props.data === newProps.data) {
    //     return false;
    //   }else {
    //     return true;
    //   }
    // }


    render() {
      var lists =[];
      var data = this.props.data;

      for(var i = 0; i<data.length; i++) {
      lists.push(<li key={data[i].id}> <a data-id={data[i].id} href={"/content/"+data[i].id} onClick={function(e) {
        e.preventDefault();
        this.props.onChangePage(e.target.dataset.id);
      }.bind(this)}>{data[i].title}</a></li>
        )

        /*
         lists.push(<li key={data[i].id}> <a  href={"/content/"+data[i].id} onClick={function(id,e) {
        e.preventDefault();
        this.props.onChangePage(id);
      }.bind(this, data[i].id)}>{data[i].title}</a></li>
        )
        */
      }
      return (
      <nav>
      <ul>
        {lists}
      </ul>
      </nav>
      );
    }
  }

  export default TOC;