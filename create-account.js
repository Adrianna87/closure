function createAccount(pin, amount) {
  return {
    checkBlance(enteredPin) {
      if (enteredPin === pin) return `${amount}`;
      if (enteredPin !== pin) return "Incorrect Pin"
    },
    deposit(enteredPin, depositAmount) {
      if (enteredPin === pin) {
        newAmount = amount + depositAmount;
        amount = newAmount;
        return amount
      };
      if (enteredPin !== pin) return "Incorrect Pin"
    },
    withdraw(enteredPin, withdrawAmount) {
      if (enteredPin === pin) {
        newAmount = amount - withdrawAmount;
        if (newAmount < 0) {
          return "Tansaction canceled. Not enough funds."
        }
        amount = newAmount
        return amount
      };
      if (enteredPin !== pin) return "Incorrect Pin"
    },
    changePin(enteredPin, newPin) {
      if (enteredPin === pin) {
        pin = newPin
        return "Successfully changed Pin"
      };
      if (enteredPin !== pin) return "Incorrect Pin"
    }
  }
}

// module.exports = { createAccount };
