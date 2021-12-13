import { useState } from 'react'
import { Layout } from './systems/core/components'
import { Main } from './systems/Main'
import { Header } from './systems/header/components'

function App() {
  return (
    <Layout title='Todo App'>
      <Header />
      <Main />
    </Layout>
  )
}

export default App
