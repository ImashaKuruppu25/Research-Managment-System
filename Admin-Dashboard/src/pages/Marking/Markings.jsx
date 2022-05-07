import React, { useEffect, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Markings.scss";

const Markings = () => {
  const [marking, setMarking] = useState([
    {
      topic: "",
      description: "",
      doc: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    function getMarkingSchemes() {
      axios

        .get("http://localhost:5000/marking/getAllMarkings/")

        .then((res) => {
          console.log(res.data);

          setMarking(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getMarkingSchemes();
  }, []);

  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:5000/marking/deleteMarking/${_id}`)

      .then((res) => {
        alert("Marking Scheme Deleted!");

        navigate("/markings");
      })

      .catch();
  }

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
        {marking.map((marking) => (
          <div className="marking-card">
            <div className="card-header-delete">
              <ImCancelCircle onClick={() => deleteHandler(marking._id)} />
            </div>
            <div className="marking-card-title">{marking.topic}</div>
            <div className="marking-card-description">
              {marking.description}
            </div>
            <div className="marking-card-button">
              <button
                variant="primary"
                onClick={() => window.open(marking.doc)}
              >
                Download Marking Scheme
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Markings;
