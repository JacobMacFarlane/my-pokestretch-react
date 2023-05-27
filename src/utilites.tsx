export type PokeCard = {
  id: string
  images: {
    large : string
  }
  name : string,
  types: string[]
}

export const cleanData = (data: PokeCard[]) => {
  return data.map(card => {
    return {
      image: card.images.large,
      name: card.name,
      types: card.types,
      cardId: card.id
    }
  })
}