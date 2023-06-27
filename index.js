import { start as serverStart } from './server.js';
import { route as router } from './router.js';
import {
  start as handleStart,
  upload as handleUpload,
  show as handleShow,
} from './requestHandlers.js';
const handle = new Map();
handle.set('/', handleStart);
handle.set('/start', handleStart);
handle.set('/upload', handleUpload);
handle.set('/show', handleShow);
serverStart(router, handle);
