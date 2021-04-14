import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route, 
  Link, 
  useParams
}from "react-router-dom";
import BlogPost from './Container/Blogpost';

// export default function GoForIt(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//           <Link to="/practice">Week9</Link>
//           </li>
//           <li>
//             <Link to="/task">Task</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//           <Route exact path="/"><Practice/> </Route>
//           <Route path="/task"><Task/></Route>
//       </Switch>
//       </div>
//     </Router>
//   );
// }

// function Practice(){
//   return(
//     <div>
//       <BlogPost/>
//     </div>
//   )
// }
