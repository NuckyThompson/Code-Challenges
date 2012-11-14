
var needle = 345;
var haystack = [];

for (index = 0; index < 1000; index++) {
  haystack[index] = index;
};

function quickBinaryFind(needle,haystack) {
var low = -1;
var high = (haystack.length - 1);
var position = 0;
	
   while (high > low) {
      var middle = (low + ((high - low) / 2));   
      var middle = Math.floor(middle);
      var currentVal = haystack[middle]; 
	  
    if (needle < haystack[low] || needle > haystack[high] || low + 1 == high){
       position = -1;
	   break;  // needle is not in collection or is out of range, no need to search further
     }
    else if (currentVal > needle) {  
      high = middle;  // needle lies below the current middle record, shift high
    }
    else if (currentVal < needle) {
      low = middle;  // needle lies above the current middle record, shift low
    }
    else if (currentVal == needle) {
      position = middle;
	  break;  // needle has been found, terminate search
    }
  }
    return position;  
 }

function writeContent() {
var results = quickBinaryFind(needle,haystack);
document.getElementById("tableContainer").innerHTML = "quickBinaryFind = " + results ;
}