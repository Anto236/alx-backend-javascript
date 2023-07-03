export default function updateUniqueItems(item) {
  if (!(item instanceof Map)) {
    throw new Error('Cannot process');
  }

  item.forEach((quantity, name) => {
    if (quantity === 1) {
      item.set(name, 100);
    }
  });
}
