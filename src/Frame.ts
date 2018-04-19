export default class Frame {
  private itsScore: number = 0;

  getScore(): number {
    return this.itsScore;
  }

  add(pins: number) {
    this.itsScore += pins;
  }
}
