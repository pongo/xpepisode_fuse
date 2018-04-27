export default class Scorer {
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;
  private ball: number = 0;

  addThrow(pins: number): void {
    this.itsThrows[this.itsCurrentThrow] = pins;
    this.itsCurrentThrow += 1;
  }

  scoreForFrame(theFrame: number): number {
    this.ball = 0;
    let score: number = 0;

    for (let currentFrame = 0; currentFrame < theFrame; currentFrame += 1) {
      if (this.strike()) {
        score += 10 + this.nextTwoBalls();
      } else if (this.spare()) {
        score += 10 + this.nextBall();
      } else {
        score += this.twoBallsInFrame();
      }
    }

    return score;
  }

  private nextBall(): number {
    return this.itsThrows[this.ball];
  }

  private strike(): boolean {
    if (this.itsThrows[this.ball] === 10) {
      this.ball += 1;
      return true;
    }
    return false;
  }

  private nextTwoBalls(): number {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
  }

  private spare(): boolean {
    if (this.itsThrows[this.ball] + this.itsThrows[this.ball + 1] === 10) {
      this.ball += 2;
      return true;
    }
    return false;
  }

  private twoBallsInFrame(): number {
    const score = this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
    this.ball += 2;
    return score;
  }
}
