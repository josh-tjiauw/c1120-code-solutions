/* exported Transaction */
function Transaction(type, amount){
  var transObj = {
    type:'',
    amount: 0,
};
  transObj.type = type;
  transObj.amount = amount;
  return transObj;
};
