let btn = document.getElementById("addBtn");
let progressBar = document.querySelector(".progress");
let promise = Promise.resolve(); // when successful

btn.addEventListener("click", () => {
  // Create a copy/clone of node(progress bar), store this clone in a var
  // style the clone-- change the display to block

  let clonedProgress = progressBar.cloneNode(true);
  clonedProgress.style.display = "block";
  // JS Promises do two things-- they produce code and consume code.
  promise = promise.then(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          clonedProgress.querySelector(".bar").classList.add("loading");
          setTimeout(() => {
            resolve();
          }, 1000);
        }, 0);
      })
  );
  document.body.appendChild(clonedProgress);
});
