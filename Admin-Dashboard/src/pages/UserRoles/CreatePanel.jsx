import React from "react";
import { Button } from "react-bootstrap";

const CreatePanel = () => {
  return (
    <div>
      {" "}
      <div className="view-group-container" style={{ marginTop: "-25px" }}>
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle" style={{ fontWeight: "200" }}>
              Assign Panel Members
            </h1>
          </div>
          <div className="userContainer">
            <div
              className="userShow"
              style={{ backgroundColor: "white", borderRadius: "25px" }}
            >
              <span className="userShowTitle">Panel Name</span>
              <br />
              <span className="userShowUserTitle">
                Complexity Matrix of Software Development Life Cycle
              </span>
              <br />
              <br />
              <span className="userShowTitle">Description</span>
              <br />
              <span className="userShowUserTitle">
                Here's the panel memebers for this panel group. Panel contains 3
                members and 1 has assigned as a Panel Head! If you need any
                changed to be made, Contact the Admin!
              </span>
              <div className="userShowBottom">
                <span className="userShowTitle">Panel Head</span>
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
              </div>

              <div className="userShowBottom">
                <span className="userShowTitle">Panel Members</span>
                <div className="userShowTop">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOFMe-CzzMAgkPdsGK1wsKLtoF33HXGK98A&usqp=CAU"
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">
                      Prof.Nuwan Kodagoda
                    </span>
                    <span className="userShowUserTitle">nuwank@sliit.lk</span>
                  </div>
                </div>

                <div className="userShowTop">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOFMe-CzzMAgkPdsGK1wsKLtoF33HXGK98A&usqp=CAU"
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">
                      Prof.Nuwan Kodagoda
                    </span>
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
                Assign Panel Members to Panel
              </span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft" style={{ marginRight: "20px" }}>
                  <div className="userUpdateItem">
                    <label>Panel Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Description</label>
                    <textarea
                      type="text"
                      placeholder=""
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Head</label>
                    <select className="userUpdateInput">
                      <option>Select Panel head</option>
                      <option>Nuwan Kodagoda</option>
                      <option>Hasith Deminda</option>
                      <option>Juliet Becker</option>
                      <option>John Doe</option>
                      <option>Anna Becker</option>
                    </select>
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateItem">
                    <label>Panel Member 1</label>
                    <select className="userUpdateInput">
                      <option>Select Panel Member</option>
                      <option>Nuwan Kodagoda</option>
                      <option>Hasith Deminda</option>
                      <option>Juliet Becker</option>
                      <option>John Doe</option>
                      <option>Anna Becker</option>
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Member 2</label>
                    <select className="userUpdateInput">
                      <option>Select Panel Member</option>
                      <option>Nuwan Kodagoda</option>
                      <option>Hasith Deminda</option>
                      <option>Juliet Becker</option>
                      <option>John Doe</option>
                      <option>Anna Becker</option>
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Additional Panel Member</label>
                    <select className="userUpdateInput">
                      <option>Select Additional Panel Member</option>
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
              <Button type="submit" className="userUpdateButton">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePanel;
