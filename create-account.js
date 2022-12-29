function createAccount(pin, bal=0) {
    return {
       checkBalance(pinInput) {
        if(pinInput !== pin) return "Invalid PIN."
        return `$${bal}`
       },
       deposit(pinInput, depAmnt){
        if(pinInput !== pin) return "Invalid PIN."
        bal+=depAmnt;
        return `Succesfully deposited $${depAmnt}. Current balance: $${bal}.`
       },
       withdraw(pinInput, wthdrawAmnt){
        if(pinInput !== pin) return "Invalid PIN."
        if(bal < wthdrawAmnt) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled."
        } else {
            bal -= wthdrawAmnt;
            return `Succesfully withdrew $${wthdrawAmnt}. Current balance: $${bal}.`
        }
       },
       changePin(pinInput, newPin){
        if(pinInput !== pin) return "Invalid PIN.";
        if(pinInput === pin){
            pin = newPin;
            return "PIN successfully changed!"
        }
       } 
    }

}

module.exports = { createAccount };

/*
create a function called createAccount,
which takes a pin and a deposit amount ex function createAccount(pin, num)
return value is to be an object {} with 4 methods:
- checkbalance() 
if correct pin - return balance, if incorrect pin return "invalid pin"
- deposit()
if correct pin and given amnt, increment balance by the amount
if pin is incorrect return "invalid pin"
- withdraw()
if pin is incorrect return "incorrect pin"
if correct pin and w/d amnt is > bal, decrement balance balance -= amnt
if amn > bal return "insufficient funds!"
- changePin()
if pin is correct update new pin to the pin number, if invalid pin return invalid
*/