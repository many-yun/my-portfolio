import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import GithubLink from '../components/GithubLink'
import HamburgerMenu from '../components/HamburgerMenu'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'

const AboutMe = () => {
  const [goToPage, setGoToPage] = useState('')

  const movePage = useNavigate()

  const location = useLocation()
  const nowLocation = location.pathname.split('/')[1]

  const onClickPrevPage = () => {
    setGoToPage('goPrevPage')
    let timer
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      movePage(`/`)
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
      movePage(`/portfolio`)
      timer = null
    }, 1000)
  }

  return (
    <AboutMeWrapper className={goToPage}>
      <HamburgerMenu />
      <GithubLink />
      <PageTitle title={nowLocation} />
      <FlexWrapper>
        <AboutTextWrapper>
          <AboutTextLeft>
            <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>점</span>점 더 다양한 기술들을
            배워가며 더 정돈된 방법으로 개발을 하고, 사이트를 구현하는 일에 큰 재미와 만족감을
            느낍니다. <br />
            현재 웹 디자이너 2년 6개월, 6개월간의 웹 퍼블리셔 경력을 잠시 멈추고 프론트엔드에 관한
            꿈을 키우며 공부에 전념하고 있습니다. <br />
            <br />
            최신 기술에 발담그며 개발자라는 하나의 무리에 속해간다는 느낌을 받는 것이 좋습니다.
            앞으로도 꾸준히 좋은 개발을 위해 공부할 것이며, 실질적으로 회사에 도움이 되는 개발자가
            되기를 희망합니다.
          </AboutTextLeft>
          <AboutTextRight>
            <div>
              <h2>Skills</h2>
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
              <span>React</span>
              <span>Redux</span>
              <span>MongoDB</span>
              <span>Postman</span>
              <span>Git</span>
              <span>Github</span>
            </div>
            <div>
              <h2>Studying</h2>
              <span>TypeScript</span>
              <span>NextJS</span>
            </div>
          </AboutTextRight>
        </AboutTextWrapper>
        <NextAndPrev>
          <PrevPage onClick={onClickPrevPage} style={{ marginRight: '30px' }}>
            <span>Home</span>
            <BiSkipPrevious /> PREV
          </PrevPage>
          <NextPage onClick={onClickNextPage}>
            NEXT <BiSkipNext /> <span>Portfolio</span>
          </NextPage>
        </NextAndPrev>
      </FlexWrapper>
      <AboutBottomTextWrapper>
        <div>
          <span>DESIGN</span>
          <span>PUBLISHING</span>
          <span>DEVELOPMENT</span>
        </div>
        <div>
          <span>DESIGN</span>
          <span>PUBLISHING</span>
          <span>DEVELOPMENT</span>
        </div>
      </AboutBottomTextWrapper>
    </AboutMeWrapper>
  )
}

export default AboutMe

const slide = keyframes`
// 텍스트 무한 슬라이드
100% {
  transform: translateX(-100%);
}
`

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

const NextAndPrev = styled.div`
  margin: 40px 0 -80px 0;
  font-size: 1.1rem;
  display: flex;

  & div {
    cursor: pointer;
    opacity: 0.3;
    transition: 0.1s;
    position: relative;

    & span {
      position: absolute;
      background-color: black;
      color: white;
      padding: 0 3px;
      opacity: 0;
    }

    &:hover {
      opacity: 1;

      & span {
        opacity: 1;
      }
    }
  }

  & svg {
    margin-top: -4px;
    font-size: 1.7rem;
    vertical-align: middle;
  }
`

const PrevPage = styled.div`
  & span {
    right: 90px;
  }
`

const NextPage = styled.div`
  & span {
    left: 85px;
  }
`

const AboutBottomTextWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slide} 20s linear infinite;
  }

  & span {
    font-size: 7rem;
    font-weight: 900;
    line-height: 5.5rem;
    letter-spacing: 0.25rem;
    text-shadow: -1px 0px #222, 0px 1px #222, 1px 0px #222, 0px -1px #222;

    &:nth-child(1) {
      color: #f0f1f3;
      text-shadow: -1px 0px #aaa, 0px 1px #aaa, 1px 0px #aaa, 0px -1px #aaa;
    }
    &:nth-child(2) {
      opacity: 0.1;
    }
    &:nth-child(3) {
      color: #f0f1f3;
    }
  }
`

const AboutMeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;

  &.goPrevPage {
    animation: ${goPrevPage} 1s ease-in-out;
  }
  &.goNextPage {
    animation: ${goNextPage} 1s ease-in-out;
  }

  & h1 {
    text-align: center;
    width: 500px;
    height: 500px;
    background-color: #7eaebc;
    border-radius: 100%;
    position: fixed;
    top: -250px;
    left: calc(50% - 250px);
    line-height: 730px;
    color: white;
    font-size: 5rem;
    font-weight: 800;

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
  }
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 9;
`

const showText = keyframes`
  0%{opacity:0; transform:translate(0,-50px)}
  100%{opacity:1; transform:translate(0,0)}
`

const AboutTextWrapper = styled.div`
  display: flex;
  word-break: keep-all;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0 15%;

  & > div {
    width: 50%;
    padding: 30px;
    animation: ${showText} 1s;
    animation-fill-mode: backwards;
  }
`

const AboutTextLeft = styled.div``

const AboutTextRight = styled.div`
  & div {
    margin-bottom: 30px;

    & h2 {
      font-weight: 600;
      margin-bottom: 10px;
      font-size: 1.3rem;
    }

    & span {
      border: 1px solid black;
      padding: 2px 10px;
      margin: 0 10px 10px 0;
      border-radius: 20px;
      background-color: black;
      color: white;
      display: inline-block;
    }

    &:nth-child(2) {
      & h2 {
        color: #777;
      }

      & span {
        opacity: 0.3;
        // background-color: rgba(0, 0, 0, 0);
      }
    }
  }
`
