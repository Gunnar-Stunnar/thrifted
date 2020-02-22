"use strict";

const sdk = require("../../sdk");

/*
*
* Tx handler
* Every time user update transaction status, this route will be notified and will
* move Payments along in other gateways.
*
* */
module.exports = (req,res) => {
  sdk.transactions.show({
    id: req.body.TransactionID
  }).then(data => {
    const transactData = data;
    if(validate_transaction_Status(data)){

    }else{
      res.status(400).json(
        {
          error: "not valid to close yet"
        });
    }

  })
    .catch(e => {
      console.log(e);
      res.status(500).json({error:"Error"});
    });
};

/*
  validates that the person has received the item.
 */
function validate_transaction_Status(transaction_json){
  let status = transaction_json.data.data.attributes.transitions;

  for(let i = 0; i < status.length; i++){
    let obj = status[i];
    if(obj['transition'] === 'transition/receive'){
      return true
    }
  }

  return false
}
