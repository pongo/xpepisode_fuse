const { src, task, exec, context } = require('fuse-box/sparky');
const { FuseBox } = require('fuse-box');

context(
  class {
    getConfig() {
      return FuseBox.init({
        homeDir: 'src',
        target: 'server@esnext',
        output: 'dist/$name.js',
        plugins: [],
      });
    }
  },
);

task('test', async context => {
  const fuse = context.getConfig();
  fuse.bundle('app').test('[tests/**.test.ts]');
  await fuse.run();
});
