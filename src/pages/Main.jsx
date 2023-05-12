import styled, { css, keyframes } from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import lpImage from '../assets/lecord2.png'
import { Link, Router, useNavigate } from 'react-router-dom'
import GithubLink from '../components/GithubLink'
import ScrollInfo from '../components/ScrollInfo'
import theme from '../utils/theme'

/** 바이닐 반지름, MenuWrapper 가로,세로 길이 */
let lpRadius = 650

if (window.innerWidth <= 1600) {
  lpRadius = 500
} else if (window.innerWidth >= 2060) {
  lpRadius = 800
}

const menuWidth = 4 * lpRadius
const menuHeight = lpRadius * (2 + Math.round(Math.sqrt(3) * 100) / 100)
/** MenuWrapper 회전 중심점(세로) */
const centralPoint = (1 + (2 / 3) * (Math.round(Math.sqrt(3) * 100) / 100)) * lpRadius

function Main() {
  const [degree, setDegree] = useState(0)
  const [nowMenu, setNowMenu] = useState('about')
  const [scrollStart, setScrollStart] = useState(false)
  const [onAnimation, setOnAnimation] = useState('')

  const portfolioMenuRef = useRef([])

  const movePage = useNavigate()

  /** 스크롤 쓰로틀링 */
  const onScrollEvent = e => {
    let timer
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      scrollStart === false ? setScrollStart(true) : setScrollStart(true)
      if (e.nativeEvent.wheelDelta > 0) {
        // scroll up
        setDegree(degree + 120)
        if (nowMenu === 'about') {
          setNowMenu('contect')
        } else if (nowMenu === 'contect') {
          setNowMenu('portfolio')
        } else setNowMenu('about')
      } else {
        // scroll down
        setDegree(degree - 120)
        if (nowMenu === 'about') {
          setNowMenu('portfolio')
        } else if (nowMenu === 'portfolio') {
          setNowMenu('contect')
        } else setNowMenu('about')
      }
      timer = null
    }, 200)
  }

  const onPortfolio = () => {
    if (nowMenu === 'portfolio') {
      // useRef 여러개 제어 출처 https://velog.io/@chaerin00/useRef%EB%A1%9C-%EC%97%AC%EB%9F%AC%EA%B0%9C%EC%9D%98-DOM%EC%A0%9C%EC%96%B4%ED%95%98%EA%B8%B0
      console.log(portfolioMenuRef.current[1])
      return 'animated'
    }
  }

  /** 타이틀로 링크 구분 */
  const onClickVinylLink = e => {
    setOnAnimation('onAnimation')
    let timer
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      movePage(`/${e.target.dataset.title}`, { state: `${e.target.dataset.subtitle}` })
      timer = null
    }, 1000)
  }

  return (
    <MainWrapper>
      <GithubLink />
      <MainTextWrapper>
        <p>DESIGN</p>
        <p>PUBLISHING</p>
        <p>DEVELOPMENT</p>
      </MainTextWrapper>
      <FlexWrapper className={onAnimation}>
        <MenuWrapper onWheel={onScrollEvent} style={{ transform: `rotate(${degree}deg)` }}>
          <VinylWrapper>
            <ImageWrapper className="imageWrapper" data-title="about" onClick={onClickVinylLink}>
              <VinylTitle>
                <p>About</p>
                <p>About</p>
              </VinylTitle>
            </ImageWrapper>
          </VinylWrapper>
          <VinylWrapper>
            <PortfolioMenu>
              <div
                ref={elem => (portfolioMenuRef.current[0] = elem)}
                className={nowMenu === 'portfolio' ? 'animated' : ''}
                data-title="portfolio"
                data-subtitle="jsreact"
                onClick={onClickVinylLink}
              >
                JS, React
              </div>
              <div
                ref={elem => (portfolioMenuRef.current[1] = elem)}
                className={nowMenu === 'portfolio' ? 'animated' : ''}
                data-title="portfolio"
                data-subtitle="publishing"
                onClick={onClickVinylLink}
              >
                Publishing
              </div>
              <div
                ref={elem => (portfolioMenuRef.current[2] = elem)}
                className={nowMenu === 'portfolio' ? 'animated' : ''}
                data-title="portfolio"
                data-subtitle="design"
                onClick={onClickVinylLink}
              >
                Design
              </div>
            </PortfolioMenu>
            <ImageWrapper
              className="imageWrapper"
              data-title="portfolio"
              onClick={onClickVinylLink}
            >
              <VinylTitle>
                <p>Portfolio</p>
                <p>Portfolio</p>
              </VinylTitle>
            </ImageWrapper>
          </VinylWrapper>
          <VinylWrapper>
            <ImageWrapper className="imageWrapper" data-title="contect" onClick={onClickVinylLink}>
              <VinylTitle>
                <p>Contect</p>
                <p>Contect</p>
              </VinylTitle>
            </ImageWrapper>
          </VinylWrapper>
        </MenuWrapper>
      </FlexWrapper>
      <ScrollInfo scrollStart={scrollStart} />
    </MainWrapper>
  )
}
export default Main

