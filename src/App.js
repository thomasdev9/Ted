import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import PersonalPage from './components/PersonalPage/PersonalPage';
import Network from './components/Network/Network';
import Pagination from './components/Pagination/Pagination'
import Jobs from './components/Jobs/Jobs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={HomePage}/>
        <Route path='/personal' component={PersonalPage}/>
        <Route path='/network' component={Network} />
        <Route path='/pagination' component={Pagination}/>
        <Route path='/jobs' component={Jobs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
