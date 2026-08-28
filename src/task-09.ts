interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItems: (index: number) => T | null;
  getCount: () => number;
}

class ContainerClass<T> implements Container<T> {
  items: T[]

  constructor(array: T[]) {
    this.items = [];
    if (array) {
      this.items = this.items.concat(array);
    } 
  }

  addItem(item: T): void {
    if (item) {
      this.items.push(item);
    }
  }

  getItems(index: number): T | null {
    if ((index >= 0) && (index < this.getCount())) {
      return this.items[index];
    } else {
      return null;
    }
  }

  getCount(): number {
    return this.items.length;
  }
}

function getLastElement<T>(container: Container<T>): T | null {
  if (container) {
    const idx = container.getCount() - 1;
    if (idx >= 0) {
      return container.getItems(idx);
    }
  }
  return null;
}




const numberContainer = new ContainerClass<number>([]);
const stringContainer = new ContainerClass<string>([]);

numberContainer.addItem(10);
numberContainer.addItem(15);
numberContainer.addItem(20);

console.log(`numberContainer contains ${numberContainer.getCount()} items`);
for (let idx = 0; idx < numberContainer.getCount(); idx++) {
  console.log(`items[${idx}] is equals to ${numberContainer.getItems(idx)}`);
}
console.log(`lastElement is ${getLastElement(numberContainer)}`);

console.log(' ');

stringContainer.addItem('10');
stringContainer.addItem('15');
stringContainer.addItem('20');

console.log(`stringContainer contains ${stringContainer.getCount()} items`);
for (var idx = 0; idx < stringContainer.getCount(); idx++) {
  console.log(`items[${idx}] is equals to ${stringContainer.getItems(idx)}`);
}
console.log(`lastElement is ${getLastElement(numberContainer)}`);
