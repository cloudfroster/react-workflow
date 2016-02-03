import React from 'react'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import {createDevTools, persistState} from 'redux-devtools'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               defaultSize={0.2}
               defaultPosition='right'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0)? matches[1] : null
}

exports.DevTools = DevTools  // DevTools ui component
exports.persistState = persistState
exports.getDebugSessionKey = getDebugSessionKey
