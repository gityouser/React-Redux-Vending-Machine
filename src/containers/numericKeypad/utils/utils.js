export function handleUserPurchaseIntent({
  productList,
  userSelection,
  registerUserSelectionAction,
  updateDisplayMessageAction,
}) {
  console.log("updateDisplayMessageAction: ", updateDisplayMessageAction);
  
  registerUserSelectionAction(productList);
  if (userSelection === '') {
    console.log('condition is treu');
    
    updateDisplayMessageAction('caca!!!!')
  }
}