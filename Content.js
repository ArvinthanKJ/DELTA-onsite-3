alert("Copied text will be mailed..turn off extension if u dont want to");
console.log("im running");
var com;
window.addEventListener("copy", async (e) => {
  await navigator.clipboard.readText().then((clipText) => (com = clipText));
  console.log("============");
  console.log(com);
  fetch("http://127.0.0.1:3020/", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // this line is important, if this content-type is not set it wont work
    body: JSON.stringify({ com: com }),
  });
});
