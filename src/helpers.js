// Returns a randomly selected item from array of items.
const choice = (items) => {
  let randItem = Math.floor(Math.random() * items.length);

  return items[randItem];
}

// Removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
const remove = (items, item) => {
  let itemIdx = items.indexOf(item)
  if (itemIdx >= 0) {
    items.splice(itemIdx, 1);
    return item;
  } else {
    return undefined;
  }
}

export {choice, remove};