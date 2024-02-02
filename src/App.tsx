// import ListGroup from "./components/ListGroup";
import Button from "./Button";
// import Alert from "./components/Alert";
function App() {
  /*
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
    )
*/

  /*
  return (
    <div>
      <Alert>
        Hello<samp>world</samp>
      </Alert>
    </div>
  );
  */

  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        MY Button
      </Button>
    </div>
  );
}

export default App;
