import React, { useState } from 'react';

function Ballot() {
  const [test, settest] = useState({});

  function whatever(e) {
    e.preventDefault();
    console.log(`pressed`);
  }

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
          onChange={console.log(1)}
        ></input>
        <input
          placeholder="Contract Address"
          id="contract"
          type="text"
          className="displayFormInput"
          onChange={console.log(2)}
        ></input>
        <input
          placeholder="Description"
          id="description"
          type="text"
          className="displayFormInputD"
          onChange={console.log(3)}
        ></input>
        <button onClick={whatever}>Create Ballot</button>
      </form>
    </div>
  );
}

export default Ballot;
