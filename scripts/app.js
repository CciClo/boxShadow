const horizontalOffsetText = document.querySelector(".horizontal-offset-text");
const horizontalOffsetRange = document.querySelector(".horizontal-offset-range");

const verticalOffsetText = document.querySelector(".vertical-offset-text")
const verticalOffsetRange = document.querySelector(".vertical-offset-range");

const blurRadiusText = document.querySelector(".blur-radius-text");
const blurRadiusRange = document.querySelector(".blur-radius-range");

const spreadRadiusText = document.querySelector(".spread-radius-text");
const spreadRadiusRange = document.querySelector(".spread-radius-range");

const insetCheckBox = document.querySelector(".inset-chec-box");

const heckboxPaint = document.querySelector("#checkbox-paint");
const paintOn = document.querySelector(".paint-on");
const paintOff = document.querySelector(".pain-off");


const generatedStyle = document.querySelector(".generated-style");

const containerBackgroundColorText = document.querySelector(".container-background-color-text");
const containerBackgroundColorPaint = document.querySelector(".container-background-color-paint");
const mainFond = document.querySelector("main")

const borderRadiusBoxText = document.querySelector(".border-radius-box-text");
const borderRadiusBoxRange = document.querySelector(".border-radius-box-range");

const boxWidthText = document.querySelector(".box-width-text");
const boxWidthRange = document.querySelector(".box-width-box-range");

const boxHeightText = document.querySelector(".box-height-text");
const boxHeightRange = document.querySelector(".box-height-range");

const boxColorText = document.querySelector(".box-color-text");
const boxColorPaint = document.querySelector(".box-color-paint");

const displayBoxShadow = document.querySelector(".display-box-shadow");
let boxShadowDisplay = [10,-10,10,2,"rgb(2,2,2)"];
let boxFeatures = [200,200,10,"rgb(255, 255, 255)"];
let inset = false;
let paint = true;



horizontalOffsetRange.addEventListener("input", (e) => {
  horizontalOffsetText.value = e.target.value;
  boxShadowDisplay[0] = e.target.value;
});
horizontalOffsetText.addEventListener("input", (e) => {
  horizontalOffsetRange.value = e.target.value;
  boxShadowDisplay[0] = e.target.value;
});

verticalOffsetRange.addEventListener("input", (e) => {
  verticalOffsetText.value = e.target.value;
  boxShadowDisplay[1] = e.target.value;
});
verticalOffsetText.addEventListener("input", (e) => {
  verticalOffsetRange.value = e.target.value;
  boxShadowDisplay[1] = e.target.value;
});

blurRadiusRange.addEventListener("input", (e) => {
  blurRadiusText.value = e.target.value;
  boxShadowDisplay[2] = e.target.value;
});
blurRadiusText.addEventListener("input", (e) => {
  blurRadiusRange.value = e.target.value;
  boxShadowDisplay[2] = e.target.value;
});

spreadRadiusRange.addEventListener("input", (e) => {
  spreadRadiusText.value = e.target.value;
  boxShadowDisplay[3] = e.target.value;
});
spreadRadiusText.addEventListener("input", (e) =>{
  spreadRadiusRange.value = e.target.value;
  boxShadowDisplay[3] = e.target.value;
});

insetCheckBox.addEventListener("input", (e) => {
  if (e.target.checked == true) {
    inset = true;
  } else {
    inset = false;
  }
});

heckboxPaint.addEventListener("input", (e) => {
  if (e.target.checked == true) {
    paint = true;
  } else {
    paint = false;
  }
});
paintOn.addEventListener("input", (e) => {
  boxShadowDisplay[4] = hexToRGB(e.target.value);
  paintOff.value = boxShadowDisplay[4];
});
paintOff.addEventListener("input", (e) => {
  boxShadowDisplay[4] = e.target.value;
  paintOn.value = rgb_to_hex(boxShadowDisplay[4]);
});

containerBackgroundColorPaint.addEventListener("input", (e) => {
  containerBackgroundColorText.innerHTML = hexToRGB(e.target.value);
  mainFond.style.backgroundColor = hexToRGB(e.target.value);
});

borderRadiusBoxRange.addEventListener("input", (e) => {
  borderRadiusBoxText.value = e.target.value;
  boxFeatures[2] = e.target.value;
});
borderRadiusBoxText.addEventListener("input", (e) => {
  borderRadiusBoxRange.value = e.target.value;
  boxFeatures[2] = e.target.value;
});

