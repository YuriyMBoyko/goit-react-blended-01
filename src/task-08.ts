enum Role {
  Admin,
  User,
  Guest
}

function getPermissions(role: Role): string[] {
  if (role === Role.Admin) {
    return ["create", "read", "update", "delete"];
  } else if (role === Role.User) {
    return ["read", "update"];
  } else if (role === Role.Guest) {
    return ["read"];
  } else {
    return [];
  }
}

console.log(getPermissions(Role.Admin));
console.log(getPermissions(Role.User));
console.log(getPermissions(Role.Guest));
