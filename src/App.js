import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component{

id = 0;

state = {
  information: [{
    keyword:''
  }],
}
  
handleCreate = (data) => {
  const { information } = this.state;
  console.log(data);
  this.state.information.push({...data, id:this.id++});
  this.setState({
    information : information.concat({
    ...data,
    id:this.id++})
  })
}

handleRemove = (id) => {
  const { information }= this.state;
  this.setState({
    information:information.fileter(info => info.id !== id)
  });
}

handleUpdate = (id,data) => {
  const {information} =  this.state;
  this.setState({
    information: information.map(
      info => {
        if(info.id ===  id) {
          return {
            id,
            ...data,

          };
        }
        return info;
      }
    )
  })
}

render() {
  return (
    <div>
      <PhoneForm onCreate={this.handleCreate}/>
      <PhoneInfoList data={this.state.information}
      onRemove={this.handleRemove}
      onUpdate={this.handleUpdate}
      />
    </div>
  );
}
}


export default App;
