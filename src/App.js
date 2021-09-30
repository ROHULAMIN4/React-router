
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import USer from './component/User/USer';
import About from './component/About/About';
import Notfound from './component/NotFound/Notfound';
import FriendDetails from './component/FriendDetails/FriendDetails';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
      
         <Switch>
         
           <Route exact path='/'>
             <Home></Home>

           </Route>
           <Route exact path='/home'>
             <Home></Home>

           </Route>
           <Route path='/user'>
           <USer></USer>

           </Route>
           <Route path="/friend/:userid">
             <FriendDetails></FriendDetails>
           </Route>
           <Route path='/about'>
           <About></About>

           </Route>
           <Route exact path='*'>
             <Notfound></Notfound>
           </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
