import React, { useEffect, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Markings.scss";
import Notifications from "../../components/Notifications";
import ConfirmDialog from "../../components/ConfirmDialog";

const Markings = () => {
  const [marking, setMarking] = useState([
    {
      topic: "",
      description: "",
      doc: "",
    },
  ]);

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  //Confirm Dialog
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

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
    setConfirmDialog({
      ...ConfirmDialog,
      isOpen: false,
    });
    axios
      .delete(`http://localhost:5000/marking/deleteMarking/${_id}`)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: "Marking Scheme Deleted!",
          type: "success",
        });

        setTimeout(window.location.reload.bind(window.location), 2000);
      })

      .catch((err) => {
        setNotify({
          isOpen: true,
          message: "Error Deleting Marking Scheme",
          type: "error",
        });
      });
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
              <ImCancelCircle
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Delete Marking Scheme!",
                    subTitle: "Are you sure you want to delete this Marking ?",
                    onConfirm: () => {
                      deleteHandler(marking._id);
                    },
                  });
                }}
              />
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
      <Notifications notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Markings;
