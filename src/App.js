import Header from "./components/treeComponents/Header"
import Footer from "./components/treeComponents/Footer"
import './App.css';
import Home from "./components/Home"
import { BrowserRouter as Router, Switch,Route} from "react-router-dom"
import SearchPage from "./components/treeComponents/SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>


        <Switch>
            <Route path="/search">
                <SearchPage></SearchPage>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
            

            

        </Switch>


        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
