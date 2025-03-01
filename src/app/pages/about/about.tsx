import Image from "next/image"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { RiJavascriptFill } from "react-icons/ri"
import { SiAntdesign, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si"
import design from '.././../../../public/icon-design.svg'
import Next from '.././../../../public/next.svg'
import styled from "styled-components"
import { BsBootstrapFill } from "react-icons/bs"
import styles from '../../page.module.css'
const About = () => {
    return (
        <div style={{ marginTop: '40px' }}>
            <div style={{ position: 'relative' }}>
                <h1>About Me</h1>
                <p>
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
                        <li>💻 Frontend development (Next.js, React, JavaScript, HTML/CSS)</li>
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
                <ContainerItems>
                    <ContainerChild className="containerChild">
                        <div><Image src={design} height={50} width={50} alt='' /></div>
                        <div>
                            <h2>Web Design</h2>
                            <p>The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </ContainerChild>
                    <ContainerChild className="containerChild">
                        <div><Image src={design} height={50} width={50} alt='' /></div>
                        <div>
                            <h2>Mobile Development</h2>
                            <p>High-quality development of sites at the professional level.</p>
                        </div>
                    </ContainerChild>
                </ContainerItems>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h1>Skills <span style={{ fontWeight: 'normal', fontSize: 'small' }}>(Skills i remember)</span></h1>
                <div style={{ marginTop: '15px' }} className={styles.skillsItem}>
                    <div style={{ textAlign: 'center', display: 'flex', gap: '25px', flexWrap: 'wrap' }} >
                        <div className={`skills ${styles.skills2}`} style={{}}>
                            <RiJavascriptFill />
                            <h5>JavaScript</h5>
                        </div>
                        <div style={{}} className={`skills ${styles.skills2}`}>
                            <SiTypescript />
                            <h5>Typescript</h5>
                        </div>
                        <div style={{}} className={`skills ${styles.skills2}`}>
                            <FaHtml5 />
                            <h5>HTML</h5>
                        </div>
                        <div style={{}} className={`skills ${styles.skills2}`}>
                            <FaCss3Alt />
                            <h5>CSS</h5>
                        </div>
                        <div style={{}} className={`skills ${styles.skills2}`}>
                            <FaReact />
                            <h5>React</h5>
                        </div>
                        <div style={{}} className={`skills ${styles.skills2}`}>
                            <Image src={Next} width={50} height={50} alt='' style={{ background: 'white', borderRadius: '30pc', padding: '5px' }} />
                            <h5 >Next Js</h5>
                        </div>
                        <div className={`skills ${styles.skills2}`}>
                            <SiAntdesign />
                            <h5>Antd</h5>
                        </div>
                        <div className={`skills ${styles.skills2}`}>
                            <BsBootstrapFill />
                            <h5>Bootstrap</h5>
                        </div>
                        <div className={`skills ${styles.skills2}`}>
                            <SiTailwindcss />
                            <h5>Tailwand</h5>
                        </div>
                        <div className={`skills ${styles.skills2}`}>
                            <IoLogoNodejs />
                            <h5>Node js</h5>
                        </div>
                        <div className={`skills ${styles.skills2}`}>
                            <SiMongodb />
                            <h5>Mongo db</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;


const ContainerItems = styled.div`
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



const ContainerChild = styled.div`
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