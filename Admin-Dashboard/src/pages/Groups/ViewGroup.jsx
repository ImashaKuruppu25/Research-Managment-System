import React from "react";
import "./ViewGroup.scss";
import { Button } from "react-bootstrap";

const ViewGroup = () => {
  return (
    <div className="view-group-container" style={{ marginTop: "-25px" }}>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle" style={{ fontWeight: "200" }}>
            Group Details
          </h1>
        </div>
        <div className="userContainer">
          <div
            className="userShow"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <span className="userShowTitle">Research Topic</span>
            <br />
            <span className="userShowUserTitle">
              Complexity Matrix of Software Development Life Cycle
            </span>
            <div className="userShowBottom">
              <span className="userShowTitle">Group Members</span>
              <div className="userShowTop">
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Hasith Deminda</span>
                  <span className="userShowUserTitle">
                    demindahasith@gmail.com
                  </span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cqFuNuQc-evg5bzAK6Ro5ObXPyuPf4EgYQ&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Juliet Becker</span>
                  <span className="userShowUserTitle">hdd@sgx.com</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">John Doe</span>
                  <span className="userShowUserTitle">johnd@abc.com</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna Becker</span>
                  <span className="userShowUserTitle">anna@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="userShowBottom">
              <span className="userShowTitle">Supervisor</span>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOFMe-CzzMAgkPdsGK1wsKLtoF33HXGK98A&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Prof.Nuwan Kodagoda</span>
                  <span className="userShowUserTitle">nuwank@sliit.lk</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="userUpdate"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <span className="userUpdateTitle" style={{ fontWeight: "400" }}>
              Update Group Details
            </span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Group Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Research Topic</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 1</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 2</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateItem">
                  <label>Member 3</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 4</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 5</label>
                  <input
                    type="text"
                    placeholder="Add Extra Member If Any"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Supervisor</label>
                  <select className="userUpdateInput">
                    <option>Select Supervisor</option>
                    <option>Nuwan Kodagoda</option>
                    <option>Hasith Deminda</option>
                    <option>Juliet Becker</option>
                    <option>John Doe</option>
                    <option>Anna Becker</option>
                  </select>
                </div>
              </div>
            </form>
            <br />
            <Button className="userUpdateButton">Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGroup;
