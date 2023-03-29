import React from "react";

const CreateUserModal = ({ handleSubmitCreate, handleChangeCreate }) => {

  return (
    <form onSubmit={handleSubmitCreate}>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create user
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create User Profile
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
                onChange={handleChangeCreate}
              />
              <input
                placeholder="write your first name here"
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                onChange={handleChangeCreate}
              />
              <input
                placeholder="write your last name here"
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                onChange={handleChangeCreate}
              />
              <input
                placeholder="type email here"
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={handleChangeCreate}
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
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateUserModal;
