import React from "react";

const Contact = () => {
  return (
    <form>
      <div class="grid-container">
        <div class="medium-6 cell">
          <label>
            Email
            <input type="text" placeholder="email" />
          </label>
        </div>
        <div class="medium-6 cell">
          <label>
            Content
            <textarea placeholder="Content"></textarea>
          </label>
        </div>
        <button class="button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
