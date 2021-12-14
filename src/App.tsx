import { useState } from 'react'
import { Layout } from './systems/core/components'
import { Main } from './systems/Main'
import { Header } from './systems/header/components'
import { TodoProvider } from './context/todoContext'

function App() {

  return (
    <TodoProvider>
      <Layout title='Todo App'>
        <Header />
        <Main />
      </Layout>
    </TodoProvider>
  )
}

export default App