const turnVinyl1 = keyframes`
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
`

const turnVinyl2 = keyframes`
  0%{transform:rotate(120deg)}
  100%{transform:rotate(480deg)}
`

const turnVinyl3 = keyframes`
  0%{transform:rotate(240deg)}
  100%{transform:rotate(600deg)}
`

const portfolioMenuAnimation1 = keyframes`
0%{
  ransform: translate(-100%,150%);
}
40%{
  transform: translate(-100%,150%);}
100% {
  transform: translate(0,0);
}
`

const portfolioMenuAnimation2 = keyframes`
0%{
  transform: translate(-100%,150%);
}
40%{
  transform: translate(-50%,50%);}
100% {
  opacity:1;
  transform: translate(110%, -15%);
}
`

const portfolioMenuAnimation3 = keyframes`
0%{
  transform: translate(-100%,150%);
}
40%{
  transform: translate(-50%,50%);}
100% {
  opacity:1;
  transform: translate(188%, -2%);
}
`

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const PortfolioMenu = styled.div`
  position: absolute;
  right: 12%;
  bottom: -10.5%;
  transform: rotate(120deg);
  font-size: 1.1rem;
  width: 400px;
  height: 400px;
  color: white;
  cursor: pointer;

  @media screen and (${theme.laptop}) {
    right: 11%;
    bottom: -15%;
  }

  & > div {
    background-color: #9d8bc3;
    width: 120px;
    height: 120px;
    line-height: 110px;
    border-radius: 100%;
    display: block;
    text-align: center;
    border: 5px solid #9d8bc3;
    font-weight: 500;

    @media screen and (${theme.desktop2}) {
      width: 160px;
      height: 160px;
      line-height: 150px;
      font-size: 1.2rem;
    }

    &:nth-child(1) {
      transform: translate(0, 0);
      &.animated {
        animation: ${portfolioMenuAnimation1} 0.7s ease-in-out;
      }
    }
    &:nth-child(2) {
      transform: translate(110%, -15%);

      &.animated {
        animation: ${portfolioMenuAnimation2} 0.9s ease-in-out;
      }
    }
    &:nth-child(3) {
      transform: translate(188%, -2%);

      &.animated {
        animation: ${portfolioMenuAnimation3} 1.1s ease-in-out;
      }
    }

    &:hover {
      color: #9d8bc3;
      background-color: #f0f1f3;
      // box-shadow: 0 0 0 rgba(157, 139, 195);
    }
  }
`

const onAnimation = keyframes`
0%{transform:translate(0,0)}
75%{transform:translate(0,-${lpRadius / 3}px)}
// 80%{transform:translate(0,${lpRadius * 1.5}px)}
100%{transform:translate(0,${lpRadius * 1.5}px)}
`

