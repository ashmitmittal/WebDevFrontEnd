import React, {useState} from 'react';
import './App.css';

const NUM_BOXES =35;

const defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
  "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
  "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
  "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
  "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
  "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
  "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
  "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
  "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
  "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
  "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
  "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
  "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
  "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
  "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
  "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
  "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
  "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
  "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
  "Yellow","YellowGreen"]
}

const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color
  }
  return <div style={style} />;
};


function getRandomColor() {
  let colorIndex = Math.floor(Math.random() * defaultProps.allColors.length);
  return defaultProps.allColors[colorIndex];
} 

function App(props) {

  const boxes = Array(NUM_BOXES).fill().map(getRandomColor);
  const [colors,setColor] = useState(boxes);
  const Boxes = colors.map((b,index) => (
    <Box key={index} color={b}/>
  ));

  setInterval(() => {
    const boxess = colors.slice();
    // console.log(boxess);
    const randIndex = Math.floor(Math.random() * boxess.length);
    boxess[randIndex] = getRandomColor();
    setColor(boxess);
    // console.log(getRandomColor())
  },1000);


  return (
    <div className="App">
      {Boxes}
    </div>
  );
}

export default App;
