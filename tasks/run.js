function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  const colors = require('colors')

  const start = new Date();
  console.log(`[${format(start).magenta}] Starting '${fn.name.cyan}'...`);
  return fn(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(`[${format(end).magenta}] Finished '${fn.name.cyan}' after ${time} ms`);
  });
}

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
  delete require.cache[__filename];
  const task = process.argv[2];
  run(require('./' + task + '.js')).catch(err => console.error(err.stack));
}

module.exports = run;
