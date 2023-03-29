import React from "react";

const EditModal = ({ handleChange, handleSubmit, newUser, id }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#abc-${id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`abc-${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit User Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                placeholder="Your title"
                type="text"
                name="title"
                id="title"
                className="form-control"
                onChange={handleChange}
                value={newUser.title}
              />
              <input
                placeholder="write your first name here"
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                onChange={handleChange}
                value={newUser.firstName}

              />
              <input
                placeholder="write your last name here"
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                onChange={handleChange}
                value={newUser.lastName}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditModal;
