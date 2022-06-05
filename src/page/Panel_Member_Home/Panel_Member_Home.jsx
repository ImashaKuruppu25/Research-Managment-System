import "./Panel_Member_Home.css"
import { Link } from "react-router-dom";

export default function Panel_Member_Home(){

    return (
      <div class="b">
        <div class="container1">
          <div class="brand-title">Panel Member</div>
          <div class="inputs1">
            <Link to="/paneldetails">
              <button className="button-21">Panel Details</button>
            </Link>
            <br />
            <br />
            <br />
            <Link to="topicrespond">
              <button className="button-21">Topic Respond</button>
            </Link>
            <br />
            <br />
            <br />
            <Link to="confirmed">
              <button className="button-21">Confirmed Topics</button>
            </Link>
          </div>
        </div>
      </div>
    );
}