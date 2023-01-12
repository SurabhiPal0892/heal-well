import './App.css';

import {Header} from './components/header'
import {Nav} from './components/nav'
import {Section} from './components/section'
import {Footer} from './components/footer'


function App() {
  return (
    <div className="container">
       <Header/>
       <Nav />
       <Section/>
       <Footer/>
    </div>
  );
}

export default App;
