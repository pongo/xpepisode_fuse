/* tslint:disable:function-name */

import { should } from 'fuse-test-runner';
import Frame from '../Frame';

export class FrameTest {
  'Score No Throws'() {
    const f = new Frame();
    should(f.getScore()).equal(0);
  }
}
