import styled, { keyframes } from 'styled-components'
import { CgMouse } from 'react-icons/cg'
import { BsArrowDownUp } from 'react-icons/bs'

const ScrollInfo = e => {
  return (
    <ScrollInfoWrapper style={{ display: e.scrollStart === true ? 'none' : 'block' }}>
      <CgMouse />
      <p>
        SCROLL
        <br />&<br />
        CLICK
      </p>
      <BsArrowDownUp />
    </ScrollInfoWrapper>
  )
}

export default ScrollInfo

const scrollAnimation = keyframes`
0%{transform:translate(0,0)}
100%{transform:translate(0,30px)}
`

const ScrollInfoWrapper = styled.div`
  text-align: center;
  position: fixed;
  width: 80px;
  height: 100px;
  bottom: 45vh;
  left: calc(50% - 40px);
  z-index: 99999;
  color: white;
  font-size: 1.2rem;
  opacity: 0.7;
  animation: ${scrollAnimation} 1.2s infinite;

  & svg {
    font-size: 2rem;
  }

  & p {
    margin: 10px 0;
  }
`
