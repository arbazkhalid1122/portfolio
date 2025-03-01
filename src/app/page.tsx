'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Intro from './pages/intro'
import Resume from './pages/Resume/resume'
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/about';
import ThemeSwitcher from './theme/themeSwitcher';

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
    <Main>
      {isLoading ? (
        <>
        </>
      ) : (
        <>
          <ThemeSwitcher />
          <Nav2>
            <NavItem onClick={handleAbout} style={{ cursor: 'pointer' }}>About</NavItem>
            <NavItem style={{ cursor: 'pointer' }} onClick={handleResume}>Resume</NavItem>
            <NavItem style={{ cursor: 'pointer' }} onClick={handlePortfolio}>Portfolio</NavItem>
          </Nav2>
          <Content>
            <Intro />
            <Container className='container'>
              <Nav1 className='nav1'>
                <NavItem onClick={handleAbout} style={{ cursor: 'pointer', color: showAbout ? '#FFDB70' : '' }}>About</NavItem>
                <NavItem style={{ cursor: 'pointer', color: showResume ? '#FFDB70' : '' }} onClick={handleResume}>Resume</NavItem>
                <NavItem style={{ cursor: 'pointer', color: showPortfolio ? '#FFDB70' : '' }} onClick={handlePortfolio}>Projects</NavItem>
              </Nav1>
              {showAbout && <About />}
              {showResume && <Resume />}
              {showPortfolio && <Portfolio />}
            </Container>
          </Content>
        </>
      )}
    </Main>
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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
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
`;

const Nav1 = styled.nav`
  display: flex;
  gap: 100px;
  margin-left: -39px;
  margin-top: -39px;
  padding: 25px;
  font-size: 20px;
  border-radius: 14px 0px 15px 0px;

  @media (max-width: 1272px) {
    margin-left: -15px;
    margin-top: -15px;
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
`;
