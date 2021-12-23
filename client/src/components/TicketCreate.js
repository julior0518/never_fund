import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../Globals';

function ticketCreate() {
  function handleChange() {}

  return (
    <div className="TicketCreate">
      <h3>Create a ballot</h3>
      <p>
        Use this form to create a product that the community can vote and buy
      </p>
      <form className="displayFormBallot">
        <input
          onChange={handleChange}
          placeholder="Product Title"
          id="productTitle"
          type="text"
          className="displayFormInput"
        ></input>
        <input
          onChange={handleChange}
          placeholder="Contract Address"
          id="productContract"
          type="text"
          className="displayFormInput"
        ></input>
        <input
          onChange={handleChange}
          placeholder="Description"
          id="productDescription"
          type="text"
          className="displayFormInputD"
        ></input>
        <button>Create Ballot</button>
      </form>
    </div>
  );
}

export default ticketCreate;
