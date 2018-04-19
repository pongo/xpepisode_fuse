export default class Game {
  private itsScore: number = 0;
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;
  private itsCurrentFrame: number = 1;
  private firstThrow: boolean = true;

  score(): number {
    return this.itsScore;
  }

  add(pins: number): void {
    this.itsThrows[this.itsCurrentThrow] = pins;
    this.itsCurrentThrow += 1;
    this.itsScore += pins;

    this.adjustCurrentFrame();
  }

  private adjustCurrentFrame(): void {
    if (this.firstThrow === true) {
      this.firstThrow = false;
    } else {
      this.firstThrow = true;
      this.itsCurrentFrame += 1;
    }
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

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
  }
}
