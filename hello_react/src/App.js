import React, { Component, Fragment } from 'react';
import './App.css';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import Control from './components/Control' 

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       mode:'read',
       selected_content_id:2,
       welcome:{title:'Welcome', desc:"Hello, React!!"},
       subject:{title:'WEB', sub:"World Wide Web!"},
       section: 0,
       contents:[
         {id:1, title:'HTML', desc:'HTML is for information'},
         {id:2, title:'CSS', desc:'CSS is for design'},
         {id:3, title:'JS', desc:'JS is for interactive'}
       ]
     }
   }


  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title= this.state.welcome.title;
      _desc= this.state.welcome.desc;

    }else if(this.state.mode === 'read') {
      for(var i = 0; i<this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
         
       _title= data.title;
       _desc = data.desc;
        }
      }
    }
    return (
      <div className="App">
       <Subject 
       title={this.state.subject.title}
       sub={this.state.subject.sub}
       onChangePage={function(){
         this.setState({mode:'welcome'});
       }.bind(this)}
       >
       </Subject>
       
     {/*<header>    
     <h1><a href="/" onClick={function(e) {
       console.log(e);
       e.preventDefault();
       //this.state.mode = 'welcome';
       this.setState({
         mode:'welcome'
       });
     }.bind(this)}>{this.state.subject.title}</a></h1>
      {this.state.subject.sub}
    </header>*/}
        <TOC data={this.state.contents} onChangePage={function(id) {
          this.setState({
            mode: 'read',
            selected_content_id:Number(id)
          })
        }.bind(this)}></TOC>
       <Control onChangeMode={function(_mode) {
         this.setState({
           mode: _mode
         })
       }.bind(this)}></Control>
        <ReadContent title={_title} desc={_desc} ></ReadContent>
      </div>
    )
  }
}



export default App;