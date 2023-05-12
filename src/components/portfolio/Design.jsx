import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import designCover6 from '../../assets/design_cover6.jpg'
import designCover9 from '../../assets/design_cover9.jpg'

const companyBG = designCover6
const shoppingBG = 'https://sinbiweb.co.kr/file/item/18_1.jpg'
const lawBG = 'https://sinbiweb.co.kr/file/item/39_1.jpg'
const hospitalBG = 'https://sinbiweb.co.kr/file/item/23_1.jpg'
const escapeBG = 'https://escapelab.co.kr/file/main_img/1_a.jpg'
const moneyBG = 'https://sinbiweb.co.kr/file/item/10_1.jpg'
const carBG = 'https://sinbiweb.co.kr/file/item/51_1.jpg'
const estateBG = 'https://sinbiweb.co.kr/file/item/31_1.jpg'
const charchBG = designCover9
const childBG = 'https://sinbiweb.co.kr/file/item/28_1.jpg'

const Design = () => {
  return (
    <DesignWrapper>
      <DesignLeft>
        <div>
          <BlackBG>
            <h3>쇼핑몰</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=4&num=18"
                target="_blank"
              >
                쇼핑몰 템플릿
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>어린이집</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=12&num=28"
                target="_blank"
              >
                어린이집 템플릿
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>법무/세무</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=8&num=39"
                target="_blank"
              >
                법무/세무 템플릿
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>자동차매매</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=18&num=51"
                target="_blank"
              >
                자동차매매 템플릿
              </a>
            </div>
          </BlackBG>
        </div>
      </DesignLeft>
      <DesignRight>
        <div>
          <BlackBG>
            <h3>방탈출카페</h3>
            <div className="link">
              <a href="https://escapelab.co.kr/layout/res/home.php?go=main" target="_blank">
                ESCAPE LAP
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=10&num=19"
                target="_blank"
              >
                방탈출 템플릿1
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=10&num=47"
                target="_blank"
              >
                방탈출 템플릿2
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>회사홍보</h3>
            <div className="link">
              <a href="http://elruby.sinbiweb.net/web/home.php" target="_blank">
                elruby 엘루비
              </a>
              <a href="http://mkspub.com/" target="_blank">
                명경사
              </a>
              <a href="http://www.yrtaxsave.co.kr/layout/res/home.php?go=main" target="_blank">
                세무법인 예람 양재지점
              </a>
              <a href="http://urside.co.kr/layout/res/home.php?go=main" target="_blank">
                유어사이드
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=3&num=32"
                target="_blank"
              >
                회사홍보 템플릿1
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=3&num=35"
                target="_blank"
              >
                회사홍보 템플릿2
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>병원/한의원</h3>
            <div className="link">
              <a href="http://pysneurologyclinic.co.kr/layout/pc/home.php?go=main" target="_blank">
                박용식 신경과의원
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=9&num=23"
                target="_blank"
              >
                병원 템플릿
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>부동산</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=7&num=31"
                target="_blank"
              >
                부동산 템플릿1
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=7&num=55"
                target="_blank"
              >
                부동산 템플릿2
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>교회/성당</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=11&num=30"
                target="_blank"
              >
                교회/성당 템플릿
              </a>
            </div>
          </BlackBG>
        </div>
        <div>
          <BlackBG>
            <h3>대출/금융</h3>
            <div className="link">
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=6&num=10"
                target="_blank"
              >
                대출/금융 템플릿1
              </a>
              <a
                href="https://sinbiweb.co.kr/web/home.php?go=item.view&sol_num=6&num=45"
                target="_blank"
              >
                대출/금융 템플릿2
              </a>
            </div>
          </BlackBG>
        </div>
      </DesignRight>
    </DesignWrapper>
  )
}

export default Design

const BlackBG = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.2s;
  z-index: 9;
  padding: 20px;

  & h3 {
    font-size: 1.1rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 15px;
  }

  & .link {
    margin-top: 15px;

    & a {
      display: inline-block;
      color: black;
      padding: 10px;
      border: 1px solid black;
      border-radius: 30px;
      margin: 0 10px 10px 0;
      font-size: 0.9rem;
      transition: 0.1s;

      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`

const DesignWrapper = styled.div`
  // max-width: 900px;
  margin: 0 auto;
  padding: 7% 20%;
  display: flex;
  // background-color: rgba(255, 255, 255, 1);

  & > div {
    position: relative;
    opacity: 1;
  }

  & > div > div {
    // border-radius: 20px;
    position: absolute;
    transition: 0.2s;
    box-shadow: 7px 7px 0 rgba(0, 0, 0, 1);
    overflow: hidden;
    border: 2px solid black;

    &:hover div {
      opacity: 1;
      display: block;
    }
  }
`

const DesignLeft = styled.div`
  width: 30%;
  height: 100%;

  & > div:nth-child(1) {
    width: 90%;
    height: calc(30% - 10px);
    right: 0;
    top: 0;
    z-index: 2;
    background: url(${shoppingBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: 130%;
      height: calc(50% - 10px);
    }
  }

  & > div:nth-child(2) {
    width: 60%;
    height: calc(20% - 10px);
    right: 0;
    top: 30%;
    background: url(${childBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: 100%;
    }
  }

  & > div:nth-child(3) {
    width: 100%;
    height: calc(30% - 10px);
    right: 0;
    top: 50%;
    z-index: 2;
    background: url(${lawBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: 110%;
      height: 50%;
    }
  }

  & > div:nth-child(4) {
    width: 50%;
    height: 20%;
    right: 0;
    top: 80%;
    background: url(${carBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: 140%;
      height: 30%;
      margin-bottom: -30%;
      z-index: 3;
    }
  }
`

const DesignRight = styled.div`
  width: 70%;
  height: 100%;
  margin-left: 10px;

  & > div:nth-child(1) {
    width: 70%;
    height: calc(20% - 10px);
    bottom: calc(80% + 10px);
    left: 0;
    z-index: 4;
    background: url(${escapeBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: 100%;
      height: 25%;
      margin-top: 5%;
    }
  }

  & > div:nth-child(2) {
    width: 50%;
    height: calc(55% - 10px);
    top: 20%;
    left: 0;
    z-index: 3;
    background: url(${companyBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: 100%;
    }
  }

  & > div:nth-child(3) {
    width: calc(50% - 10px);
    height: calc(30% - 10px);
    top: 20%;
    right: 0;
    z-index: 2;
    background: url(${hospitalBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      margin-right: calc(-20% - 10px);
      width: 70%;
      height: calc(55% - 10px);
    }
  }

  & > div:nth-child(4) {
    width: 35%;
    height: calc(25% - 10px);
    top: 50%;
    left: calc(50% + 10px);
    background: url(${estateBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      width: calc(50% - 10px);
    }
  }

  & > div:nth-child(5) {
    width: 40%;
    height: 25%;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: url(${charchBG}) no-repeat center center;
    background-size: cover;

    &:hover {
      width: 100%;
    }
  }

  & > div:nth-child(6) {
    width: calc(60% - 10px);
    height: calc(20% - 10px);
    top: 75%;
    left: calc(40% + 10px);
    background: url(${moneyBG}) no-repeat top center;
    background-size: cover;

    &:hover {
      height: 40%;
    }
  }
`
