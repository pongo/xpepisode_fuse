export default class Game {
  private itsScore: number = 0;
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;

  score(): number {
    return this.itsScore;
  }

  add(pins: number) {
    this.itsThrows[this.itsCurrentThrow] = pins;
    this.itsCurrentThrow += 1;
    this.itsScore += pins;
  }

  scoreForFrame(frame: number): number {
    let score: number = 0;
    let frameCopy = frame;

    for (
      let ball = 0;
      frameCopy > 0 && ball < this.itsCurrentThrow;
      ball += 2, frameCopy -= 1
    ) {
      score += this.itsThrows[ball] + this.itsThrows[ball + 1];
    }

    return score;
  }
}
