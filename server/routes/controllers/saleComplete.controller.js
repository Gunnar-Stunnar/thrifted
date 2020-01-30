
const sdk = require("../../sdk");

/*
*
* Sale Complete
* Every time a sale is completes adds Meta Data to say item is sold
*
* */
module.exports = (req,res) => {
  sdk.transactions.show({
    id: req.body.TransactionID
  }).then(data => {
    const transactData = data;
    if(validate_transaction_Status(data)){

      sdk.listings.update({
        id:transactData.data.data.attributes.protectedData.ItemId,
        metadata:{
         sold:true
        }
      }).then( data => {

        sdk.listings.close({
          id:transactData.data.data.attributes.protectedData.ItemId
        })
          .then(data => {
            res.status(200).json({message:"Transaction Completed!"});
          })
          .catch(e => {
            console.log(e);
            res.status(500).json({Error:"Error"});
          })

        }
      )
        .catch(e => {
          console.log(e);
          res.status(500).json({error:"Error"});
        });

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
