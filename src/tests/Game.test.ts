/* tslint:disable:function-name */

import { should } from 'fuse-test-runner';
import Game from '../Game';

export class GameTest {
  private g: Game = new Game();

  beforeEach() {
    this.g = new Game();
  }

  'Two Throws No Mark'() {
    this.g.add(5);
    this.g.add(4);
    should(this.g.score()).equal(9);
    should(this.g.getCurrentFrame()).equal(2);
  }

  'Four Throws No Mark'() {
    this.g.add(5);
    this.g.add(4);
    this.g.add(7);
    this.g.add(2);
    should(this.g.score()).equal(18);
    should(this.g.scoreForFrame(1)).equal(9);
    should(this.g.scoreForFrame(2)).equal(18);
    should(this.g.getCurrentFrame()).equal(3);
  }

  'Simple Frame After Spare'() {
    this.g.add(3);
    this.g.add(7);
    this.g.add(3);
    this.g.add(2);
    should(this.g.scoreForFrame(1)).equal(13);
    should(this.g.scoreForFrame(2)).equal(18);
    should(this.g.score()).equal(18);
    should(this.g.getCurrentFrame()).equal(3);
  }

  'Simple Spare'() {
    this.g.add(3);
    this.g.add(7);
    this.g.add(3);
    should(this.g.scoreForFrame(1)).equal(13);
    should(this.g.getCurrentFrame()).equal(2);
  }
}
