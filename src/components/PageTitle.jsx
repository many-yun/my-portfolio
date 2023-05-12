import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../utils/theme'

const PageTitle = e => {
  const [bgColor, setBgColor] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    if (e.title === 'about') {
      setBgColor('#7eaebc')
      setTitle('About')
    } else if (e.title === 'portfolio') {
      setBgColor('#9d8bc3')
      setTitle('Portfolio')
    } else if (e.title === 'contect') {
      setBgColor('#b7bc7e')
      setTitle('Contect')
    }

    if (e.nowHeight === -100) {
      setSubTitle('JS / React')
    } else if (e.nowHeight === -200) {
      setSubTitle('Publishing')
    } else if (e.nowHeight === -300) {
      setSubTitle('Design')
    } else setSubTitle('')
  }, [e.title, e.nowHeight])

  let subTitleHeight = -400

  if (e.title === 'portfolio' && e.inUnderPage === true && window.innerWidth >= 1600) {
    subTitleHeight = -400
  } else if (e.title === 'portfolio' && e.inUnderPage === false && window.innerWidth >= 1600) {
    subTitleHeight = -250
  } else if (
    e.title === 'portfolio' &&
    e.inUnderPage === true &&
    window.innerWidth <= 1600 &&
    window.innerWidth > 1280
  ) {
    subTitleHeight = -310
  } else if (
    e.title === 'portfolio' &&
    e.inUnderPage === false &&
    window.innerWidth <= 1600 &&
    window.innerWidth > 1280
  ) {
    subTitleHeight = -200
  } else if (e.title === 'portfolio' && e.inUnderPage === true && window.innerWidth <= 1280) {
    subTitleHeight = -230
  } else if (e.title === 'portfolio' && e.inUnderPage === false && window.innerWidth <= 1280) {
    subTitleHeight = -150
  } else if (e.title !== 'portfolio' && window.innerWidth > 1600) {
    subTitleHeight = -250
  } else if (e.title !== 'portfolio' && window.innerWidth <= 1600 && window.innerWidth > 1280) {
    subTitleHeight = -200
  } else if (e.title !== 'portfolio' && window.innerWidth <= 1280) {
    subTitleHeight = -150
  }

  return (
    <PageTitleWrapper style={{ top: `${subTitleHeight}px` }}>
      <TitleBG style={{ backgroundColor: `${bgColor}` }}></TitleBG>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </PageTitleWrapper>
  )
}

export default PageTitle

const SpinLp = keyframes`
0%{transform:translate(0,-250px) rotate(-720deg)}
100%{transform:translate(0,0) rotate(0deg)}
`

const PageTitleWrapper = styled.div`
  text-align: center;
  width: 500px;
  height: 500px;
  border-radius: 100%;
  position: fixed;
  top: -250px;
  left: calc(50% - 250px);
  overflow: hidden;
  animation: ${SpinLp} 1s;
  z-index: 999;
  transition: 0.2s;

  & > svg {
    position: absolute;
    bottom: 20px;
    left: calc(50% - 15px);
    color: white;
    font-size: 30px;
    cursor: pointer;
  }

  @media screen and (${theme.laptop}) {
    width: 400px;
    height: 400px;
    top: -200px;
    left: calc(50% - 200px);
  }

  @media screen and (${theme.laptop2}) {
    width: 300px;
    height: 300px;
    top: -150px;
    left: calc(50% - 150px);
  }
`

const TitleBG = styled.div`
  width: 100%;
  height: 100%;

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
`

const Title = styled.p`
  color: white;
  font-size: 5rem;
  font-weight: 800;
  margin-top: -180px;

  @media screen and (${theme.laptop}) {
    margin-top: -150px;
  }

  @media screen and (${theme.laptop2}) {
    font-size: 4rem;
    margin-top: -120px;
  }
`

const SubTitle = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (${theme.laptop}) {
    margin-top: 10px;
  }

  @media screen and (${theme.laptop2}) {
    margin-top: 15px;
  }
`
