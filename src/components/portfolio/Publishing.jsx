import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import { FiLink } from 'react-icons/fi'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb'

import theme from '../../utils/theme'
import lpImage from '../../assets/lecord2.png'
import pubCover2 from '../../assets/pub-cover2.jpeg'
import pubCover4 from '../../assets/pub-cover4.jpeg'
import pubCover5 from '../../assets/pub-cover5.jpeg'
import pubCover7 from '../../assets/pub-cover7.jpeg'
import pubCover8 from '../../assets/pub-cover8.jpeg'

const widhtAndHeight = 400

const Publishing = () => {
  const [sliderPosition, setSliderPosition] = useState(0)

  const onClickPublishingNext = () => {
    if (window.innerWidth <= 1600) {
      sliderPosition <= 6 ? setSliderPosition(sliderPosition + 1) : setSliderPosition(7)
    } else if (window.innerWidth > 1600) {
      sliderPosition <= 5 ? setSliderPosition(sliderPosition + 1) : setSliderPosition(6)
    }
  }

  const onClickPublishingPrev = () => {
    sliderPosition >= 0 ? setSliderPosition(sliderPosition - 1) : setSliderPosition(0)
  }

  return (
    <PublishingWrapper>
      <SliderArrowBtn>
        <PrevBtn onClick={onClickPublishingPrev} style={{ marginRight: '10px' }}>
          <TbPlayerTrackPrevFilled />
        </PrevBtn>
        <NextBtn onClick={onClickPublishingNext}>
          <TbPlayerTrackNextFilled />
        </NextBtn>
      </SliderArrowBtn>
      <SlideWrapper
        style={{ transform: `translate(-${(widhtAndHeight + 130) * sliderPosition}px,0)` }}
      >
        <PublishingWork1 to="https://www.asiaea.or.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 아시아교류협회
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork1>
        <PublishingWork2 to="http://creature.syn.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 크리처 Creature
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork2>
        <PublishingWork3 to="http://ansim2021.syn.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 2021 안심윤리 페스티벌
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork3>
        <PublishingWork4 to="http://tiamo.syn.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 티아모 Tiamo
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork4>
        <PublishingWork5 to="http://eunwoo.syn.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 은우소프트
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork5>
        <PublishingWork6 to="https://www.coripack.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 코리팩 CORIPACK
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork6>
        <PublishingWork7 to="http://ovucosta.syn.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 오뷰코스타
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork7>
        <PublishingWork8 to="http://bk.syn.co.kr/" target="_blank">
          <PublishingLp></PublishingLp>
          <PublishingCover className="publishingCover">
            <BlackBG className="blackBG">
              <p>
                <FiLink /> 비케이(주)
              </p>
            </BlackBG>
          </PublishingCover>
        </PublishingWork8>
      </SlideWrapper>
    </PublishingWrapper>
  )
}

export default Publishing

const turnVinyl = keyframes`
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
`

const SliderArrowBtn = styled.div`
  display: flex;
  position: absolute;
  width: 200px;
  left: calc(50% - 100px);
  bottom: 100px;
  justify-content: center;

  @media screen and (${theme.laptop}) {
    bottom: 60px;
  }

  @media screen and (${theme.laptop2}) {
    bottom: 30px;
  }

  & > div {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid black;
    text-align: center;

    @media screen and (${theme.laptop2}) {
      width: 30px;
      height: 30px;
      line-height: 30px;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`

const PrevBtn = styled.div``

const NextBtn = styled.div``

const PublishingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5%;
  position: relative;
`

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 0.2s;
  // width: 4640px;

  & > a {
    display: inline-block;
    width: ${widhtAndHeight + 130}px;
    height: ${widhtAndHeight}px;
    position: relative;
    margin-right: 100px;
    transition: 0.2s;

    &:hover {
      width: ${widhtAndHeight + 130}px;
    }
  }
`

const PublishingLp = styled.div`
  width: ${widhtAndHeight}px;
  height: ${widhtAndHeight}px;
  border-radius: 100%;
  background-size: cover;
  background-image: url(${lpImage});
  position: absolute;
  right: 0;
  top: 0;
  animation: ${turnVinyl} 8s infinite linear;
`

const PublishingCover = styled.div`
  width: ${widhtAndHeight}px;
  height: ${widhtAndHeight}px;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;

  &:hover .blackBG {
    opacity: 1;
  }
`

const BlackBG = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;

  & p {
  }
`

const PublishingWork1 = styled(Link)`
  & .publishingCover {
    //아시아교류협회
    background-image: url('https://www.asiaea.or.kr/upload/banner/%EC%A0%9C%EB%AA%A9%EC%9D%84%20%EC%9E%85%EB%A0%A5%ED%95%98%EC%84%B8%EC%9A%94%20(51).png');
  }
`
const PublishingWork2 = styled(Link)`
  & .publishingCover {
    //크리처
    background-image: url(${pubCover2});
  }
`
const PublishingWork3 = styled(Link)`
  & .publishingCover {
    //안심윤리
    background-image: url('https://ansim2021.syn.co.kr/common/img/visual01_170.jpg');
  }
`
const PublishingWork4 = styled(Link)`
  & .publishingCover {
    //티아모
    background-image: url(${pubCover4});
  }
`
const PublishingWork5 = styled(Link)`
  & .publishingCover {
    //은우소프트
    background-image: url(${pubCover5});
  }
`
const PublishingWork6 = styled(Link)`
  & .publishingCover {
    //코리팩
    background-image: url('https://www.coripack.co.kr/upload/banner/visual01.jpg');
  }
`
const PublishingWork7 = styled(Link)`
  & .publishingCover {
    // 오뷰코스타
    background-image: url(${pubCover7});
  }
`
const PublishingWork8 = styled(Link)`
  & .publishingCover {
    //비케이
    background-image: url(${pubCover8});
  }
`
