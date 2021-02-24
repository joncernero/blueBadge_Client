import './App.css'
import styled from 'styled-components'
import { Wrapper, Container } from './components/styled/'
import Auth from './components/Auth/index'

function iPlants() {
  return (
    <div className='main'>
      <Container>
        <Auth />
      </Container>
    </div>
  )
}
export default iPlants
