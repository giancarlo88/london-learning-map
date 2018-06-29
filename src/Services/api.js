export const get = async url => {
  console.log(url)
  return fetch(url)
    .then(data => data.json())
    .catch(err => {
      throw err
    })
}

export const post = async (url, options) =>
  fetch(url, options)
    .then(data => data.json())
    .catch(err => {
      throw err
    })
