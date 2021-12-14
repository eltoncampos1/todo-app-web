import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { TodoProvider } from './context/todoContext'
import { GlobalStyle } from './styles/globalStyles'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </DndProvider>
    </TodoProvider>
  </React.StrictMode >,
  document.getElementById('root')
)
