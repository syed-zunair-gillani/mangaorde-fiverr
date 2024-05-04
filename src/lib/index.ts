export function getUniqueItems(arr:any, propName:any='name') {
  const uniqueItems = [];
  const map = new Map();

  for (const item of arr) {
    if (!map.has(item[propName])) {
      map.set(item[propName], true);    // set any value to Map
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}