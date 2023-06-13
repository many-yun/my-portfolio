import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

import HamburgerMenu from '../components/HamburgerMenu'
import PageTitle from '../components/PageTitle'
import GithubLink from '../components/GithubLink'
import JsReact from '../components/portfolio/JsReact'
import Publishing from '../components/portfolio/Publishing'
import Design from '../components/portfolio/Design'

import lpImage from '../assets/lecord2.png'
import { FaReact } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { DiPhotoshop } from 'react-icons/di'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { BsChevronDoubleDown } from 'react-icons/bs'
import theme from '../utils/theme'
import OpenPcWarning from '../components/OpenPcWarning'

const Portfolio = e => {
  const location = useLocation()
  const state = location.state
  const nowLocation = location.pathname.split('/')[1]
  let firstNowHeight = 0

  const movePage = useNavigate()

  if (state !== null && state.subTitle === 'jsreact') {
    firstNowHeight = -100
  } else if (state !== null && state.subTitle === 'publishing') {
    firstNowHeight = -200
  } else if (state !== null && state.subTitle === 'design') {
    firstNowHeight = -300
  } else firstNowHeight = 0

  const [goToPage, setGoToPage] = useState('')
  const [nowHeight, setNowHeight] = useState(firstNowHeight)
  const [inUnderPage, setInUnderPage] = useState(false)

  /** 스크롤 쓰로틀링 */
  const onScrollEvent = e => {
    let timer
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      if (e.nativeEvent.wheelDelta > 0) {
        // scroll up
        setNowHeight(nowHeight + 100)
        if (nowHeight >= 0) {
          setNowHeight(0)
        }
      } else {
        // scroll down
        setNowHeight(nowHeight - 100)
        if (nowHeight <= -300) {
          setNowHeight(-300)
        }
      }
      timer = null
    }, 200)
  }

  useEffect(() => {
    nowHeight === 0 ? setInUnderPage(false) : setInUnderPage(true)
  }, [nowHeight, inUnderPage])

  const onClickPrevPage = () => {
    setGoToPage('goPrevPage')
    let timer
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      movePage(`/about`)
      timer = null
    }, 1000)
  }

  const onClickNextPage = () => {
    setGoToPage('goNextPage')
    let timer
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      movePage(`/contect`)
      timer = null
    }, 1000)
  }

  let mediaNowHeight = 55

  if (nowHeight === 0 && window.innerWidth > 1600) {
    mediaNowHeight = 170
  } else if (nowHeight !== 0 && window.innerWidth > 1600) {
    mediaNowHeight = 55
  } else if (nowHeight === 0 && window.innerWidth <= 1600 && window.innerWidth > 1280) {
    mediaNowHeight = 140
  } else if (nowHeight !== 0 && window.innerWidth <= 1600 && window.innerWidth > 1280) {
    mediaNowHeight = 50
  } else if (nowHeight === 0 && window.innerWidth <= 1280) {
    mediaNowHeight = 100
  } else if (nowHeight !== 0 && window.innerWidth <= 1280) {
    mediaNowHeight = 40
  }

  return (
    <PortfolioWrapper onWheel={onScrollEvent} className={goToPage}>
      <OpenPcWarning />
      <GithubLink />
      <PageTitle title={nowLocation} inUnderPage={inUnderPage} nowHeight={nowHeight} />
      <HamburgerMenu nowHeight={nowHeight} />
      <PortPageWrapper style={{ transform: `translate(0,${nowHeight}vh)` }}>
        <PortfolioList>
          <ListJsReact
            onClick={() => {
              setNowHeight(-100)
            }}
          >
            <Lecord className="lecord">
              <div className="albumJacket">
                <FaReact />
              </div>
            </Lecord>
            <AlbumJacket className="albumJacket">
              <FaReact />
            </AlbumJacket>
            <ListTitle className="listTitle">JS / React</ListTitle>
            <ListExplanation>
              JS / React를 사용하여 제작한 개인 · 팀 프로젝트 모음입니다.
            </ListExplanation>
          </ListJsReact>
          <ListPublishing
            onClick={() => {
              setNowHeight(-200)
            }}
          >
            <Lecord className="lecord">
              <div className="albumJacket">
                <BsCodeSlash />
              </div>
            </Lecord>
            <AlbumJacket className="albumJacket">
              <BsCodeSlash />
            </AlbumJacket>
            <ListTitle className="listTitle">Publishing</ListTitle>
            <ListExplanation>
              HTML5와 CSS3를 사용하여 하드코딩으로 제작한 사이트입니다.
            </ListExplanation>
          </ListPublishing>
          <ListDesign
            onClick={() => {
              setNowHeight(-300)
            }}
          >
            <Lecord className="lecord">
              <div className="albumJacket">
                <DiPhotoshop />
              </div>
            </Lecord>
            <AlbumJacket className="albumJacket">
              <DiPhotoshop />
            </AlbumJacket>
            <ListTitle className="listTitle">Design</ListTitle>
            <ListExplanation>웹 디자인을 진행한 작업물입니다.</ListExplanation>
          </ListDesign>
        </PortfolioList>
        <JsReact />
        <Publishing />
        <Design />
        <GoDownArrow>
          <BsChevronDoubleDown />
        </GoDownArrow>
      </PortPageWrapper>
      <NextAndPrev style={{ top: `${mediaNowHeight}px` }}>
        <PrevPage onClick={onClickPrevPage} style={{ marginRight: '20px' }}>
          <span>About</span>
          <BiSkipPrevious /> PREV
        </PrevPage>
        <NextPage onClick={onClickNextPage}>
          NEXT <BiSkipNext /> <span>Contect</span>
        </NextPage>
      </NextAndPrev>
    </PortfolioWrapper>
  )
}

