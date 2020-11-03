import React, { Component, Fragment } from 'react';
import './App.css';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import Control from './components/Control' 
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'

class App extends Component {
   constructor(props) {

     super(props)
     this.max_content_id = 3;
     this.state = {
       mode:'welcome', 
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

getReadContent() {

  for(var data of this.state.contents) {
    if(data.id === this.state.selected_content_id) {
      return data;
    }
  }
}


  getContent() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title= this.state.welcome.title;
      _desc= this.state.welcome.desc;
      _article=  <ReadContent title={_title} desc={_desc} ></ReadContent>
    }else if(this.state.mode === 'read') {

        var _content = this.getReadContent();
    

        _article = <ReadContent title={_content.title} desc={_content.desc} ></ReadContent>


      // for(var i = 0; i<this.state.contents.length; i++) {
      //   var data = this.state.contents[i];
      //   if(data.id === this.state.selected_content_id) {
         
      //  _title= data.title;
      //  _desc = data.desc;
      //   }
      // }
    }else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc) {

        this.max_content_id += 1;

        // this.state.contets.push({id:this.max_content_id, title:_title, desc:_desc});
        // this.setState(this.state.contents);
        //shouldComponent 메소드를 사용할 수 없음. newProps의 값과 이전 Props의 값이 같음.
        //원본 수정X 복제본 수정O

      //   var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
      //  this.setState({contents:_contents})

       var newContents = Array.from(this.state.contents)
       //객체일때 Object.assign(객체)로 하면 됨..
      newContents.push({id:this.max_content_id, title:_title, desc:_desc});
      this.setState({contents: newContents})

        //add Content to this.state.contents
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent  data={_content} onSubmit={function(_id,_title,_desc) {
        // this.state.contets.push({id:_id, title:_title, desc:_desc});
        // this.setState(this.state.contents);
        //shouldComponent 메소드를 사용할 수 없음. newProps의 값과 이전 Props의 값이 같음.
        //원본 수정X 복제본 수정O

      //   var _contents = this.state.contents.concat({id:_id, title:_title, desc:_desc});
      //  this.setState({contents:_contents})

       var UpdateContents = Array.from(this.state.contents)
       //객체일때 Object.assign(객체)로 하면 됨..
        var UpdateObject = UpdateContents.find((element) => {
        if(element.id === _id) {
          return true;
        }
      });
UpdateObject.title = _title;
UpdateObject.desc = _desc;

      

      this.setState({contents: UpdateContents})

        //add Content to this.state.contents
      }.bind(this)}></UpdateContent>
    }
    return _article;

  }

  render() {
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
         if(_mode === 'delete') {
          if(window.confirm('continue?')) {

            var _contents = Array.from(this.state.contents)

            for(var i = 0; i<_contents.length; i++) {
              if(_contents[i].id === this.state.selected_content_id) {
               _contents.splice(i, 1);
              }
            }
            this.setState({contents:_contents, mode:'welcome'})
          }
         }else {
          this.setState({
            mode: _mode  
          })
         }


         
       }.bind(this)}></Control>
       {this.getContent()}
      </div>
    )
  }
}



export default App;