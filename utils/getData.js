export default async function getData(origin) {
  // Note that this timeout promise is only to demonstrate/simulate network latency.
  // You could just as easily return a plain object directly!
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        origin,
        time: Date.now(),
      })
    }, 500)
  })
}
