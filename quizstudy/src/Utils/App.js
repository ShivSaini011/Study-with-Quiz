import {  BrowserRouter as Router  } from "react-router-dom";
import { ProfileProvider } from "./Context";
import Routing from "./Routes";
import Loading from "./Utils/Loading/index";
import LoaderHelper from "./Utils/Loading/LoaderHelper";
import SocketContextProvider from "./Utils/SocketContext";
function App() {

  return (
    <>
      <ProfileProvider>
        <SocketContextProvider>
          <Router>
            <Routing />
          </Router>
          <Loading ref={ref => LoaderHelper.setLoader(ref)} />
        </SocketContextProvider>
      </ProfileProvider>
    </>
  );
}

export default App;
