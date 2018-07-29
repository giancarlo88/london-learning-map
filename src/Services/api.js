export const get = async url => {
  return fetch(url)
    .then(data => data.json())
    .catch(err => {
      throw err
    })
}

export const post = async (url, body, options) =>
  fetch(url, {
    ...options,
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(data => data.json())
    .catch(err => {
      throw err
    })
