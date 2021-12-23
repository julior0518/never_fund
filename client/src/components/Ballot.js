import React from 'react';

function Ballot() {
  return (
    <div className="Ballot">
      <h3>Create a ballot</h3>
      <p>
        Use this form to create a product that the community can vote and buy
      </p>
      <form className="displayFormBallot">
        <input
          placeholder="Product Title"
          id="title"
          type="text"
          className="displayFormInput"
        ></input>
        <input
          placeholder="Contract Address"
          id="contract"
          type="text"
          className="displayFormInput"
        ></input>
        <input
          placeholder="Description"
          id="description"
          type="text"
          className="displayFormInputD"
        ></input>
        <button>Create Ballot</button>
      </form>
    </div>
  );
}

export default Ballot;
