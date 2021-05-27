import React from "react";

const UploadGlove = () => {
  //state? handlers?
  return (
    <form>
      <div class="grid-container">
        <div class="medium-6 cell">
          <label>
            Title
            <input type="text" placeholder=".medium-6.cell" />
          </label>
        </div>
        <div class="medium-6 cell">
          <fieldset class="large-5 cell">
            <legend>Hand</legend>
            <input
              type="radio"
              name="hand"
              value="Left"
              id="leftHand"
              required
            />
            <label for="leftHand">Left</label>
            <input type="radio" name="hand" value="Right" id="rightHand" />
            <label for="rightHand">Right</label>
          </fieldset>
        </div>
        <label>
          Description
          <textarea placeholder="None"></textarea>
        </label>
        <label for="exampleFileUpload" class="button">
          Upload Image
        </label>
        <input type="file" id="exampleFileUpload" class="show-for-sr"></input>
        <button class="button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UploadGlove;
