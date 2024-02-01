// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  /*
  const items = ["Mumbai", "Delhi", "Bangluru", "Goa"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  */
  return (
    /*
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
*/
    <div>
      <Alert>
        Hello<samp>world</samp>
      </Alert>
    </div>
  );
}

export default App;
