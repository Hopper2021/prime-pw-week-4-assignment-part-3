console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Before anything I look in the index.html file to see if the .js file is linked.
// I also open the index.html file in the browser and check the console to see
// the above log to see what they are successfully linked.
 let basket = [];
 const maxItems = 5;

 function addItem( item ) {
   basket.push( item );
   if ( item ) {
     return true;
   }
   return false;
 }

console.log( `Basket contains: ${basket}` );
console.log( 'Adding bananas (expect true):', addItem( 'bananas' ) );
console.log( `Basket now contains: ${basket}` );

function listItems() {
  for ( let i=0; i<basket.length; i+=1 ) {
    console.log( basket[i] );
  }
}

console.log( listItems() );

function empty() {
  basket.pop( basket );
}

console.log( `My basket contains: ${basket}` );
console.log( `Emptying my basket`, empty() );
console.log( `My basket now contains: ${basket}` );

// STRETCH Goals

function isFull() {
  if ( basket.length < maxItems ) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}
 console.log( isFull() );
