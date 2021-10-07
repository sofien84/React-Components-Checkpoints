import './App.css';
import ProfilePhoto from "./components/Profile/ProfilePhoto.js"
import FullName from "./components/Profile/FullName.js"
import Adress from "./components/Profile/Address.js"

function App() {
  return (
    <div className="App">
         <div className="Profile">
          <ProfilePhoto/>
          <div className="Name"> 
            <FullName/>
           <div className="Addres">
            <Adress/>
          </div>
          </div>
        </div>
          
    </div>
  );
}

export default App;
