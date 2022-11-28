const controls = document.forms[0];
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

const handleStyle = {
  element: btn,
  innerText(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
};

function handleCss() {
  const cssStles =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
  cssText.innerHTML = cssStles;
}

function saveValues(name, value) {
  localStorage[name] = value;
}
function setValeus() {
  const properties = Object.keys(localStorage);
  properties.forEach((property) => {
    handleStyle[property](localStorage[property]);
    controls.elements[property].value = localStorage[property];
  });
  handleCss();
}

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  handleStyle[name](value);
  handleCss();
  saveValues(name, value);
}

controls.addEventListener("change", handleChange);

setValeus();
