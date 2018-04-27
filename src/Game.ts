import Scorer from './Scorer';

export default class Game {
  private itsCurrentFrame: number = 0;
  private firstThrowInFrame: boolean = true;
  private itsScorer: Scorer = new Scorer();

  score(): number {
    return this.scoreForFrame(this.itsCurrentFrame);
  }

  add(pins: number): void {
    this.itsScorer.addThrow(pins);
    this.adjustCurrentFrame(pins);
  }

  private adjustCurrentFrame(pins: number): void {
    if (this.firstThrowInFrame) {
      if (this.adjustFrameForStrike(pins) === false) {
        this.firstThrowInFrame = false;
      }
    } else {
      this.firstThrowInFrame = true;
      this.advanceFrame();
    }
  }

  private advanceFrame(): void {
    this.itsCurrentFrame = Math.min(10, this.itsCurrentFrame + 1);
  }

  scoreForFrame(theFrame: number): number {
    return this.itsScorer.scoreForFrame(theFrame);
  }

  private adjustFrameForStrike(pins: number): boolean {
    if (pins === 10) {
      this.advanceFrame();
      return true;
    }
    return false;
  }
}
