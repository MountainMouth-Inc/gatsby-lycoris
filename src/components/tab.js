import React from "react";

const Tab = ({ children }) => (
  <div class="row flex-spaces tabs">
    <input id="tab1" type="radio" name="tabs" checked />
    <label for="tab1">Tab 1</label>

    <input id="tab2" type="radio" name="tabs" />
    <label for="tab2">Tab 2</label>

    <input id="tab3" type="radio" name="tabs" />
    <label for="tab3">Tab 3</label>

    <input id="tab4" type="radio" name="tabs" />
    <label for="tab4">Tab 4</label>

    <div class="content" id="content1">
      <p>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa...</p>
      <p>Brisket meatball turkey short loin boudin leberkas meatloaf...</p>
    </div>
    <div class="content" id="content2">
      <p>Bacon ipsum dolor sit amet landjaeger sausage brisket...</p>
    </div>
    <div class="content" id="content3">
      <p>Bacon ipsum dolor sit amet beef venison beef ribs kielbasa...</p>
      <p>Brisket meatball turkey short loin boudin leberkas meatloaf...</p>
    </div>
    <div class="content" id="content4">
      <p>Bacon ipsum dolor sit amet landjaeger sausage brisket...</p>
    </div>
  </div>
);

export default Tab;
