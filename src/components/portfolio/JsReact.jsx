import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { FiLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'

import lpImage from '../../assets/lecord2.png'
import coverDbd from '../../assets/cover_dbd.jpg'
import coverGame from '../../assets/cover_game.jpg'
import coverPainter from '../../assets/cover_painter.jpg'
import coverPromotion from '../../assets/cover_promotion.jpg'
import covershopping from '../../assets/cover_shoppingmall.jpg'
import coverTodo from '../../assets/cover_todo.jpg'
import coverWeather from '../../assets/cover_weather.jpg'
import coverWebBuilder from '../../assets/cover_webbuilder.jpg'

import bgWeather from '../../assets/bg_weather.gif'
import bgPainter from '../../assets/bg_painter.jpg'
import bgGame from '../../assets/bg_game.png'

import theme from '../../utils/theme'

const projectNum = 8

const JsReact = () => {
  const [nowJsPage, setNowJsPage] = useState(0)

  const minus = -(100 / projectNum)

  const onDotClick = e => {
    setNowJsPage(Number(e.target.dataset.num))
  }

  const movePrevPage = () => {
    nowJsPage <= 0 ? setNowJsPage(0) : setNowJsPage(nowJsPage - 1)
  }

  const moveNextPage = () => {
    nowJsPage >= 7 ? setNowJsPage(7) : setNowJsPage(nowJsPage + 1)
  }

  return (
    <JsReactWrapper>
      <SlideWrapper style={{ transform: `translate(${nowJsPage * minus}%, 0)` }}>
        <JsReactProject1>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                Dead by Daylight 랜덤퍽 룰렛
                <p>Dead by Daylight Random Perk Roulette</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
              </div>
              <p className="info">
                스팀 게임 '데드 바이 데이라이트'를 기반으로 한 랜덤 퍽 사이트입니다.(kr)
                <br />
                <br />
                실제 게임 플레이어들에게 플레이의 재미를 더하기 위해 미국 랜덤퍽 사이트를 바탕으로
                한국 유저들이 더욱 편리하게 사용할 수 있도록 보안, 제작하였습니다.
                <br />
                <br />
                생존자/살인마의 퍽과 아이템, 애드온 그리고 오퍼링을 랜덤하게 뽑을 수 있으며, 자신이
                소유하고 있는 캐릭터를 선택함에 따라 퍽의 개수가 제한됩니다. (localStorage에 데이터
                저장)
                <br />
                <br />
                api가 따로 있지 않아 직접 json파일을 만들어 제작하였습니다.
              </p>
              <div className="link">
                <a href="https://dbd-random-perks-kr.netlify.app/" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <FiLink /> Website
                  </div>
                </a>
                <a href="https://github.com/many-yun/dbd-random-perk" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject1>
        <JsReactProject2>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                지금 날씨 어때요
                <p>HOW IS THE WEATHER</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
                <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
              </div>
              <p className="info">
                기상청 open API를 기반으로 제작된 날씨 웹 어플리케이션입니다. <br />
                Openweather의 API를 사용하다가, 한글화 작업을 위해 기상청의 초단기실황 API로
                변경하였습니다.
                <br />
                주소-좌표 변환 자료는 카카오 로컬 API를 사용하였습니다.
                <br />
                <br />
                현재 사용자의 위치를 위경도를 추적하여, 위경도를 좌표로 변환 후 해당 좌표의 날씨
                정보를 얻어옵니다. 검색창에 지역을 검색하여 원하는 지역의 날씨를 확인할 수 있습니다.
                날씨와 시간에 따라 우측 창문 안의 이미지가 변화합니다.
                <br />
                <br />
                지역을 즐겨찾기에 추가/삭제할 수 있으며 즐겨찾기한 지역의 목록을 따로 확인할 수
                있습니다.
              </p>
              <div className="link">
                <a href="https://many-yun.github.io/weather-app/" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <FiLink /> Website
                  </div>
                </a>
                <a href="https://github.com/many-yun/weather-app" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject2>
        <JsReactProject3>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                미니미니 그림판
                <p>Mini-Mini Painter</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
              </div>
              <p className="info">
                HTML Canvas와 바닐라 Javascript로 구현한 간단한 이미지 편집기 및 그림판입니다.
                <br />
                최대 800*800px 크기의 캔버스 내에 그림을 그리거나 텍스트 추가할 수 있으며, 로컬에
                저장되어있는 이미지를 불러 원하는 부분을 크롭할 수 있습니다.
                <br />
                <br />
                이미지 업로드, 자르기, 브러쉬, 팔레트, 지우개, 초기화, 텍스트 추가 기능이 있으며,
                편집된 이미지는 저장 가능합니다.
              </p>
              <div className="link">
                <a href="https://many-yun.github.io/edit-image/" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <FiLink /> Website
                  </div>
                </a>
                <a href="https://github.com/many-yun/edit-image" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject3>
        <JsReactProject4>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                Todo List - Redux
                <p>Todo List - Redux</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
                <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
              </div>
              <p className="info">
                리덕스를 배우기 위해 리덕스를 사용하여 제작한 첫 프로젝트입니다.
                <br />
                <br />
                Input을 통해 목록을 추가할 수 있습니다.
                <br />
                <br />
                목록 우측에 수정버튼과 삭제 버튼을 사용할 수 있으며, 좌측의 체크박스를 통해 완료
                표시를 할 수 있습니다.
              </p>
              <div className="link">
                <a href="https://many-yun.github.io/todolist-redux/" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <FiLink /> Website
                  </div>
                </a>
                <a href="https://github.com/many-yun/todolist-redux" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject4>
        <JsReactProject5>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                소동이네
                <p>The Sodong's</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
              </div>
              <p className="info">
                코드/커밋/브랜치명 컨벤션 규칙을 정하고, 매일 스크럼을 통한 회의를 거치며 처음으로
                진행한 애자일 협업 형식의 팀 프로젝트입니다.
                <br />
                <br />
                회원가입, 로그인, 제품 추가/수정/삭제/조회, 제품 주문/수정/삭제 등의 일반적인 기능이
                가능한 강아지 용품 쇼핑몰입니다.
                <br />
                깔끔한 사이트 구현과 프론트, 백엔드간의 활발한 소통, 다른 팀과 차별되는 자잘하게
                추가된 기능들에 힘입어 21개의 팀에서 3위라는 결과를 얻었습니다.
                <br />
                <br />
                전체적인 쇼핑몰 디자인 및 구성 기획과 제품 목록 및 제품 상세 정보 조회 기능을
                담당했습니다.
                <br />
                api에 저장된 제품 목록을 해당 카테고리에 맞는 제품들만 노출될 수 있도록
                처리하였으며, sessionStorage 기능을 사용하여 제품 상세 페이지에서 장바구니 목록이
                저장되도록 구현, 해당 저장 목록은 주문 페이지에서 수정이 가능합니다.
                <br />
              </p>
              <div className="link">
                <a
                  href="https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team6/shopping-mall-racer"
                  target="_blank"
                >
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject5>
        <JsReactProject6>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                It's ME
                <p>It's ME</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
              </div>
              <p className="info">
                개발자, 디자이너 등의 다양한 직무의 취준생이 간편하게 포트폴리오를 제작할 수 있는
                웹사이트를 만드는 플랫폼 개발을 목표로 한 팀 프로젝트입니다. 포트폴리오를 pdf파일
                형태로 출력할 수 있으며, 유저별로 개인 정보를 저장 및 수정, 원하는 테마를 선택해
                포트폴리오에 적용할 수 있습니다.
                <br />
                <br />
                전체적인 디자인과 사이트 구성을 기획하였으며, 마이페이지의 프로필과 포트폴리오 등록
                기능, 이미지 업로드 기능, 포트폴리오 편집 페이지의 프로젝트 섹션, 테마 적용 기능을
                담당하였습니다.
              </p>
              <div className="link">
                <a
                  href="https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project_2/team10/portfolio-manager"
                  target="_blank"
                >
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject6>
        <JsReactProject7>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                HELLO ELICE
                <p>Hello Elice</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              </div>
              <p className="info">
                리액트를 사용한 첫 번째 프로젝트입니다.
                <br />
                팀 프로젝트로 진행하였으며, 메인 페이지의 디자인과 퀴즈페이지 구현을 담당했습니다.
                <br />
                <br />
                useState와 useEffect를 사용하여 각 문제의 정보(문제, 예시, 난이도 등)을 화면에
                뿌려주었고, 회원가입 후 첫 문제 제출 시 사용자 정보에서 점수를 업데이트, 그 중 최고
                점수를 best score로 노출되도록 구현했습니다.
                <br />
                <br />
                해당 사이트는 후에 모집된 엘리스 AI트랙 수강생들에게 전달되었으며, 심미성에 관해서
                좋은 평가를 받았습니다.
              </p>
              <div className="link">
                <a href="https://github.com/elice-promotion-site-team/hello-elice" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject7>
        <JsReactProject8>
          <BackgroundCover></BackgroundCover>
          <ProjectInfoWrapper>
            <ProjectInfo>
              <h1>
                미니게임천국
                <p>Mini Game Heaven</p>
              </h1>
              <div className="stack">
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
              </div>
              <p className="info">
                처음으로 진행한 팀 프로젝트입니다. 팀원들이 각자 하나씩의 게임을 구현하고, 하나의
                페이지에 모아 게임 모음 사이트를 제작했습니다.
                <br />
                <br />
                6개의 게임 중 초성게임을 구현하였고, 바닐라 자바스크립트를 사용하여 setTimeout을
                이용한 시간제한 기능, 문제 자동 넘김 기능, 정답/오답에 따른 결과 문구, 점수에 따라
                바뀌는 결과 팝업창의 문구/효과 등을 구현하며 자바스크립트에 좀 더 익숙해질 수 있는
                프로젝트였습니다.
              </p>
              <div className="link">
                <a href="https://elicegame.netlify.app/" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <FiLink /> Website
                  </div>
                </a>
                <a href="https://github.com/ssryoung/elice-study-game" target="_blank">
                  <div className="hover"></div>
                  <div className="text">
                    <AiFillGithub /> More Info
                  </div>
                </a>
              </div>
            </ProjectInfo>
            <ProjectJacket>
              <JacketImageWrapper>
                <div className="lp"></div>
                <div className="jacket"></div>
              </JacketImageWrapper>
            </ProjectJacket>
          </ProjectInfoWrapper>
        </JsReactProject8>
      </SlideWrapper>
      <ArrowWrapper>
        <DotsWrapper>
          <div className={nowJsPage === 0 ? 'on' : ''} data-num="0" onClick={onDotClick}></div>
          <div className={nowJsPage === 1 ? 'on' : ''} data-num="1" onClick={onDotClick}></div>
          <div className={nowJsPage === 2 ? 'on' : ''} data-num="2" onClick={onDotClick}></div>
          <div className={nowJsPage === 3 ? 'on' : ''} data-num="3" onClick={onDotClick}></div>
          <div className={nowJsPage === 4 ? 'on' : ''} data-num="4" onClick={onDotClick}></div>
          <div className={nowJsPage === 5 ? 'on' : ''} data-num="5" onClick={onDotClick}></div>
          <div className={nowJsPage === 6 ? 'on' : ''} data-num="6" onClick={onDotClick}></div>
          <div className={nowJsPage === 7 ? 'on' : ''} data-num="7" onClick={onDotClick}></div>
        </DotsWrapper>
        <PrevAndNext>
          <PrevArrow>
            <BiSkipPrevious onClick={movePrevPage} />
          </PrevArrow>
          <NextArrow>
            <BiSkipNext onClick={moveNextPage} />
          </NextArrow>
        </PrevAndNext>
      </ArrowWrapper>
    </JsReactWrapper>
  )
}

export default JsReact

const ArrowWrapper = styled.div`
  width: 300px;
  position: absolute;
  left: calc(50% - 150px);
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${theme.laptop}) {
    bottom: 30px;
  }
`

const PrevAndNext = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media screen and (${theme.laptop2}) {
    margin-left: 10px;
  }

  & > div {
    font-size: 2rem;

    & svg {
      cursor: pointer;
      opacity: 0.6;
      transition: 0.1s;

      &:hover {
        opacity: 1;
      }
    }
  }
`

const PrevArrow = styled.div``

const NextArrow = styled.div``

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -5px;
  width: 200px;

  @media screen and (${theme.laptop2}) {
    width: 150px;
  }

  // dot
  & > div {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 1px solid white;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.1s;

    @media screen and (${theme.laptop2}) {
      width: 13px;
      height: 13px;
    }

    &.on {
      background-color: white;
      opacity: 1;
    }

    &:hover {
      background-color: white;
      opacity: 0.8;
    }
  }
`

const turnVinyl = keyframes`
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
`

const SlideWrapper = styled.div`
  width: ${100 * projectNum}%;
  height: 100vh;
  display: flex;
  transition: 0.2s;

  & > div {
    width: calc(100% / ${projectNum});
    height: 100vh;
    background-size: cover;
    position: relative;
    background-position: center center;
  }
`

const JsReactWrapper = styled.div`
  position: relative;
`

const BackgroundCover = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.87;
`

const ProjectInfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;

  // ProjectInfo, ProjectJacket
  & > div {
    width: 50%;
    height: 100vh;
  }
`

const ProjectInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;

  @media screen and (${theme.laptop2}) {
    padding: 0 3%;
  }

  & h1 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3.2rem;

    @media screen and (${theme.laptop2}) {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    & > p {
      font-size: 1.5rem;
      opacity: 0.3;

      @media screen and (${theme.laptop2}) {
        font-size: 1rem;
      }
    }
  }

  & .stack {
    margin: 30px 0;

    @media screen and (${theme.laptop2}) {
      margin: 15px 0;
    }

    & > img {
      margin-right: 10px;
    }
  }

  & .info {
    font-size: 1.05rem;
    line-height: 1.7rem;
    word-break: keep-all;
    padding-top: 50px;
    position: relative;
    opacity: 0.9;

    @media screen and (${theme.laptop2}) {
      font-size: 0.9rem;
      line-height: 1.3rem;
      padding-top: 30px;
    }

    &::before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.1);
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  & .link {
    margin-top: 50px;

    @media screen and (${theme.laptop2}) {
      margin-top: 30px;
    }

    & > a {
      display: inline-block;
      width: 170px;
      height: 60px;
      border: 2px solid white;
      font-size: 1.2rem;
      margin-right: 30px;
      box-shadow: 5px 5px 0 white;
      overflow: hidden;
      position: relative;

      @media screen and (${theme.laptop}) {
        width: 150px;
        height: 50px;
        line-height: 50px;
      }

      @media screen and (${theme.laptop2}) {
        width: 130px;
        height: 40px;
        line-height: 40px;
        font-size: 1rem;
      }

      &:hover {
        color: black;
        font-weight: 500;

        & .hover {
          transform: translate(0, 0);
        }
      }

      & .hover {
        width: 100%;
        height: 100%;
        background-color: white;
        transition: 0.1s;
        transform: translate(-170px, 0);
      }

      & .text {
        width: 170px;
        height: 60px;
        line-height: 52px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;

        @media screen and (${theme.laptop}) {
          width: 150px;
          height: 50px;
          line-height: 44px;
        }

        @media screen and (${theme.laptop2}) {
          width: 130px;
          height: 40px;
          line-height: 35px;
        }
      }

      & svg {
        vertical-align: middle;
        margin: -3px 5px 0 0;
        font-size: 1.5rem;
      }
    }
  }
`

const ProjectJacket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const JacketImageWrapper = styled.div`
  width: 800px;
  height: 600px;
  position: relative;

  @media screen and (${theme.laptop}) {
    width: 650px;
    height: 500px;
  }

  @media screen and (${theme.laptop2}) {
    width: 500px;
    height: 450px;
  }

  @media screen and (${theme.desktop2}) {
    width: 1000px;
    height: 800px;
  }

  & .lp {
    width: 600px;
    height: 600px;
    background-image: url(${lpImage});
    background-size: cover;
    position: absolute;
    right: 0;
    animation: ${turnVinyl} 10s infinite linear;
    border-radius: 100%;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);

    @media screen and (${theme.laptop}) {
      width: 500px;
      height: 500px;
    }

    @media screen and (${theme.laptop2}) {
      width: 450px;
      height: 450px;
    }

    @media screen and (${theme.desktop2}) {
      width: 800px;
      height: 800px;
    }
  }
  & .jacket {
    width: 600px;
    height: 600px;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);

    @media screen and (${theme.laptop}) {
      width: 500px;
      height: 500px;
    }

    @media screen and (${theme.laptop2}) {
      width: 450px;
      height: 450px;
    }

    @media screen and (${theme.desktop2}) {
      width: 800px;
      height: 800px;
    }
  }
