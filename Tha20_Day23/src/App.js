import "./styles.css";
import useFetch from "./hooks/useFetch";
import useToggle from "./hooks/useToggle";
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [TextChanged, setTextChanged] = useToggle();
  const canHover = useMediaQuery(
    ['(hover: hover)'],
    [true],
    false
  );
  const { loading, error, data = [] } = useFetch(
    'https://hn.algolia.com/api/v1/search?query=react'
  );
  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="App">
      <h1>Custom Hooks: useToggle</h1>
      <h1>{TextChanged ? "You successfully toggled the button" : ""}</h1>
      <button onClick={setTextChanged}>
        {TextChanged ? "Toggled" : "Click to Toggle"}
      </button><br />
      <div className={canHover ? "canHoverClass" : "defaultClass"}>Hover me!</div><br />
      <div className="links">
        {
          data?.hits?.map(item => (<a key={item.objectID} href={item.url}>{item.title}</a>))
        }
      </div>
    </div>
  );
}

export default App;