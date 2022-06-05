import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Student_Topic_Rejister from "./page/Student_Topic_Rejister/Student_Topic_Rejister";
import Panel_Member_View from "./page/Panel_Member_View/Panel_Member_View";
import StudentRespondNotification from "./page/StudentResopndNotification/StudentRespondNotification";
import Panel_Member_Home from "./page/Panel_Member_Home/Panel_Member_Home";
import Panel_Member_details from "./page/Panel_Members_details/Panel_Members_details";
import Confirmed_Topics from "./page/Confirmed_Topics/Confirmed_Topics";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Student_Topic_Rejister} exact />
          <Route path="/topicrespond" component={Panel_Member_View} exact />
          <Route
            path="/notification"
            component={StudentRespondNotification}
            exact
          />
          <Route path="/panel" component={Panel_Member_Home} exact />
          <Route path="/paneldetails" component={Panel_Member_details} exact />
          <Route path="/confirmed" component={Confirmed_Topics} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
