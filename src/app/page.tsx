'use client'
import styles from './page.module.css'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { IoLogoNodejs } from 'react-icons/io'
import { SiAmp, SiAntdesign, SiApacheecharts, SiApachekafka, SiChakraui, SiMongodb, SiSocketdotio, SiTailwindcss } from 'react-icons/si'
import design from '.././../public/icon-design.svg'
import Image from 'next/image'
import Next from '.././../public/next.svg'
import { useState } from 'react'
import Intro from './pages/intro'
import Resume from './pages/Resume/resume'
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
        <div onClick={handleAbout} style={{ cursor: 'pointer' }} className={styles.navItem}>About</div>

        <div style={{ cursor: 'pointer' }} className={styles.navItem} onClick={handleResume}>
          Resume
        </div>

        <div style={{ cursor: 'pointer' }} className={styles.navItem} onClick={handlePortfolio}>
          Portfolio
        </div>
      </div>
      <div className={styles.content}>
        <Intro></Intro>
        <div className={styles.container}>
          <div className={styles.nav1}>
            <div onClick={handleAbout} className={styles.navItem} style={{ cursor: 'pointer', color: showAbout ? '#FFDB70' : '' }}>About</div>

            <div style={{ cursor: 'pointer', color: showResume ? '#FFDB70' : '' }} className={styles.navItem} onClick={handleResume}>
              Resume
            </div>

            <div style={{ cursor: 'pointer', color: showPortfolio ? '#FFDB70' : '' }} className={styles.navItem} onClick={handlePortfolio}>
              Projects
            </div>
          </div>{showAbout &&
            <div style={{ marginTop: '40px' }}>
              <div style={{ position: 'relative' }}>
                <h1>About Me</h1>
                <p style={{ color: 'rgb(185 182 182)' }}>
                  <strong>Code. Tea. Conquer.</strong><br />
                  As a MERN stack developer, I'm like a master chef - but instead of whipping up soufflés, I serve up scalable, secure, and ridiculously fast web applications. With a dash of creativity, a pinch of problem-solving, and a whole lot of caffeine, I transform complex ideas into intuitive user experiences.<br /><br />
                  <em>'Code is like humor - when you have to explain it, it's bad.'</em> I believe in writing clean, efficient, and well-documented code that speaks for itself.<br /><br />
                  When I'm not coding, you can find me:
                  <ul>
                    <li>🏃‍♂️ <strong>Running:</strong> Beating my personal bests and clearing my mind</li>
                    <li>🎬 <strong>Movie nights:</strong> Analyzing plot twists and appreciating cinematic coding Easter eggs</li>
                    <li>🎧 <strong>Podcast enthusiast:</strong> Tuning in to 'How I Built This', 'The Turing Machine', and 'The Web Ahead'</li>
                    <li>📚 <strong>Self-improvement:</strong> Learning new languages (human and programming), reading tech blogs, and experimenting with side projects</li>
                  </ul>
                  <br />
                  <strong>Expertise:</strong>
                  <ul>
                    <li>💻 Frontend development (React, JavaScript, HTML/CSS)</li>
                  </ul>
                  <br />
                  <strong>Stealthy Skills:</strong>
                  <ul>
                    <li>🛠️ Sneaking up on backend development with Node.js and Express</li>
                    <li>🗄️ Unleashing MongoDB mastery to tame data chaos</li>
                  </ul>
                  <br />
                  <strong>What Drives Me:</strong>
                  <ul>
                    <li>🚀 Building impactful digital solutions</li>
                    <li>🎨 Pushing the boundaries of user experience</li>
                    <li>🔍 Exploring emerging technologies (PWA's, AI, Machine Learning)</li>
                  </ul>
                  <br />
                  <strong>Let's Connect:</strong><br />
                  Collaborate, innovate, and create exceptional digital experiences together! Let's build something amazing - and maybe even change the world (or at least the web)!
                </p>


              </div>
              <div style={{ marginTop: '30px' }}>
                <h1>What I'm Doing</h1>
                <div className={styles.containerItems}>
                  <div className={styles.cntainerChild}>
                    <div><Image src={design} height={50} width={50} alt='' /></div>
                    <div>
                      <h2>Web Design</h2>
                      <p>The most modern and high-quality design made at a professional level.</p>
                    </div>
                  </div>
                  <div className={styles.cntainerChild}>
                    <div><Image src={design} height={50} width={50} alt='' /></div>
                    <div>
                      <h2>Mobile Development</h2>
                      <p>High-quality development of sites at the professional level.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h1>Skills</h1>
                <div style={{ marginTop: '15px' }}>
                  <div className={styles.skillsItem}>
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

                    <div className={styles.skills}>
                      <SiMongodb style={{ color: '#00ba4a', }} />
                      <h2>MongoDB</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiSocketdotio style={{ color: '#010101', }} />
                      <h2>Socket.io</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiApacheecharts style={{ color: '#ca2c92', }} />
                      <h2>Apache ECharts</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiApachekafka style={{ color: '#834b59', }} />
                      <h2>Apache Kafka</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiTailwindcss style={{ color: '#38bdf8', }} />
                      <h2>Tailwind CSS</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiAntdesign style={{ color: '#0170fe', }} />
                      <h2>Ant Design</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiChakraui style={{ color: '#319795', }} />
                      <h2>Chakra UI</h2>
                    </div>
                    <div className={styles.skills}>
                      <SiAmp style={{ color: '#005af0', }} />
                      <h2>AMP</h2>
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

