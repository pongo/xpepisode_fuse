export default class Game {
  private itsScore: number = 0;

  score(): number {
    return this.itsScore;
  }

  add(pins: number) {
    this.itsScore += pins;
  }
}
