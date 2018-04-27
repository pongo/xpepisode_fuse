import Scorer from './Scorer';

export default class Game {
  private itsScore: number = 0;
  private itsCurrentFrame: number = 1;
  private firstThrowInFrame: boolean = true;
  private itsScorer: Scorer = new Scorer();

  score(): number {
    return this.scoreForFrame(this.getCurrentFrame() - 1);
  }

  add(pins: number): void {
    this.itsScorer.addThrow(pins);
    this.itsScore += pins;
    this.adjustCurrentFrame(pins);
  }

  private adjustCurrentFrame(pins: number): void {
    if (this.firstThrowInFrame) {
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
    return this.itsScorer.scoreForFrame(theFrame);
  }

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
  }
}
