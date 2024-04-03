# State Update Batching in React

## How state updates are batched

Renders are not triggered immediately, but scheduled for when the JS engine has some free time. **There is also batching of multiple setState calls in event hanlders**.

```
function App () {
  const[answer, setAnswer] = useState('');
  const[best,setBest]=useState(true);
  const [solved, setSolved] = useState(false);

  console.log("render")

  const reset = function () {
    setAnswer('');
    console.log(answer);
    setBest(true);
    setSolved(false);
  }

  return (
    <div>
    <button onClick={reset}>Reset</button>
    {/* ... */}
    </div>
  )
}

```

In this code example, here we have three pieces of state, define using the the useSate hook, and we also have a button in the user interface.

if there are three state variables being updated in this event handler, then React would re-render three times.
However, this is actucally not how it works.

This is not how React updates multiple pieces of state in the same event handler function. Instead, these state updates will actually get batched into just a state update for the entire event handler.

Updating multiple pieces of state won't immediately cause a re-render for each update. It probably means that they should just represent one new view, and therefore, React only updates the screen once. so we clicked the button, the `render` only output one time.

The fact that React automatically batches in this way yet another performance optimization.

Let's turn our attention to this line of code now, where we reference the answer state variable right after updating it. and what's value of this variable at the point?

We should know that the component state is stored in the fiber tree during the render phase. Now, at this point in the code, the render phase hasn't happened yet. So React is still reading the function line by line to figure out what state needs to be updated, but its hasn't actually updated the state yet. and it also hasn't re-redner yet.
So answer is variable still hold the current state.

In fact, a state update will only be reflected in the state variable after the re-render. For this reason, we say that updating state in React is **asynchronous**. because React does not give us the updated state variable immediately after the set answer call, but only after the re-render has happened.

Hope reading through this article helped you get a fresh perspective to React state updates.
