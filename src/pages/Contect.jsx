import styled, { keyframes } from 'styled-components'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import GithubLink from '../components/GithubLink'
import HamburgerMenu from '../components/HamburgerMenu'
import { FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { useState } from 'react'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'

const Connect = () => {
  const location = useLocation()
  const nowLocation = location.pathname.split('/')[1]
  const movePage = useNavigate()
  const [goToPage, setGoToPage] = useState('')

  const onClickPrevPage = () => {
    setGoToPage('goPrevPage')
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
    <ContectWrapper className={goToPage}>
      <GithubLink />
      <PageTitle title={nowLocation} />
      <HamburgerMenu />
      <FlexWrapper>
        <ContectTextWrapper>
          <div>
            <Link to="https://github.com/many-yun" target="_blank">
              <FaGithub />
            </Link>
            <p>many-yun</p>
          </div>
          <div>
            <Link to="mailto:dayoon1124@naver.com">
              <IconWrapper>
                <IoMdMail style={{ color: 'white', fontSize: '2.5rem', marginTop: '12px' }} />
              </IconWrapper>
            </Link>
            <p>dayoon1124@naver.com</p>
          </div>
        </ContectTextWrapper>
      </FlexWrapper>
      <NextAndPrev>
        <PrevPage onClick={onClickPrevPage} style={{ marginRight: '30px' }}>
          <span>Portfolio</span>
          <BiSkipPrevious /> PREV
        </PrevPage>
      </NextAndPrev>
    </ContectWrapper>
  )
}

export default Connect

const goPrevPage = keyframes`
0%{transform: translate(0%, 0);}
60%{transform: translate(-10%, 0);}
80%{transform: translate(100%, 0);}
100%{transform: translate(100%, 0);}
`

const ContectWrapper = styled.div`
  overflow: hidden;

  &.goPrevPage {
    animation: ${goPrevPage} 1s ease-in-out;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const ContectTextWrapper = styled.div`
  display: flex;
  text-align: center;
  font-size: 1.3rem;

  & > div {
    padding: 0 150px;
  }

  & a {
    padding-bottom: 20px;
    display: inline-block;
    color: black;

    & svg {
      font-size: 4rem;

      &:hover {
        color: #989d5e;
      }
    }

    & p {
      margin-top: 20px;
    }
  }
`

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: black;
  border-radius: 100%;
  display: inline-block;
  transition: 0.1s;

  &:hover {
    background-color: #989d5e;
  }
`

const NextAndPrev = styled.div`
  margin: 40px 0 -80px 0;
  font-size: 1.1rem;
  display: flex;
  position: absolute;
  left: calc(50% - 50px);
  bottom: 30vh;

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
