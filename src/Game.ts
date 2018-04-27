import Scorer from './Scorer';

export default class Game {
  private itsCurrentFrame: number = 1;
  private firstThrowInFrame: boolean = true;
  private itsScorer: Scorer = new Scorer();

  score(): number {
    return this.scoreForFrame(this.getCurrentFrame() - 1);
  }

  add(pins: number): void {
    this.itsScorer.addThrow(pins);
    this.adjustCurrentFrame(pins);
  }

  private adjustCurrentFrame(pins: number): void {
    if (this.firstThrowInFrame) {
      // strike
      if (pins === 10) {
        this.advanceFrame();
      } else {
        this.firstThrowInFrame = false;
      }
    } else {
      this.firstThrowInFrame = true;
      this.advanceFrame();
    }
  }

  private advanceFrame(): void {
    this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame + 1);
  }

  scoreForFrame(theFrame: number): number {
    return this.itsScorer.scoreForFrame(theFrame);
  }

  getCurrentFrame(): number {
    return this.itsCurrentFrame;
  }
}
