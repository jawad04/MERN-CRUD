import React, { Component } from "react";

class CreateTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }
  render() {
    return <div>Welcome to CreateTodos Component</div>;
  }
}
export default CreateTodos;
