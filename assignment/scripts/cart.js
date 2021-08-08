console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Before anything I look in the index.html file to see if the .js file is linked.
// I also open the index.html file in the browser and check the console to see
// the above log to see what they are successfully linked.
 let basket = [];

 function addItem ( item ) {
   basket.push( item );
   if ( item ) {
     return true;
   }
   return false;
 }

// console.log( addItem( 'bananas' ), basket );
// tested adding an item, then logged the array to show the item.

function listItems () {
  for (let i=0; i<basket.length; i+=1 ){

  }
}
