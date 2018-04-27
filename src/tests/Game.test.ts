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
  }

  'Four Throws No Mark'() {
    this.g.add(5);
    this.g.add(4);
    this.g.add(7);
    this.g.add(2);
    should(this.g.score()).equal(18);
    should(this.g.scoreForFrame(1)).equal(9);
    should(this.g.scoreForFrame(2)).equal(18);
  }

  'Simple Frame After Spare'() {
    this.g.add(3);
    this.g.add(7);
    this.g.add(3);
    this.g.add(2);
    should(this.g.scoreForFrame(1)).equal(13);
    should(this.g.scoreForFrame(2)).equal(18);
    should(this.g.score()).equal(18);
  }

  'Simple Spare'() {
    this.g.add(3);
    this.g.add(7);
    this.g.add(3);
    should(this.g.scoreForFrame(1)).equal(13);
  }

  'Simple Strike'() {
    this.g.add(10);
    this.g.add(3);
    this.g.add(6);
    should(this.g.scoreForFrame(1)).equal(19);
    should(this.g.score()).equal(28);
  }

  'Perfect Game'() {
    for (let i = 0; i < 12; i += 1) {
      this.g.add(10);
    }
    should(this.g.score()).equal(300);
  }

  'End Of Array'() {
    for (let i = 0; i < 9; i += 1) {
      this.g.add(0);
      this.g.add(0);
    }
    this.g.add(2);
    this.g.add(8); // 10th frame spare
    this.g.add(10); // Strike in last position of array.
    should(this.g.score()).equal(20);
  }

  'Sample Game'() {
    this.g.add(1);
    this.g.add(4);
    this.g.add(4);
    this.g.add(5);
    this.g.add(6);
    this.g.add(4);
    this.g.add(5);
    this.g.add(5);
    this.g.add(10);
    this.g.add(0);
    this.g.add(1);
    this.g.add(7);
    this.g.add(3);
    this.g.add(6);
    this.g.add(4);
    this.g.add(10);
    this.g.add(2);
    this.g.add(8);
    this.g.add(6);
    should(this.g.score()).equal(133);
  }

  'Heart Break'() {
    for (let i = 0; i < 11; i += 1) {
      this.g.add(10);
    }
    this.g.add(9);
    should(this.g.score()).equal(299);
  }

  'Tenth Frame Spare'() {
    for (let i = 0; i < 9; i += 1) {
      this.g.add(10);
    }
    this.g.add(9);
    this.g.add(1);
    this.g.add(1);
    should(this.g.score()).equal(270);
  }
}
