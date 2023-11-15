import Parent from "./components/Parent.tsx";

const App = () => {
  return (
    <>
      <h1>This is a props demo!!</h1>
      <Parent title={"This is the parent with a different title"} parents={"Jose & Carmen"}></Parent>
    </>
  );
};

export default App;