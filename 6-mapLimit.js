// Implement mapLimit, which is a utility function that produces a list of outputs by mapping each input through an asynchronous iteratee function. The provided limit dictates how many operations can occur at once.

// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  let outputArr = [];
  let onFinish = (id) => (output) => {
    outputArr.push(output);
    if (outputArr.length === inputs.length) {
      callback(outputArr);
    }
  };
  for (let i = 0; i < inputs.length; i = i + limit) {
    inputs
      .slice(i, i + limit)
      .forEach((item) => iterateeFn(item, onFinish(item)));
  }
}

//example:
// mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
//   console.log("output", allResults); // ["User1", "User2", "User3", "User4", "User5"]
// });
