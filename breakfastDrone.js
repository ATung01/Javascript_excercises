
let testArray = [1, 2, 3, 2, 1]

function findUniqueDeliveryId(deliveryIds) {

  var uniqueDeliveryId = 0;

  deliveryIds.forEach(function(deliveryId) {
    console.log(uniqueDeliveryId.toString(2), deliveryId.toString(2))
      uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}
