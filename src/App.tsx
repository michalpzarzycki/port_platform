import Navbar from './components/Navbar';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
import Article from './components/article/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
            <Route exact strict path="/" component={ProjectsList}/>
            <Route path="/article/:id" component={Article}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
