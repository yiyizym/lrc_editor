import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Hint from './Hint'
import ControllPanel from './ControllPanel'
import LyricsPanel from './LyricsPanel'
import LyricsModal from './LyricsModal'

function App () {
  return (
    <React.Fragment>
      <Hint />
      <CssBaseline>
        <div style={{
          width: '80vw',
          margin: '0 auto'
        }}>
          <ControllPanel />
          <LyricsPanel />
        </div>
        <LyricsModal />
      </CssBaseline>
    </React.Fragment>
  )
}

export default App
