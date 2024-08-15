import Playground from "./playground";
import { PlaygroundProvider } from "./playground/context/PlaygroundContext";

function App() {
  return (
    <PlaygroundProvider>
      <Playground />
    </PlaygroundProvider>
  );
}

export default App;
