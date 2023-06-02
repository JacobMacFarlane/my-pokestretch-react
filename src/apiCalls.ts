export const fetchAllCards = async () => {
  return fetch('https://api.pokemontcg.io/v2/cards/')
    .then(response => response.json())
    .catch(err => {
        throw new Error(err)
    })
}
