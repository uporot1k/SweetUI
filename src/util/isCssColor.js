function isCssColor(color) {
  let o = new Option().style;
  o.color = color;
  
  return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/) || o.color == color;

}

export default isCssColor;