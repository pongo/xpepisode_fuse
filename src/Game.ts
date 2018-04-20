export default class Game {
  private itsScore: number = 0;
  private itsThrows: number[] = Array(21);
  private itsCurrentThrow: number = 0;
  private itsCurrentFrame: number = 1;
  private firstThrowInFrame: boolean = true;
  private ball: number = 0;
  private firstThrow: number = 0;
  private secondThrow: number = 0;

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
      this.firstThrow = this.itsThrows[this.ball];
      if (this.firstThrow === 10) {
        this.ball += 1;
        score += 10 + this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
      } else {
        score += this.handleSecondThrow();
      }
    }

    return score;
  }

  private handleSecondThrow() {
    let score: number = 0;
    this.secondThrow = this.itsThrows[this.ball + 1];
    const frameScore = this.firstThrow + this.secondThrow;
    // spare needs next frames first throw
    if (frameScore === 10) {
      this.ball += 2;
      score += frameScore + this.itsThrows[this.ball];
    } else {
      this.ball += 2;
      score += frameScore;
    }
    return score;
  }

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
  }
}
