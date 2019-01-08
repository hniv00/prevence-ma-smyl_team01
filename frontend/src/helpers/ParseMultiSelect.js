export default function(multiSelectArray) {
  let valueArray = [];
  for (const item of multiSelectArray) {
    valueArray.push(item.value);
  }
  return valueArray;
}
