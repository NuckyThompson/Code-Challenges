function jsTest() {
    var index = 0; 
    var counter = 0;
    var obj = {};  
    
    obj.index = index;  // new property 'index' on new blank object set to 0 here
    
    var func = function () {  
        for (index = 0; index < 10; index++) {  // local var index does not affect previous var index, because not exposed as a param
            counter += 2;  //what the heck is this?  It's not used or returned anywhere.  Needs to be used or 'losed'.    
        }
        obj.index++;  // does not work - object created in outer function never exposed to this inner function
    };
    
    obj.func = func;  // set as a property, not a method on new object, so all we get is a stored code string here, and we never call it
    this.index++;  // we are not inside an object, therefore we cannot call 'this'
	
    return index;  // Aaaaannnnnddd... var index is still 0, because we never actually changed it!  
}
//var results = jsTest();
//document.write("jsTest = " + results);
