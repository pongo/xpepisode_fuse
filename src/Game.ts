export default class Game {
  private itsScore: number = 0;
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;

  score(): number {
    return this.itsScore;
  }

  add(pins: number): void {
    this.itsThrows[this.itsCurrentThrow] = pins;
    this.itsCurrentThrow += 1;
    this.itsScore += pins;
  }

  scoreForFrame(theFrame: number): number {
    let ball: number = 0;
    let score: number = 0;

    for (let currentFrame = 0; currentFrame < theFrame; currentFrame += 1) {
      const firstThrow: number = this.itsThrows[ball];
      ball += 1;
      const secondThrow: number = this.itsThrows[ball];
      ball += 1;
      const frameScore = firstThrow + secondThrow;
      // spare needs next frames first throw
      if (frameScore === 10) {
        score += frameScore + this.itsThrows[ball];
      } else score += frameScore;
    }

    return score;
  }
}
