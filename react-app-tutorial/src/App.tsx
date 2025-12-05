import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {isVisible && <Alert onClose={() => setIsVisible(false)}> hello </Alert>}
      <Button color="primary" onClick={() => setIsVisible(true)}>
        This is not a button
      </Button>
    </div>
  );
}

export default App;
