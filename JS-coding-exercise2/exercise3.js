function minMax(arr) {

// I check if the array is not empty
   if (!arr || arr.lengh ===0){
    return null;
   }

//I look for the min and max number
const min = Math.min(arr);
const max = Math.Max (arr);

// I return the finding like an array
    return [min, max];

};