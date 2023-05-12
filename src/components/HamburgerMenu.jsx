import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import lpImage from '../assets/lecord2.png'
import { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { RxFace } from 'react-icons/rx'
import { MdMonitor } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'

import theme from '../utils/theme'

const HamburgerMenu = e => {
  const location = useLocation()
  const movePage = useNavigate()
  const nowLocation = location.pathname.split('/')[1]

  const [menuOn, setMenuOn] = useState('off')
  const [locationName, setLocationName] = useState(nowLocation)
  const [menuColor, setMenuColor] = useState('')

  useEffect(() => {
    if (locationName === 'about') {
      setMenuColor('#7eaebc')
    } else if (locationName === 'portfolio') {
      setMenuColor('#9d8bc3')
    } else if (locationName === 'contect') {
      setMenuColor('#b7bc7e')
    } else if (locationName === 'jsreact') {
      setMenuColor('#a597c5')
    } else if (locationName === 'publishing') {
      setMenuColor('#aea1cb')
    } else if (locationName === 'design') {
      setMenuColor('#b9add5')
    }
  }, [locationName])

  const onClickMenu = () => {
    menuOn === 'off' ? setMenuOn('on') : setMenuOn('off')
  }

  const onLocationNameChange = e => {
    setLocationName(e.target.dataset.title)
  }

  const onClickMovePage = e => {
    movePage(`/${e.target.dataset.to}`, {
      state: { subTitle: `${e.target.dataset.title}` },
    })
  }

  return (
    <HumburgerMenuWrapper>
      <HumburgerWrapper onClick={onClickMenu}>
        <HumburgerWrapperWrapper className={menuOn}>
          <div></div>
          <div></div>
          <div></div>
        </HumburgerWrapperWrapper>
      </HumburgerWrapper>
      <MenuListWrapper className={menuOn} style={{ backgroundColor: `${menuColor}` }}>
        <LinkWrapper>
          <Link to="/">
            <FaHome /> Home
          </Link>
          <Link to="/about" data-title="about" onMouseOver={onLocationNameChange}>
            <RxFace /> About
          </Link>
          <Link to="/portfolio" data-title="portfolio" onMouseOver={onLocationNameChange}>
            <MdMonitor /> Portfolio
          </Link>
          <SubLinkWrapper>
            <div
              data-to="portfolio"
              data-title="jsreact"
              onMouseOver={onLocationNameChange}
              onClick={onClickMovePage}
            >
              - JS/React
            </div>
            <div
              data-to="portfolio"
              data-title="publishing"
              onMouseOver={onLocationNameChange}
              onClick={onClickMovePage}
            >
              - Publishing
            </div>
            <div
              data-to="portfolio"
              data-title="design"
              onMouseOver={onLocationNameChange}
              onClick={onClickMovePage}
            >
              - Design
            </div>
          </SubLinkWrapper>
          <Link to="/contect" data-title="contect" onMouseOver={onLocationNameChange}>
            <FiMail /> Contect
          </Link>
        </LinkWrapper>
        <LpImageListWrapper>
          <LpImageWrapper>
            <p>{locationName}</p>
          </LpImageWrapper>
        </LpImageListWrapper>
      </MenuListWrapper>
    </HumburgerMenuWrapper>
  )
}

export default HamburgerMenu

const turnVinyl = keyframes`
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
`

const LpImageListWrapper = styled.div``

const LpImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 8%;
  right: -10%;
  background-image: url(${lpImage});
  background-size: cover;
  animation: ${turnVinyl} 5s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: white;
    font-size: 1.1rem;
  }

  @media screen and (${theme.laptop}) {
    width: 300px;
    height: 300px;
  }

  @media screen and (${theme.laptop2}) {
    width: 250px;
    height: 250px;
  }
`

const HumburgerMenuWrapper = styled.div`
  position: fixed;
  z-index: 998;
`

const HumburgerWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`

const HumburgerWrapperWrapper = styled.div`
  width: 25px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.5;
  }

  & > div {
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: black;
    border: 1px solid #f0f1f3;
    box-sizing: content-box;
  }
  &.on div {
    background-color: white;
  }
`

const MenuListWrapper = styled.div`
  position: fixed;
  top: -20vh;
  width: 35%;
  height: 150vh;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  left: -40%;
  transform: rotate(0deg);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
  }

  &.on {
    left: -8%;
    transform: rotate(-15deg);
    // display: flex;
  }
`

const LinkWrapper = styled.div`
  padding-left: 150px;
  margin-top: -200px;

  & a {
    display: block;
    color: white;
    font-size: 2.3rem;
    padding: 20px 0;
    transition: 0.1s;

    @media screen and (${theme.laptop2}) {
      font-size: 1.7rem;
      padding: 15px 0;
    }

    &:hover {
      transform: translate(20px, 0);
    }

    & svg {
      vertical-align: bottom;
    }
  }

  @media screen and (${theme.laptop}) {
    margin-top: -150px;
  }
`

const SubLinkWrapper = styled.div`
  & > div {
    display: block;
    font-size: 1.3rem;
    padding: 10px 30px;
    cursor: pointer;
    color: white;
    transition: 0.1s;

    &:hover {
      transform: translate(20px, 0);
    }

    @media screen and (${theme.laptop2}) {
      font-size: 1.1rem;
      padding: 8px 20px;
    }
  }
`
