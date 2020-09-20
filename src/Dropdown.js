import React from "react";
import { Dropdown } from "semantic-ui-react";

const championOptions = [
  { text: "Aatrox" },
  { text: "Ahri" },
  { text: "Akali" },
  { text: "Alistar" },
  { text: "Amumu" },
  { text: "Anivia" }
];

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder="Select a Champion"
    fluid
    search
    selection
    options={championOptions}
  />
);

export default DropdownExampleSearchSelection;
