interface User {
  id: number;
  name: string;
}

function toUserObjects(array: string[]): User[] | null {
  if (array) {
    return array.map((item: string, index: number) => {
      return {id: index, name: item} as User;
    });
  }
  return null;
}

const users = ["alice", "bob", "charlie"];
console.log(toUserObjects(users));
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
