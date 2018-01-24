
let testArray = [1, 2, 3, 2, 1]

// function findUniqueDeliveryId(deliveryIds) {
//
//   var uniqueDeliveryId = 0;
//
//   deliveryIds.forEach(function(deliveryId) {
//     console.log(uniqueDeliveryId.toString(2), deliveryId.toString(2))
//       uniqueDeliveryId ^= deliveryId;
//   });
//
//   return uniqueDeliveryId;
// }


function findUniqueDeliveryId(deliveryIds) {

  let deliveries= {}

  for (let i = 0; i < deliveryIds.length; i++) {
    deliveries[deliveryIds[i]] = 1 + (deliveries[deliveryIds[i]] || 0)
  }

  for (let x in deliveries) {

    if (deliveries[x] === 1) {
      return x;
    }
  }

  return "didn't find it"
}
