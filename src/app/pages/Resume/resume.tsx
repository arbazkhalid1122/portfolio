
import { Timeline } from "antd"
import { RiGraduationCapFill, RiJavascriptFill } from "react-icons/ri"
import { BsBootstrapFill, BsLaptop, BsPersonWorkspace } from "react-icons/bs"
import styles from '../../page.module.css'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { SiAntdesign, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si"
import Next from '.././../../../public/next.svg'
import Image from 'next/image'

function Resume(props: any) {


    return (
        <div className={styles.resume}>
            <div style={{ marginTop: '30px' }}>
                <h1>Resume</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '30px' }}>
                    <div className="cllaaa">
                        <RiGraduationCapFill />
                    </div>
                    <div>
                        <h2>Education</h2>
                    </div>
                </div>
                <div className={styles.education}>
                    <Timeline className={styles.timeline}>
                        <Timeline.Item>
                            <h3>Islamia University of Bahawalpur</h3>
                            <span >2021 - Present</span>
                            <p style={{ marginTop: '2px', }}>
                                Bachelor of Science in Software Engineering
                            </p>

                            <p style={{ marginTop: '10px', }}>
                                During my time at Islamia University of Bahawalpur, I gained a solid foundation in software engineering principles, computer science concepts, and programming languages. My coursework and projects allowed me to develop the following skills and experiences:
                            </p>

                            <ul style={{ listStyleType: 'square', marginLeft: '20px', marginTop: '10px' }}>
                                <li>Proficiency in various programming languages such as Java, C++, and Python.</li>
                                <li>Hands-on experience in software development methodologies including Agile and Scrum.</li>
                                <li>Strong problem-solving and analytical skills in designing and implementing software solutions.</li>
                                <li>Collaboration with peers on group projects, enhancing teamwork and communication abilities.</li>
                                <li>Adaptability to rapidly evolving technologies and a commitment to staying up-to-date with industry trends.</li>
                            </ul>

                            <p style={{ marginTop: '10px' }}>
                                I am now eager to apply my knowledge and skills as a software engineer in a dynamic and innovative team, where I can contribute to the development of cutting-edge software solutions and continue to grow in my career.
                            </p>

                        </Timeline.Item>
                    </Timeline>
                </div>
                <div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '30px' }} className={styles.resumeHead}>
                    <div className="cllaaa">
                        <BsLaptop />
                    </div>
                    <div>
                        <h2>Experience</h2>
                    </div>
                </div>
                <div className={styles.education}>
                    <Timeline className={styles.timeline}>
                        <Timeline.Item>
                            <h3 >InternShip</h3>
                            <p style={{ marginTop: '2px', }}>
                                Eight month Internship in Enigmatix
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3>Enigmatix</h3>
                            <p style={{ marginTop: '2px', }}>
                                Two Years Experience as a Frontend developer in Enigmatix
                            </p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '30px' }} className={styles.resumeHead}>
                    <div>
                        <BsPersonWorkspace />
                    </div>
                    <div>
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className={styles.education}>
                    <Timeline className={styles.timeline}>
                        <Timeline.Item>
                            <h3 >E-commerce</h3>
                            <p style={{ marginTop: '2px', }}>
                                Developed an E-commerce website with React and Node js
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 >OMS</h3>
                            <p style={{ marginTop: '2px', }}>
                                Worked for six months on OMS (Office Management System)
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 >Templates</h3>
                            <p style={{ marginTop: '2px', }}>
                                Developed various templates such as Ecommerce and Real-Estate
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 >Club Management System</h3>
                            <p style={{ marginTop: '2px', }}>
                                Developed a Football and Swimming Club Management System, including team, player, coach, membership, and match management functionalities
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 >Social App</h3>
                            <p style={{ marginTop: '2px', }}>
                                Created an app similar to Instagram
                            </p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div>
                </div>
            </div>
            <div style={{ marginTop: '30px' }}>
                <h1>Skills <span style={{ fontWeight: 'normal', fontSize: 'small' }}>(Skills i remember)</span></h1>
                <div style={{ marginTop: '15px' }} className={styles.skillsItem}>
                    <div style={{ textAlign: 'center', display: 'flex', gap: '25px', flexWrap: 'wrap' }} >
                        <div className={`skills ${styles.skills2}`} style={{ color: '#f6d36b' }}>
                            <RiJavascriptFill />
                            <h5>JavaScript</h5>
                        </div>
                        <div style={{ color: '#2e5fc2' }} className={`skills ${styles.skills2}`}>
                            <SiTypescript />
                            <h5>Typescript</h5>
                        </div>
                        <div style={{ color: '#f2100c' }} className={`skills ${styles.skills2}`}>
                            <FaHtml5 />
                            <h5>HTML</h5>
                        </div>
                        <div style={{ color: '#0061b8' }} className={`skills ${styles.skills2}`}>
                            <FaCss3Alt />
                            <h5>CSS</h5>
                        </div>
                        <div style={{ color: '#149eca' }} className={`skills ${styles.skills2}`}>
                            <FaReact />
                            <h5>React</h5>
                        </div>
                        <div style={{ color: '#149eca' }} className={`skills ${styles.skills2}`}>
                            <Image src={Next} width={50} height={50} alt='' style={{ background: 'white', borderRadius: '30pc', padding: '5px' }} />
                            <h5 >Next Js</h5>
                        </div>
                        <div style={{ color: '#008cff' }} className={`skills ${styles.skills2}`}>
                            <SiAntdesign />
                            <h5>Antd</h5>
                        </div>
                        <div style={{ color: '#8f00ef' }} className={`skills ${styles.skills2}`}>
                            <BsBootstrapFill />
                            <h5>Bootstrap</h5>
                        </div>
                        <div style={{ color: '#00b2d0' }} className={`skills ${styles.skills2}`}>
                            <SiTailwindcss />
                            <h5>Tailwand</h5>
                        </div>
                        <div style={{ color: '#48de21' }} className={`skills ${styles.skills2}`}>
                            <IoLogoNodejs />
                            <h5>Node js</h5>
                        </div>
                        <div style={{ color: '#00ba4a' }} className={`skills ${styles.skills2}`}>
                            <SiMongodb />
                            <h5>Mongo db</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume