import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Loading = () => {
  const [displayLoading, setDisplayLoading] = useState('')

  setTimeout(() => {
    setDisplayLoading('off')
  }, 2000)

  return (
    <LoadingWrapper
      className={displayLoading}
      style={{ display: displayLoading === 'off' ? 'none' : 'flex' }}
    >
      <WaveContainer>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </WaveContainer>
      <p>
        <span>Welcome</span>
        <span>to</span>
        <span>DaYun's</span>
        <span>Website!</span>
        <span>💻</span>
      </p>
    </LoadingWrapper>
  )
}

export default Loading

const beat1 = keyframes`
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(0.7);
  }
  100% {
    transform: scaleY(0);
  }
`

const beat2 = keyframes`
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(0.5);
  }
  100% {
    transform: scaleY(0);
  }
`

const beat3 = keyframes`
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(0.3);
  }
  100% {
    transform: scaleY(0);
  }
`

const displayAni = keyframes`
  0%{opacity:1};
  70%{opacity:1};
  100%{opacity:0};
`

const movingSpell = keyframes`
  0%{transform: translate(0, 0);};
  70%{transform: translate(0, -10px);};
  100%{transform: translate(0, 0);};
`

const LoadingWrapper = styled.div`
  background-color: #f0f1f3;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999999;
  animation: ${displayAni} 2s;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin-bottom: -100px;
    color: #aaa;

    & span {
      animation: ${movingSpell} 0.5s;
      display: inline-block;
      animation-fill-mode: backwards;
      margin-right: 4px;

      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
      &:nth-child(4) {
        animation-delay: 0.8s;
      }
      &:nth-child(5) {
        animation-delay: 1s;
      }
    }
  }
`

const WaveContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & .wave-bar {
    display: inline-block;
    width: 10px;
    height: 50px;
    background-color: #a1c2c5;
    animation: ${beat1} 0.7s infinite;
    transform-origin: 0 100%;
    transform: scaleY(0.1);

    &:nth-child(2n) {
      animation-name: ${beat2};
      animation-delay: 0.2s;
      background-color: #ddd;
    }
    &:nth-child(3n) {
      animation-name: ${beat3};
      animation-delay: 0.5s;
      animation-duration: 0.5s;
      background-color: #569197;
    }
    &:nth-child(4n) {
      animation-name: ${beat2};
      animation-delay: 0.4s;
      animation-duration: 0.8s;
    }
    &:nth-child(5n) {
      animation-delay: 0.6s;
    }
    &:nth-child(6n) {
      animation-delay: 0.2s;
      background-color: #7eaebc;
    }
  }
`
