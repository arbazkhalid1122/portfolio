'use client'
import { useState } from 'react'
import Intro from './pages/intro'
import Resume from './pages/Resume/resume'
import styled from 'styled-components';
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/about';

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleAbout = () => {
    setShowAbout(true);
    setShowResume(false);
    setShowPortfolio(false);
  };

  const handleResume = () => {
    setShowAbout(false);
    setShowResume(true);
    setShowPortfolio(false);
  };

  const handlePortfolio = () => {
    setShowAbout(false);
    setShowResume(false);
    setShowPortfolio(true);
  };

  return (
    <Main >
      <Nav2 >
        <NavItem onClick={handleAbout} style={{ cursor: 'pointer' }} >About</NavItem>
        <NavItem style={{ cursor: 'pointer' }} onClick={handleResume}>
          Resume
        </NavItem>
        <NavItem style={{ cursor: 'pointer' }} onClick={handlePortfolio}>
          Portfolio
        </NavItem>
      </Nav2>
      <Content>
        <Intro />
        <Container>
          <Nav1>
            <NavItem onClick={handleAbout} style={{ cursor: 'pointer', color: showAbout ? '#FFDB70' : '' }}>About</NavItem>
            <NavItem style={{ cursor: 'pointer', color: showResume ? '#FFDB70' : '' }} onClick={handleResume}>
              Resume
            </NavItem>
            <NavItem style={{ cursor: 'pointer', color: showPortfolio ? '#FFDB70' : '' }} onClick={handlePortfolio}>
              Projects
            </NavItem>
          </Nav1>{showAbout &&
            <About />
          }
          {showResume &&
            <Resume></Resume>
          }
          {
            showPortfolio &&
            <Portfolio />
          }
        </Container>
      </Content>
    </Main >
  )
}





const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px;
  min-height: 100vh;

  @media (max-width: 500px) {
    padding: 0;
  }
`;



const Container = styled.div`
  background-color: #1e1e1f;
  border-radius: 15px;
  padding: 40px;
  width: 70vw;

  @media (max-width: 1270px) {
    padding: 15px;
    width: 65vw;
  }
  @media (max-width: 1109px) {
    width: 60vw;
  }
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    line-height: 20px;
    h1 {
      font-size: 8vw;
    }
    h2 {
      font-size: 10vw;
    }
  }
`;

export const ContainerItems = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: flex-start;
  gap: 25px;
  
  @media (max-width: 1109px) {
    flex-wrap: wrap;
  }
`;

export const Skills = styled.div`
  background-color: #1e1e1f;
  box-shadow: 0px 1px 7px 1px #0e0e0e;
  padding: 30px;
  border-radius: 40px;
  margin: 10px;
  flex: 1;
  width: 30%;

  h2 {
    margin-top: 15px;
  }
  svg {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 800px) {
    height: 160px;
    padding: 8px;

    h2 {
      font-size: 20px;
      margin-top: 3px;
    }

    svg {
      height: 100px;
      width: 120px;
    }
  }
`;

const Nav1 = styled.nav`
  display: flex;
  gap: 100px;
  background: rgb(60 60 61);
  margin-left: -39px;
  margin-top: -39px;
  padding: 25px;
  font-size: 20px;
  border-radius: 14px 0px 15px 0px;

  @media (max-width: 1272px) {
    margin-left: -15px;
    margin-top: -15px;
  }
  @media (max-width: 500px) {
    gap: 15%;
  }
  @media (max-width: 326px) {
    font-size: 15px;
  }
`;

const NavItem = styled.div`
  &:hover {
    color: #ffdb70;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  @media (max-width: 980px) {
    flex-wrap: wrap;
  }
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const SkillsItem = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 800px) {
    overflow: auto;
    width: 82vw;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;


const Nav2 = styled.div`
  display: none;
  gap: 20%;
  background: rgb(60 60 61);
  position: relative;
  margin-top: 6px;
  padding: 20px;
  font-size: 4vw;
  width: 100%;
  border-radius: 19px 22px 0px 0px;
  margin-bottom: -9px;
`


export const ContainerChild = styled.div`
  background-color: #1e1e1f;
  box-shadow: 0px 1px 7px 1px #0e0e0e;
  border-radius: 15px;
  display: flex;
  gap: 30px;
  padding: 20px;
}

p {
  margin-top: 5px;
}


@media (max-width: 980px) {
 
    width: 100%;
    padding: 10px;
}

@media (max-width: 390px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    font-size: 13px;
    line-height: 18px
}`