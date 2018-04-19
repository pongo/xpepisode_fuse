/* tslint:disable:function-name */

import { should } from 'fuse-test-runner';
import Game from '../Game';

export class GameTest {
  'One Throw'() {
    const g = new Game();
    g.add(5);
    should(g.score()).equal(5);
  }

  'Two Throws No Mark'() {
    const g = new Game();
    g.add(5);
    g.add(4);
    should(g.score()).equal(9);
  }
}
