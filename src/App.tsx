import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Mumbai", "Delhi", "Bangluru", "Goa"];

  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
