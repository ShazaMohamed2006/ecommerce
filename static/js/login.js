const btn = document.getElementById("submit-btn");

btn.addEventListener('mouseover', () => {
  btn.style.position = 'absolute';
  btn.style.right = '200px';
});

const div = document.querySelectorAll("div");

div.forEach((child) => {
  child.addEventListener('mouseover', () => {
    btn.style.position = 'static';
    btn.style.right = '0';
  })
})