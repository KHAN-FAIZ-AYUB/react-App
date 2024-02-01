import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Mumbai", "Delhi", "Bangluru", "Goa"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
