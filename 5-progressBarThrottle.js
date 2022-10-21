let btn = document.querySelector("button");
let progressBar = document.querySelector(".progress");
let promise = Promise.resolve();
btn.addEventListener("click", () => {
  let clonedProgress = progressBar.cloneNode(true);
  clonedProgress.style.display = "block";

  promise = promise.then(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          clonedProgress.querySelector(".bar").classList.add("loading");
          setTimeout(() => {
            resolve();
          }, 2000);
        }, 0);
      })
  );
  document.body.appendChild(clonedProgress);
});
