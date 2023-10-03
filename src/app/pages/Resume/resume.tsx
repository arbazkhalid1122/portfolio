
import { Timeline } from "antd"
import { RiGraduationCapFill, RiJavascriptFill } from "react-icons/ri"
import { BsBootstrapFill, BsLaptop, BsPersonWorkspace } from "react-icons/bs"
import styles from '../../page.module.css'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { SiAntdesign, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si"
import Next from '.././../../../public/next.svg'
import Image from 'next/image'

function Resume(props:any) {

    
    return (
        <div className={styles.resume}>
            <div>
                <h1>Resume</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '30px' }} className={styles.resumeHead}>
                    <div>
                        <RiGraduationCapFill />
                    </div>
                    <div>
                        <h2>Education</h2>
                    </div>
                </div>
                <div className={styles.education}>
                    <Timeline className={styles.timeline}>
                        <Timeline.Item>
                            <h3 style={{ color: 'white' }}>University School Of The Arts</h3>
                            <p style={{ marginTop: '2px', color: 'hsl(0deg 0.42% 46.86%)' }}>
                                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 style={{ color: 'white' }}>Another University</h3>
                            <p style={{ marginTop: '2px', color: 'hsl(0deg 0.42% 46.86%)' }}>
                                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                            </p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginTop: '30px' }} className={styles.resumeHead}>
                    <div>
                        <BsLaptop />
                    </div>
                    <div>
                        <h2>Experience</h2>
                    </div>
                </div>
                <div className={styles.education}>
                    <Timeline className={styles.timeline}>
                        <Timeline.Item>
                            <h3 style={{ color: 'white' }}>InternShip</h3>
                            <p style={{ marginTop: '2px', color: 'hsl(0deg 0.42% 46.86%)' }}>
                                Six month Internship in Codelab
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 style={{ color: 'white' }}>Enigmatix</h3>
                            <p style={{ marginTop: '2px', color: 'hsl(0deg 0.42% 46.86%)' }}>
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
                            <h3 style={{ color: 'white' }}>OMS</h3>
                            <p style={{ marginTop: '2px', color: 'hsl(0deg 0.42% 46.86%)' }}>
                                Six month work on OMS (office managment system)
                            </p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <h3 style={{ color: 'white' }}>Templates</h3>
                            <p style={{ marginTop: '2px', color: 'hsl(0deg 0.42% 46.86%)' }}>
                                One year
                            </p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <div>
                </div>
            </div>
            <div style={{ marginTop: '30px' }}>
                <h1>Skills</h1>
                <div style={{ marginTop: '15px' }} className={styles.skillsItem}>
                    <div style={{ textAlign: 'center', display: 'flex', gap: '30px', overflowX: 'auto' }} >
                        <div className={styles.skills2} style={{ color: '#f6d36b' }}>
                            <RiJavascriptFill />
                            <h5>JavaScript</h5>
                        </div>
                        <div style={{ color: '#2e5fc2' }} className={styles.skills2}>
                            <SiTypescript />
                            <h5>Typescript</h5>
                        </div>
                        <div style={{ color: '#f2100c' }} className={styles.skills2}>
                            <FaHtml5 />
                            <h5>HTML</h5>
                        </div>
                        <div style={{ color: '#0061b8' }} className={styles.skills2}>
                            <FaCss3Alt />
                            <h5>CSS</h5>
                        </div>
                        <div style={{ color: '#149eca' }} className={styles.skills2}>
                            <FaReact />
                            <h5>React</h5>
                        </div>
                        <div style={{ color: '#149eca' }} className={styles.skills2}>
                            <Image src={Next} width={50} height={50} alt='' style={{ background: 'white', borderRadius: '30pc', padding: '5px' }} />
                            <h5 style={{ color: 'white' }}>Next Js</h5>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', display: 'flex', gap: '30px', overflowX: 'auto' }}>
                        <div style={{ color: '#00ba4a' }} className={styles.skills2}>
                            <SiTypescript />
                            <h5>Typescript</h5>
                        </div>
                        <div style={{ color: '#008cff' }} className={styles.skills2}>
                            <SiAntdesign />
                            <h5>Antd</h5>
                        </div>
                        <div style={{ color: '#8f00ef' }} className={styles.skills2}>
                            <BsBootstrapFill />
                            <h5>Bootstrap</h5>
                        </div>
                        <div style={{ color: '#00b2d0' }} className={styles.skills2}>
                            <SiTailwindcss />
                            <h5>Tailwand CSS</h5>
                        </div>
                        <div style={{ color: '#48de21' }} className={styles.skills2}>
                            <IoLogoNodejs />
                            <h5>Node js</h5>
                        </div>
                        <div style={{ color: '#00ba4a' }} className={styles.skills2}>
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