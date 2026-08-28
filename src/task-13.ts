type Action = {
    type: "increment" | "decrement",
}

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(14, { type: "increment" }));
console.log(reducer(21, { type: "decrement" }));
