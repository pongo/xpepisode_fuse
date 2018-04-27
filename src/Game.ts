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
        this.ball += 1;
        score += 10 + this.nextTwoBalls();
      } else {
        score += this.handleSecondThrow();
      }
    }

    return score;
  }

  private handleSecondThrow() {
    let score: number = 0;
    // spare needs next frames first throw
    if (this.spare()) {
      this.ball += 2;
      score += 10 + this.nextBall();
    } else {
      score += this.twoBallsInFrame();
      this.ball += 2;
    }
    return score;
  }

  private nextBall(): number {
    return this.itsThrows[this.ball];
  }

  private strike(): boolean {
    return this.itsThrows[this.ball] === 10;
  }

  private nextTwoBalls(): number {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
  }

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
  }

  private spare(): boolean {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1] === 10;
  }

  private twoBallsInFrame(): number {
    return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
  }
}
