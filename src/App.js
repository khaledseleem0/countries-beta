import {BrowserRouter as Router  , Route , Switch} from 'react-router-dom'
import Main from './components/main' 
import Info from './components/info'
import Nav from './components/nav' 
import {Body} from './styles/mainStyle';
import { createContext,useState } from 'react'
import { lightTheme , darkTheme} from './styles/themes';
import "./style.css";
export const ThemeMode  = createContext();
function App() {
  const [theme, setTheme] = useState('light')
  return (
   <ThemeMode.Provider value={[theme, setTheme]}>
  <Router>
     <Body body={theme  === 'light' ? lightTheme.body : darkTheme.body}>
     <Nav/>
     <Switch>
     <Route path="countries-beta/home" component={Main}></Route>
     <Route path="countries-beta/countries/:country" component={Info}></Route>
     </Switch>
      </Body>
   </Router>
    </ThemeMode.Provider>

 
  );
}

export default App;
