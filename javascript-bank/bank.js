/* exported Bank */
function Bank(){
  this.nextAccountNumber = 1;
  this.accounts = [];
  return this;
};

Bank.prototype.openAccount = function (holder, balance) {
  if(balance > 0){
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return newAcc.number;
  }
  else {
    return null;
  }
};

Bank.prototype.getAccount = function(number){
  for(var i=0; i<this.accounts.length; i++){
    if(number === this.accounts[i].number){
      return this.accounts[i];
    }
  }
};

Bank.prototype.getTotalAssets = function(){};
