import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TodosList from "./components/todo-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";

import "bootstrap/dist/css/bootstrap.min.css";
import { tsConditionalType } from "@babel/types";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="container">
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <a
      //         className="navbar-brand"
      //         href="https://google.com"
      //         target="_blank"
      //       >
      //         <img
      //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
      //           width="30"
      //           height="30"
      //           alt="JustCoding.com"
      //         />
      //       </a>
      //       <Link to="/" className="navbar-brand">
      //         {" "}
      //         MERN Stack
      //       </Link>
      //       <div className="collapse nav-collapse">
      //         <ul className="navbar-nav mr-auto">
      //           <li className="navbar-item">
      //             <Link to="/" className="nav-link">
      //               Todos
      //             </Link>
      //           </li>
      //           <li className="navbar-item">
      //             <Link to="/create" className="nav-link">
      //               Create to Do
      //             </Link>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //     <Route path="/" exact component={TodosList} />
      //     <Route path="/edit/:id" component={EditTodo} />
      //     <Route path="/create" component={CreateTodo} />
      //   </div>
      // </Router>

      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://codingthesmartway.com"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
                width="30"
                height="30"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}
export default App;
