const userName = ref("")
export function user(name: string) {
  userName.value = name
  return {
    userName,
  };
}
export const getUser = () => {
  return userName.value
}