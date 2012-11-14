//Implement a Set data structure, including an “add” and “intersect” method.

// sample array sets
var arr1 = new Array(5,3,6,8,1,4,7,10,13,14);
var arr2 = new Array(8,3,11,2,5,1,9,12,13);

var Set = function (arr1,arr2) {  // main constructor
 this.arr1 = arr1;
 this.arr2 = arr2;
 this.addArr = new Array();
 this.intrsctArr = new Array();
};

Set.prototype.add = function () {  
	array1 = this.arr1;
	array2 = this.arr2;
	for each (item in array1) {
		// check to see if item exists in the haystack of array2
		if (array2.in_array(item)){
			// it's already in array 2, so do nothing	
		}
		else {
			// it's not there, so put it there
			array2.push(item);
		}
	}
	// reset object arr3 to composite array
  	this.addArr = array2;
};

Set.prototype.intersect = function () {
	array1 = this.arr1;
	array2 = this.arr2;
	intrsctArr = this.intrsctArr;
	
	for each (item in array1) {
		// check to see if item exists in the haystack of array2
		if (array2.in_array(item)){
			// it does exist, so add it to the intersection collection	
			intrsctArr.push(item);
		}
		else {
			// it's not there, so do nothing
		}
	}
	// reset object arr3 to composite array
  	this.intrsctArr = intrsctArr;	
};

Set.prototype.dump = function (arr) {  // only for debugging
	dumpArray = arr;
	displayStr = "";
	for each (item in dumpArray) {
		if (isNaN(item)) {
			// do nothing;
		}
		else {
		displayStr += "key => " + item + "<br/>";  //show what's in there
		} 
	}
  document.write(displayStr);
 }

// test code Add method
newSet = new Set(arr1,arr2);
newSet.add();
newSet.dump(newSet.addArr);

// test code Intersect method
newSet2 = new Set(arr1,arr2);
newSet2.intersect();
newSet2.dump(newSet2.intrsctArr);

