module.exports = function check(str, bracketsConfig) {
  // Variable pairsArray for keeping bracket pairs
  let pairsArray = [];
  bracketsConfig.forEach(element => {
      pairsArray.push(element.join(''));
  });
  
  // Variable checked Pair for make sure lack of current bracket pair
  let checkedPair = 0;
  while( checkedPair < pairsArray.length){
    pairsArray.forEach(element => {
      while(str.indexOf(element) !== -1){
          str = str.replace(element, ''); 
          checkedPair = 0;    
      }
      checkedPair++;
    })
  }
  return (str.length === 0) ? true : false;
}


