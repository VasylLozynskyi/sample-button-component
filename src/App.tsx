import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import ButtonGroup from "./Components/ButtonGroup/ButtonGroup";

function App() {
  const [idActive, setIdActive] = useState("");
  const [switchOn, setSwitchOn] = useState(false);

  const handleClick = (e: any) => {
    setIdActive(e.target.id);
  };

  return (
    <div className="App">
      <aside>
        <h1>Samples</h1>
   
      </aside>
      <main>
        <section>
          <h2>button active </h2>
          <Button
            id={"1"}
            onClick={(e: any) => {
              handleClick(e);
              console.log("You clicked on the pink circle!");
            }}
            // active don't work without IdActive
            active
            idActive={idActive}
            // disabled - stop button
            // disabled
            // children = "I'm a pink circle!"
          >
            I'm a pink circle!
          </Button>
          <Button
            id={"2"}
            onClick={(e: any) => {
              handleClick(e);
              console.log("You clicked on the pink circle!");
            }}
            //idActive={idActive}
            //  disabled
            // children = "I'm a pink circle!"
          >
            I'm a pink circle!
          </Button>
        </section>
        <section>
          <h2>button disabled </h2>
          <Button
            id={"1"}
            onClick={(e: any) => {
              handleClick(e);
              console.log("You clicked on the pink circle!");
            }}
            // active don't work without IdActive
            // active
            idActive={idActive}
            // disabled - stop button
            disabled
            // children = "I'm a pink circle!"
          >
            I'm a pink circle!
          </Button>
          <Button
            id={"2"}
            onClick={(e: any) => {
              handleClick(e);
              console.log("You clicked on the pink circle!");
            }}
            //idActive={idActive}
            //  disabled
            // children = "I'm a pink circle!"
          >
            I'm a pink circle!
          </Button>
        </section>
        <section>
          <h2>button group</h2>
          <h2><span>1. Horizontal button group:</span></h2>
        <ButtonGroup>
          <Button id="3" active>First</Button>
          <Button id="4">Middle</Button>
          <Button id="5">Last</Button>
        </ButtonGroup>

        <h2><span>2. Vertical button group:</span></h2>
        <ButtonGroup vertical>
          <Button id="6">First</Button>
          <Button id="7" active>Middle</Button>
          <Button id="8">Last</Button>
        </ButtonGroup>

        <h2><span>3. Switcher button group:</span></h2>
        <ButtonGroup>
          <Button id="9" onClick={() => setSwitchOn(true)} active={switchOn}>ON</Button>
          <Button id="10" onClick={() => setSwitchOn(false)} active={switchOn}>OFF</Button>
        </ButtonGroup>
        </section>
      </main>
    </div>
  );
}

export default App;
