import del from 'del';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del(['./client/public/build/*'], { dot: true });
}

export default clean;
