export default class Game {
  private itsScore: number = 0;
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;
  private itsCurrentFrame: number = 1;
  private firstThrowInFrame: boolean = true;
  private ball: number = 0;

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
    if (this.firstThrowInFrame === true) {
      // strike
      if (pins === 10) {
        this.itsCurrentFrame += 1;
      } else {
        this.firstThrowInFrame = false;
      }
    } else {
      this.firstThrowInFrame = true;
      this.itsCurrentFrame += 1;
    }

    this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame);
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

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
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