const FlexWrapper = styled.div`
  position: fixed;
  left: calc(((${menuWidth}px - 100%) / 2) - (${menuWidth}px - 100%));
  top: calc(100vh - ${lpRadius}px);

  &.onAnimation {
    animation: ${onAnimation} 1s;
  }
`

const lpUp = keyframes`
  0%{transform:translate(0,${lpRadius}px)}
  100%{transform:translate(0,0)}
`

const MenuWrapper = styled.div`
  width: ${menuWidth}px;
  height: ${menuHeight}px;
  transform-origin: ${lpRadius * 2}px ${centralPoint}px;
  transition: 0.8s;
  animation: ${lpUp} 1s;
`

const ImageWrapper = styled.div`
  background-image: url(${lpImage});
  background-size: cover;
  width: ${lpRadius * 2}px;
  height: ${lpRadius * 2}px;
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  transition: 0.2s;
`

const VinylTitle = styled.div`
  // 중앙
  width: 32.3%;
  height: 32.3%;
  border-radius: 100%;
  position: absolute;
  left: 33.8%;
  top: 33.8%;
  overflow: hidden;

  &::before {
    // 구멍
    content: '';
    position: absolute;
    left: 45%;
    top: 45%;
    position: absolute;
    width: 10%;
    height: 10%;
    background-color: white;
    border-radius: 100%;
  }

  & p {
    // title
    width: 100%;
    text-align: center;
    font-size: 5rem;
    font-weight: 100;
    letter-spacing: 10px;
    color: white;

    &:nth-child(1) {
      margin: 18% auto 0 auto;
    }

    &:nth-child(2) {
      margin-top: 26%;
      transform: rotate(180deg);
    }
  }
`

const VinylWrapper = styled.div`
  &:active {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  }

  &:nth-child(1):hover > .imageWrapper {
    animation: ${turnVinyl1} 5s infinite linear;
    box-shadow: 0 0 50px #538d9f;
  }

  &:nth-child(2):hover > .imageWrapper {
    animation: ${turnVinyl2} 5s infinite linear;
    box-shadow: 0 0 50px #9d8bc3;
  }

  &:nth-child(3):hover > .imageWrapper {
    animation: ${turnVinyl3} 5s infinite linear;
    box-shadow: 0 0 50px #b7bc7e;
  }

  &:nth-child(1) > .imageWrapper {
    left: calc(50% - ${lpRadius}px);
    top: 0;

    & > div {
      background-color: #7eaebc;
    }
  }
  &:nth-child(2) > .imageWrapper {
    right: 0;
    bottom: 0;
    transform: rotate(120deg);

    & > div {
      background-color: #9d8bc3;
    }
  }
  &:nth-child(3) > .imageWrapper {
    left: 0;
    bottom: 0;
    transform: rotate(240deg);

    & > div {
      background-color: #b7bc7e;
    }
  }
`

const textAnimation = keyframes`
0%{transform:scaleY(0); display:none;}
100%{transform:scaleY(1); display:block;}
`

const MainTextWrapper = styled.div`
  // padding: 0.3% 1%;

  & p {
    font-size: 7rem;
    font-weight: 900;
    letter-spacing: 0.25rem;
    text-shadow: -1px 0px #222, 0px 1px #222, 1px 0px #222, 0px -1px #222;
    animation: ${textAnimation} 0.5s linear;

    @media screen and (${theme.desktop2}) {
      font-size: 12rem;
      line-height: 11rem;
    }

    &:nth-child(3n-2) {
      color: #f0f1f3;
      animation-delay: 0;
    }
    &:nth-child(3n-1) {
      color: #bbb;
      text-shadow: -1px 0px #bbb, 0px 1px #bbb, 1px 0px #bbb, 0px -1px #bbb;
      animation-delay: 0.3s;
      animation-fill-mode: backwards;
    }
    &:nth-child(3n) {
      animation-delay: 0.6s;
      animation-fill-mode: backwards;
    }
  }
`
