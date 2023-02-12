// errors here

function App() {
const fruitRef = useRef();
const [fruits, setFruits] = useState([]);
const clickHandler = () => {
}
setFruits([...fruits, fruitRef.value]);
const fruitList = fruits.map((fruit) => <li key={fruit}>{fruit}</li>)
return (
<Card className={clasess.input}>
<label htmlFor="username">Fruit name</label>
<input id="username" type="text" ref={fruitRef}/>
<Button type="submit" onClick={clickHandler()}>Add Fruit</Button>
<ul>{fruitList}</ul>
</Card>
);
}
export default App;

// It looks like there are several issues with the code that are preventing it from working as expected.

//     The setFruits call is inside the clickHandler function, but clickHandler is never being invoked. To fix this, you can add the setFruits call inside the clickHandler function so it gets executed when the button is clicked.

//     The onClick prop of the Button component is calling the clickHandler function immediately, instead of passing a reference to the function. To fix this, you can remove the () from the onClick prop, like this: onClick={clickHandler}.

//     The key prop of the list items (li) should be unique for each item in the list. It's better to use the index of the item as the key, or a unique identifier if the items have one.

// Here's the corrected code:

function App() {
    const fruitRef = useRef();
    const [fruits, setFruits] = useState([]);
    const clickHandler = () => {
      setFruits([...fruits, fruitRef.current.value]);
    };
    const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
    return (
      <Card className={clasess.input}>
        <label htmlFor="username">Fruit name</label>
        <input id="username" type="text" ref={fruitRef} />
        <Button type="submit" onClick={clickHandler}>Add Fruit</Button>
        <ul>{fruitList}</ul>
      </Card>
    );
  }

  