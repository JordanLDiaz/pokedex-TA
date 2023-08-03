export class Pokemon {
  constructor(data) {
    this.name = data.name,
      this.img = data.img,
      this.weight = data.weight,
      this.height = data.height,
      this.types = data.types,
      this.creatorId = data.creatorId,
      this.creator = data.creator
  }
}