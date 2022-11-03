import "./App.css"; // use this to code css and make a amazing UI
import { useEffect, useState } from "react";

function App() {
  /**
   * init a state
   * time : name of state => can custom with any name you like
   * setTime: a function use to update `time`, UI use this state will update automate
   * useState: basic hook
   */
  const [time, setTime] = useState(0);

  /**
   * @param effect — Imperative function that can return a cleanup function
   * @param deps — If present, effect will only activate if the values in the list change.
   */
  useEffect(() => {
    //TODO: use setinterval to update `time` by func `setTime` every 1000ms
  }, []);

  return (
    <div className="App">
      <div>time is: </div>
      <div>{time}</div>
    </div>
  );
}

export default App;