`

const JsReactProject1 = styled.div`
  background-image: url(https://dbd-random-perks-kr.netlify.app/static/media/bg_toolsoftorment.205970ee4b0ac1a81c77.png);

  & .jacket {
    background-image: url(${coverDbd});
  }
`
const JsReactProject2 = styled.div`
  background-image: url(${bgWeather});

  & .jacket {
    background-image: url(${coverWeather});
  }
`

const JsReactProject3 = styled.div`
  background-image: url(${bgPainter});

  & .jacket {
    background-image: url(${coverPainter});
  }
`
const JsReactProject4 = styled.div`
  background-image: url(https://user-images.githubusercontent.com/92010078/230421329-510699f5-f984-4bb7-8fea-9dc9eb24e9af.gif);

  & .jacket {
    background-image: url(${coverTodo});
  }
`

const JsReactProject5 = styled.div`
  background-image: url(https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team6/shopping-mall-racer/-/raw/master/public/images/showcase.jpg);

  & .jacket {
    background-image: url(${covershopping});
  }
`
const JsReactProject6 = styled.div`
  background-image: url(https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project_2/team10/portfolio-manager/uploads/fc807939cb2b01601c4e4ea806a89dcb/main.png);

  & .jacket {
    background-image: url(${coverWebBuilder});
  }
`

const JsReactProject7 = styled.div`
  background-image: url(https://user-images.githubusercontent.com/78011716/176823446-ec4354a2-5d00-433b-9123-0d4b2645d695.png);

  & .jacket {
    background-image: url(${coverPromotion});
  }
`
const JsReactProject8 = styled.div`
  background-image: url(${bgGame});

  & .jacket {
    background-image: url(${coverGame});
  }
`
