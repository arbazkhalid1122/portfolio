'use client'
import styles from './page.module.css'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import design from '.././../public/icon-design.svg'
import Image from 'next/image'
import Next from '.././../public/next.svg'
import { useState } from 'react'
import Intro from './pages/intro'
import Resume from './pages/Resume/page'
import Portfolio from './pages/portfolio/portfolio'

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
    <main className={styles.main}>
        <div className={styles.nav2}>
            <div onClick={handleAbout} style={{ cursor: 'pointer' }}>About</div>

            <div style={{ cursor: 'pointer' }} onClick={handleResume}>
              Resume
            </div>

            <div style={{ cursor: 'pointer' }} onClick={handlePortfolio}>
              Portfolio
            </div>
          </div>
      <div className={styles.content}>
        <Intro></Intro>
        <div className={styles.container}>
          <div  className={styles.nav1}>
            <div onClick={handleAbout} style={{ cursor: 'pointer' }}>About</div>

            <div style={{ cursor: 'pointer' }} onClick={handleResume}>
              Resume
            </div>

            <div style={{ cursor: 'pointer' }} onClick={handlePortfolio}>
              Portfolio
            </div>
          </div>{showAbout &&
            <div style={{ marginTop: '40px' }}>
              <div style={{ position: 'relative' }}>
                <h1>About Me</h1>
                <p style={{ color: 'rgb(185 182 182)' }}>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                  My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                </p>
              </div>
              <div style={{ marginTop: '30px' }}>
                <h1>What I'm Doing</h1>
                <div className={styles.containerItems}>
                  <div className={styles.cntainerChild}>
                    <div><Image src={design} height={50} width={50} alt='' /></div>
                    <div>
                      <h2>Email</h2>
                      <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                  </div>
                  <div className={styles.cntainerChild}>
                    <div><Image src={design} height={50} width={50} alt='' /></div>
                    <div>
                      <h2>Email</h2>
                      <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h1>Skills</h1>
                <div style={{ marginTop: '15px' }}>
                  <div style={{ textAlign: 'center', display: 'flex', gap: '40px', overflow: 'auto' }} className={styles.skillsItem}>
                    <div className={styles.skills} style={{ color: '#f6d36b' }}>
                      <RiJavascriptFill />
                      <h2>JavaScript</h2>
                    </div>
                    <div style={{ color: '#149eca' }} className={styles.skills}>
                      <FaReact />
                      <h2>React</h2>
                    </div>
                    <div style={{ color: '#f2100c' }} className={styles.skills}>
                      <FaHtml5 />
                      <h2>HTML</h2>
                    </div>
                    <div style={{ color: '#0061b8' }} className={styles.skills}>
                      <FaCss3Alt />
                      <h2>CSS</h2>
                    </div>
                    <div style={{ color: '#149eca' }} className={styles.skills}>
                      <Image src={Next} width={150} height={150} alt='' style={{ background: 'white', borderRadius: '30pc', padding: '5px' }} />
                      <h2 style={{ color: 'white' }}>Next Js</h2>
                    </div>
                    <div style={{ color: '#62d746' }} className={styles.skills}>
                      <IoLogoNodejs />
                      <h2>Node js</h2>
                    </div>
                    <div style={{ color: '#00ba4a' }} className={styles.skills}>
                      <SiMongodb />
                      <h2>Mongo db</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {showResume &&
            <Resume></Resume>
          }
          {
            showPortfolio &&
            <Portfolio />
          }
        </div>
      </div>
    </main>
  )
}

