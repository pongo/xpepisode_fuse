export default class Game {
  private itsScore: number = 0;
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;
  private itsCurrentFrame: number = 1;
  private firstThrow: boolean = true;

  score(): number {
    return this.scoreForFrame(this.getCurrentFrame() - 1);
  }

  add(pins: number): void {
    this.itsThrows[this.itsCurrentThrow] = pins;
    this.itsCurrentThrow += 1;
    this.itsScore += pins;
    this.adjustCurrentFrame(pins);
  }

  private adjustCurrentFrame(pins: number): void {
    if (this.firstThrow === true) {
      // strike
      if (pins === 10) {
        this.itsCurrentFrame += 1;
      } else {
        this.firstThrow = false;
      }
    } else {
      this.firstThrow = true;
      this.itsCurrentFrame += 1;
    }

    this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame);
  }

  scoreForFrame(theFrame: number): number {
    let ball: number = 0;
    let score: number = 0;

    for (let currentFrame = 0; currentFrame < theFrame; currentFrame += 1) {
      const firstThrow: number = this.itsThrows[ball];
      ball += 1;
      if (firstThrow === 10) {
        score += 10 + this.itsThrows[ball] + this.itsThrows[ball + 1];
      } else {
        const secondThrow: number = this.itsThrows[ball];
        ball += 1;
        const frameScore = firstThrow + secondThrow;
        // spare needs next frames first throw
        if (frameScore === 10) {
          score += frameScore + this.itsThrows[ball];
        } else {
          score += frameScore;
        }
      }
    }

    return score;
  }

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
  }
}
