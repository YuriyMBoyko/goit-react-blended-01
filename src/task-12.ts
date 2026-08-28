type Callback = (state: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

function callback(state: string): void {
  console.log(state);
}

sendDoneStatus(callback);

