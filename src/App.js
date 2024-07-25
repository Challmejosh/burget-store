import Navbar from './Navbar';
import Rectangle from './Rectangle';
import Hero from './Hero';
import Other from './Other';
import Image from './Image';
function App() {
  return (
    <div className="App">
        
        <div className="first">
            <Navbar />
            <Hero />
            <Other />
            <Image />
        </div>


        <div className="second">
            <Rectangle />
        </div>
    </div>
  );
}

export default App;