export default Portfolio

const goPrevPage = keyframes`
0%{transform: translate(0%, 0);}
60%{transform: translate(-10%, 0);}
80%{transform: translate(100%, 0);}
100%{transform: translate(100%, 0);}
`

const goNextPage = keyframes`
0%{transform: translate(0%, 0);}
60%{transform: translate(10%, 0);}
80%{transform: translate(-100%, 0);}
100%{transform: translate(-100%, 0);}
`

const goDown = keyframes`
0%{transform:translate(0,0)}
100%{transform:translate(0,20px)}
`

const GoDownArrow = styled.div`
  width: 100px;
  position: absolute;
  left: calc(50% - 50px);
  top: 90vh;

  & svg {
    font-size: 2.2rem;
    color: #bbb;
    animation: ${goDown} 1s infinite;
  }
`

const NextAndPrev = styled.div`
  margin: 0 auto;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 300px;
  left: calc(50% - 150px);
  top: 55px;
  z-index: 9999;
  color: white;
  transition: 0.1s;

  & div {
    cursor: pointer;
    opacity: 0.3;
    transition: 0.1s;
    position: relative;

    & span {
      position: absolute;
      background-color: black;
      padding: 0 3px;
      opacity: 0;
      margin-top: 2px;
    }

    &:hover {
      opacity: 1;

      & span {
        opacity: 1;
      }
    }
  }

  & svg {
    font-size: 1.7rem;
    margin-top: -3px;
    vertical-align: middle;
  }
`

const PrevPage = styled.div`
  & span {
    right: 80px;
  }
`

const NextPage = styled.div`
  & span {
    left: 80px;
  }
`

const PortfolioWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &.goPrevPage {
    animation: ${goPrevPage} 1s ease-in-out;
  }
  &.goNextPage {
    animation: ${goNextPage} 1s ease-in-out;
  }
`

const PortPageWrapper = styled.div`
  transition: 0.2s;

  & > div {
    width: 100%;
    height: 100vh;
  }
`

const ListExplanation = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  line-height: 1.3rem;
  word-break: keep-all;
  color: #555;
`

const ListTitle = styled.p`
  margin-top: 330px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: #555;

  @media screen and (${theme.laptop2}) {
    margin-top: 230px;
  }
`

const AlbumJacket = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (${theme.laptop2}) {
    width: 200px;
    height: 200px;
  }
`
const turnVinyl = keyframes`
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
`

const Lecord = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  background-image: url(${lpImage});
  background-size: cover;
  animation: ${turnVinyl} 5s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${theme.laptop2}) {
    width: 200px;
    height: 200px;
  }

  & > div {
    border-radius: 100%;
    width: 33%;
    height: 33%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      font-size: 4.5rem;
    }
  }
`

const ListJsReact = styled.div`
  & .albumJacket {
    background-color: #222;
  }
  & svg {
    color: #61dbfb;
    font-size: 8rem;
  }
`

const ListPublishing = styled.div`
  & .albumJacket {
    background-color: #29abe2;
  }

  & svg {
    color: #4d4d4d;
    font-size: 8rem;
  }
`

const ListDesign = styled.div`
  & .albumJacket {
    background-color: #001e36;
  }

  & svg {
    color: #31a8ff;
    font-size: 8rem;
  }
`

const PortfolioList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 70px;
    position: relative;
    width: 300px;
    height: 300px;
    transition: 0.2s;
    cursor: pointer;
    transition: 0.2s;

    @media screen and (${theme.laptop2}) {
      width: 200px;
      height: 200px;
      margin: 50px;
    }

    &:hover {
      width: 450px;

      @media screen and (${theme.laptop2}) {
        width: 300px;
      }

      & .listTitle {
        color: black;
      }
    }
  }
`
