// This module provides methods for getting color values for the design
// ===============================================================================
module.exports = {

  getClassName(value){
    // Get classname for color based on value
    if (value < 0) 
      return "red";
    else if (value > 0)
      return "green";
    else return "";
  }
}