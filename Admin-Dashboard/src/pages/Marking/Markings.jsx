import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Markings.scss";

const Markings = () => {
  return (
    <>
      <div className="button-container-upload" style={{ maxWidth: "250px" }}>
        <Link to="/markings/create">
          <button className="upload-marking">
            <MdOutlineCloudUpload style={{ fontSize: "32px" }} />
            <span>Upload Marking Scheme</span>
          </button>
        </Link>
      </div>
      <br />

      <div className="marking-container">
        <div className="marking-card">
          <div className="card-header-delete">
            <ImCancelCircle />
          </div>
          <div className="marking-card-title">
            Software Development Life Cycle
          </div>
          <div className="marking-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi labore a dolore. Saepe quas amet nostrum! Dignissimos sunt
            quia ut ullam nam atque nulla eligendi assumenda mollitia tempora.
            Dolorem.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            soluta odit assumenda sunt. Nostrum, corporis.
          </div>
          <div className="marking-card-button">
            <button
              variant="primary"
              onClick={() =>
                window.open("http://www.africau.edu/images/default/sample.pdf")
              }
            >
              Download Marking Scheme
            </button>
          </div>
        </div>

        <div className="marking-card">
          <div className="card-header-delete">
            <ImCancelCircle />
          </div>
          <div className="marking-card-title">
            Software Development Life Cycle
          </div>
          <div className="marking-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            veritatis?
          </div>
          <div className="marking-card-button">
            <button
              variant="primary"
              onClick={() =>
                window.open("http://www.africau.edu/images/default/sample.pdf")
              }
            >
              Download Marking Scheme
            </button>
          </div>
        </div>

        <div className="marking-card">
          <div className="card-header-delete">
            <ImCancelCircle />
          </div>
          <div className="marking-card-title">
            Software Development Life Cycle
          </div>
          <div className="marking-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi labore a dolore. Saepe quas amet nostrum! Dignissimos sunt
            quia ut ullam nam atque nulla eligendi assumenda mollitia tempora.
            Dolorem.
          </div>
          <div className="marking-card-button">
            <button
              variant="primary"
              onClick={() =>
                window.open("http://www.africau.edu/images/default/sample.pdf")
              }
            >
              Download Marking Scheme
            </button>
          </div>
        </div>

        <div className="marking-card">
          <div className="card-header-delete">
            <ImCancelCircle />
          </div>
          <div className="marking-card-title">
            Software Development Life Cycle
          </div>
          <div className="marking-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi labore a dolore. Saepe quas amet nostrum! Dignissimos sunt
            quia ut ullam nam atque nulla eligendi assumenda mollitia tempora.
            Dolorem.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            atque officia eligendi at repellendus placeat soluta? Totam,
            cupiditate iure sunt harum veniam, odit rerum quod magnam pariatur
            praesentium at necessitatibus.
          </div>
          <div className="marking-card-button">
            <button
              variant="primary"
              onClick={() =>
                window.open("http://www.africau.edu/images/default/sample.pdf")
              }
            >
              Download Marking Scheme
            </button>
          </div>
        </div>

        <div className="marking-card">
          <div className="card-header-delete">
            <ImCancelCircle />
          </div>
          <div className="marking-card-title">
            Software Development Life Cycle
          </div>
          <div className="marking-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi labore a dolore. Saepe quas amet nostrum! Dignissimos sunt
            quia ut ullam nam atque nulla eligendi assumenda mollitia tempora.
            Dolorem.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            atque officia eligendi at repellendus placeat soluta? Totam,
            cupiditate iure sunt harum veniam, odit rerum quod magnam pariatur
            praesentium at necessitatibus.
          </div>
          <div className="marking-card-button">
            <button
              variant="primary"
              onClick={() =>
                window.open("http://www.africau.edu/images/default/sample.pdf")
              }
            >
              Download Marking Scheme
            </button>
          </div>
        </div>

        <div className="marking-card">
          <div className="card-header-delete">
            <ImCancelCircle />
          </div>
          <div className="marking-card-title">
            Software Development Life Cycle
          </div>
          <div className="marking-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi labore a dolore. Saepe quas amet nostrum! Dignissimos sunt
            quia ut ullam nam atque nulla eligendi assumenda mollitia tempora.
            Dolorem.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            atque officia eligendi at repellendus placeat soluta? Totam,
            cupiditate iure sunt harum veniam, odit rerum quod magnam pariatur
            praesentium at necessitatibus.
          </div>

          <div className="marking-card-button">
            <button
              variant="primary"
              onClick={() =>
                window.open("http://www.africau.edu/images/default/sample.pdf")
              }
            >
              Download Marking Scheme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Markings;
