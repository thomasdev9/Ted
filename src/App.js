import React, {useState, useMemo} from 'react'
import './App.css';
import {BrowserRouter, Route, Link, Switch, Router} from 'react-router-dom';
import HomePage from './components/HomePage';
import PersonalPage from './components/PersonalPage/PersonalPage';
import Network from './components/Network/Network';
import Pagination from './components/Pagination/Pagination'
import Jobs from './components/Jobs/Jobs'
import Messages from './components/Messages/Messages'
import Notifications from './components/Notifications/Notifications';
import PersonalData from './components/PersonalData/PersonalData';
import Settings from './components/Settings/Settings';
import { UserContext } from './components/Contexts/UseContext';

function App(){

  const [isAuth,setIsAuth] = useState(false)
  const [email, setEmail] = useState('')

  const value1 = useMemo(() =>  ({isAuth, setIsAuth}) , [isAuth])
  const value2 = useMemo(() => ({email, setEmail}), [email])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{value1:value1, value2: value2}}>
          <Route path='/' exact component={HomePage}/>
        </UserContext.Provider>
        <UserContext.Provider value={{value1:value1, value2: value2}}>
          <Route path='/personal' component={PersonalPage}/>
        </UserContext.Provider>
        <UserContext.Provider value={{value1:value1, value2: value2}}>
          <Route path='/network' component={Network} />
        </UserContext.Provider>
        <Route path='/pagination' component={Pagination}/>
        <Route path='/jobs' component={Jobs}/>
        <Route path='/messages' component={Messages} />
        <UserContext.Provider value={{value1:value1, value2: value2}}>
          <Route path='/notifications' component={Notifications} />
        </UserContext.Provider>
        <Route path='/data' component={PersonalData} />
        <Route path='/settings' component={Settings}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
