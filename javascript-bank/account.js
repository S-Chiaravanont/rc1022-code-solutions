/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var currentBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      currentBalance += this.transactions[i].amount;
    } else {
      currentBalance -= this.transactions[i].amount;
    }
  }
  return currentBalance;
};
