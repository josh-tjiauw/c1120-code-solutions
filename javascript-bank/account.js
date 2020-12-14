/* exported Account */
function Account(number, holder){
  this.number = number;
  this.holder = holder;
  this.transactions = [];
  return this;
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var d = {deposit: amount};
    this.transactions.push(d);
    return true;
  }
  else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var w = {withdraw: amount};
    this.transactions.push(w);
    return true;
  }
  else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for(var i=0; i<this.transactions.length; i++){
    for (var x in this.transactions[i]) {
      if(x === 'deposit'){
        balance += this.transactions[i][x];
      }
      else {
        balance -= this.transactions[i][x];
      }
    }
  }
  return balance;
}
