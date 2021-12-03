const cache = {}

export default function useData(key, fetcher) {
  if (!cache[key]) {
    let data
    let promise
    cache[key] = () => {
      if (data !== undefined) return data
      if (!promise)
        promise = fetcher()
          .then((r) => (data = r))
          .catch(console.error)
      throw promise
    }
  }
  return cache[key]()
}
