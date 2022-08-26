//--stage1 variables--
const inputTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;
const originalPlaceholder = inputTag.value;
//--stage2 variables--
const typesizeInput = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector("span.typesize-output");
//--stage 3
const lineHeightInput = document.querySelector(`input[name="line-height"]`);
const lineHeightOutput = document.querySelector("span.line-height");

lineHeightInput.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value;
});

typesizeInput.addEventListener("input", function () {
  outputTag.style.fontSize = typesizeInput.value + "px";
  typesizeOutput.innerHTML = this.value + " px";
});

inputTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = originalText;
  }
});

outputTag.addEventListener("keyup", function () {
  inputTag.value = this.value;
});

// when I change my typeslider, update the text next to it
//change the outputTag font size
