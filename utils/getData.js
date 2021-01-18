export default async function getData(origin) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        origin,
        time: Date.now(),
      })
    }, 500)
  })
}
