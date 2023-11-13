import React from "react";

export default function AddTraining() {
  return (
    <>
      <h1>Add Trainer Form</h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="John"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Middle Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="The"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Doe"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Extension Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Doe"
        />
      </div>
      <button className="btn btn-primary">Primary</button>
    </>
  );
}
