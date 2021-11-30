import './App.css';
import Webpages from './webpages';
import Maintenance from './webpages/maintenance';
function App() {
  // console.log(process.env.REACT_APP_MAINTENANCE);
  return (
    <div>
      {process.env.REACT_APP_MAINTENANCE === 'true' ? <Maintenance/> : <Webpages/>}
    </div>
  );
}
export default App;