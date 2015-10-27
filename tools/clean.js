/**
 * React Starter Kit (http://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2015 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import del from 'del';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del(['.tmp', './client/public/bundle.js'], { dot: true });
}

export default clean;
