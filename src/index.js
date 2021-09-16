import React from "react";
import ReactDOM from "react-dom";
import programing, {myname, name, youtuber} from './App';

ReactDOM.render(


  <>
  <ol>
  <li> programing language</li>
<li> {programing} </li>
<li> {youtuber}</li>
<li>{name()}</li>
<li>{myname()}</li>
  </ol>

  </>, document.getElementById('root')
);