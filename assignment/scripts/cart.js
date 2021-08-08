console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Before anything I look in the index.html file to see if the .js file is linked.
// I also open the index.html file in the browser and check the console to see
// the above log to see what they are successfully linked.
 let basket = [];
 const maxItems = 5;

 function addItem( item ) {
   if ( basket.length < maxItems ) {
     basket.push( item );
     return true;
   } else if ( basket.length >= maxItems ) {
     return false;
   }
 }

console.log( `Basket contains: ${basket}` );
console.log( 'Adding bananas (expect true):', addItem( 'bananas' ) );
console.log( `Basket now contains: ${basket}` );

function listItems() {
  for ( let i=0; i<basket.length; i+=1 ) {
      console.log( basket[i] );
  }
}

// listItems(); // tested function

function empty() {
  basket.pop( basket );
  return true;
}

console.log( `Basket contains: ${basket}` );
console.log( 'Emptying basket (expect true)', empty() );
console.log( `Basket now contains: ${basket}` );

// STRETCH Goals

function isFull() {
  if ( basket.length < maxItems ) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}
 console.log( 'Is basket full? (expects false)', isFull() );
 console.log( 'Adding carrots (expects true):', addItem('carrots') );
 console.log( 'What items do I have in basket?' );
 listItems();

 console.log( 'Adding potatoes (expects true):', addItem('potatoes') );
 console.log( 'Adding broccoli (expects true):', addItem('broccoli') );
 console.log( 'Adding lettuce (expects true):', addItem('lettuce') );
 console.log( 'Adding strawberries (expects true):', addItem('strawberries') );
 console.log( 'Adding pineapple (expects false):', addItem('pineapple') );
listItems();
console.log( 'Is basket full? (expects true):', isFull() );

function removeItem( basket, item ) {
  for ( let i=0; i<basket.length; i+=1 ){
    if ( basket.indexOf[item] === basket[i] ) {
      let removedItem = basket.splice( 2, 1, item );
      return removedItem;
    } return null;
  }
}
console.log( 'Removing lettuce (expects lettuce):', removeItem( 'lettuce') );