boxWidthRange.addEventListener("input", (e) => {
  boxWidthText.value = e.target.value;
  boxFeatures[0] = e.target.value;
});
boxWidthText.addEventListener("input", (e) => {
  boxWidthRange.value = e.target.value;
  boxFeatures[0] = e.target.value;
});

boxHeightRange.addEventListener("input", (e) => {
  boxHeightText.value = e.target.value;
  boxFeatures[1] = e.target.value;
});
boxHeightText.addEventListener("input", (e) => {
  boxHeightRange.value = e.target.value;
  boxFeatures[1] = e.target.value;
});

boxColorPaint.addEventListener("input", (e) => {
  boxFeatures[3] = hexToRGB(e.target.value);
  boxColorText.innerHTML = boxFeatures[3];
});



addEventListener("input", () => {
  if (inset) {
    displayBoxShadow.style.boxShadow = `inset ${boxShadowDisplay[0]}px ${boxShadowDisplay[1]}px ${boxShadowDisplay[2]}px ${boxShadowDisplay[3]}px ${boxShadowDisplay[4]}`;
    generatedStyle.innerHTML = `box-shadow: inset ${boxShadowDisplay.join("px ")}`
  } else {
    displayBoxShadow.style.boxShadow = `${boxShadowDisplay[0]}px ${boxShadowDisplay[1]}px ${boxShadowDisplay[2]}px ${boxShadowDisplay[3]}px ${boxShadowDisplay[4]}`;
    generatedStyle.innerHTML = `box-shadow: ${boxShadowDisplay.join("px ")}`
  }
  if (paint) {
    paintOn.style.display = "block";
    paintOff.style.display = "none";
  }else {
    paintOn.style.display = "none";
    paintOff.style.display = "block";
  }

  displayBoxShadow.style.width = `${boxFeatures[0]}px`;
  displayBoxShadow.style.height = `${boxFeatures[1]}px`;
  displayBoxShadow.style.borderRadius = `${boxFeatures[2]}px`;
  displayBoxShadow.style.backgroundColor = boxFeatures[3];
});


window.addEventListener("load", () => {
  displayBoxShadow.style.boxShadow = `${boxShadowDisplay[0]}px ${boxShadowDisplay[1]}px ${boxShadowDisplay[2]}px ${boxShadowDisplay[3]}px ${boxShadowDisplay[4]}`;
  
  horizontalOffsetText.value = boxShadowDisplay[0];
  horizontalOffsetRange.value = boxShadowDisplay[0];

  verticalOffsetText.value = boxShadowDisplay[1];
  verticalOffsetText.value = boxShadowDisplay[1];

  blurRadiusText.value = boxShadowDisplay[2];
  blurRadiusRange.value = boxShadowDisplay[2];

  spreadRadiusText.value = boxShadowDisplay[3];
  spreadRadiusRange.value = boxShadowDisplay[3];

  paintOff.value = boxShadowDisplay[4];
  paintOff.style.display = "none";
  paintOn.value = rgb_to_hex(boxShadowDisplay[4]);

  generatedStyle.innerHTML = `box-shadow: ${boxShadowDisplay.join("px ")}`

  containerBackgroundColorText.innerHTML = "rgb(199, 199, 199)";
  containerBackgroundColorPaint.value = "#c7c7c7";


  borderRadiusBoxText.value = boxFeatures[2];
  borderRadiusBoxRange.value = boxFeatures[2];
  boxWidthRange.value = 0;
  boxWidthText.value = 0;
  boxHeightRange.value = 0;
  boxHeightText.value = 0;
  boxColorText.innerHTML = boxFeatures[3];
  boxColorPaint.value = rgb_to_hex(boxFeatures[3]);
  displayBoxShadow.style.width = "20vw";
  displayBoxShadow.style.height = "20vw";
  displayBoxShadow.style.borderRadius = `${boxFeatures[2]}px`;
  displayBoxShadow.style.backgroundColor = `${boxFeatures[3]}`;
})



function hexToRGB(hex= "", alpha= "") {

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}


function rgb_to_hex(colorval){
	 
  let parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  delete(parts[0]);

  for (let i = 1; i <= 3; ++i) {
      parts[i]= parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i]= '0' + parts[i];
  }

  return '#' + parts.join('');
}
