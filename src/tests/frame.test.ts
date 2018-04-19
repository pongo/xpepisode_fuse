/* tslint:disable:function-name */

import { should } from 'fuse-test-runner';
import Frame from '../Frame';

export class FrameTest {
  'Score No Throws'() {
    const f = new Frame();
    should(f.getScore()).equal(0);
  }

  'Add One Throw'() {
    const f = new Frame();
    f.add(5);
    should(f.getScore()).equal(5);
  }
}
