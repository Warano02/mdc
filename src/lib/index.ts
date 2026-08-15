export * from "./axios"
export * from "./utils"
export function getInitial(name: string) {
  return name.split(" ").length > 1
    ? name.split(" ")[0][0].concat(name.split(" ")[1][0]).toLocaleUpperCase()
    : name.slice(0, 2).toLocaleUpperCase();
}