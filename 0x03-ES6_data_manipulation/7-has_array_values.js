export default function hasValuesFromArray(set, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      return false;
    }
  }
  return true;
}
