export default class CouldNotRetrieveCharacters extends Error {
  constructor(public msg: string, public status: number, public url: string) {
    super(msg);

    Object.setPrototypeOf(this, CouldNotRetrieveCharacters.prototype);
  }
}
