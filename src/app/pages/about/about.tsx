import { ContainerChild, ContainerItems, Skills, SkillsItem } from "@/app/page"
import Image from "next/image"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoNodejs } from "react-icons/io"
import { RiJavascriptFill } from "react-icons/ri"
import { SiAmp, SiAntdesign, SiApacheecharts, SiApachekafka, SiChakraui, SiMongodb, SiSocketdotio, SiTailwindcss } from "react-icons/si"
import design from '.././../../../public/icon-design.svg'
import Next from '.././../../../public/next.svg'
const About = () => {
    return (
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
                    <ContainerChild >
                        <div><Image src={design} height={50} width={50} alt='' /></div>
                        <div>
                            <h2>Web Design</h2>
                            <p>The most modern and high-quality design made at a professional level.</p>
                        </div>
                    </ContainerChild>
                    <ContainerChild >
                        <div><Image src={design} height={50} width={50} alt='' /></div>
                        <div>
                            <h2>Mobile Development</h2>
                            <p>High-quality development of sites at the professional level.</p>
                        </div>
                    </ContainerChild>
                </ContainerItems>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h1>Skills</h1>
                <div style={{ marginTop: '15px' }}>
                    <SkillsItem>
                        <Skills style={{ color: '#f6d36b' }}>
                            <RiJavascriptFill />
                            <h2>JavaScript</h2>
                        </Skills>
                        <Skills style={{ color: '#149eca' }} >
                            <FaReact />
                            <h2>React</h2>
                        </Skills>
                        <Skills style={{ color: '#f2100c' }} >
                            <FaHtml5 />
                            <h2>HTML</h2>
                        </Skills>
                        <Skills style={{ color: '#0061b8' }} >
                            <FaCss3Alt />
                            <h2>CSS</h2>
                        </Skills>
                        <Skills style={{ color: '#149eca' }} >
                            <Image src={Next} width={150} height={150} alt='' style={{ background: 'white', borderRadius: '30pc', padding: '5px' }} />
                            <h2 style={{ color: 'white' }}>Next Js</h2>
                        </Skills>
                        <Skills style={{ color: '#62d746' }} >
                            <IoLogoNodejs />
                            <h2>Node js</h2>
                        </Skills>
                        <Skills style={{ color: '#00ba4a' }} >
                            <SiMongodb />
                            <h2>Mongo db</h2>
                        </Skills>
                        <Skills >
                            <SiSocketdotio style={{ color: '#010101', }} />
                            <h2>Socket.io</h2>
                        </Skills>
                        <Skills >
                            <SiApacheecharts style={{ color: '#ca2c92', }} />
                            <h2>Apache ECharts</h2>
                        </Skills>
                        <Skills >
                            <SiApachekafka style={{ color: '#834b59', }} />
                            <h2>Apache Kafka</h2>
                        </Skills>
                        <Skills >
                            <SiTailwindcss style={{ color: '#38bdf8', }} />
                            <h2>Tailwind CSS</h2>
                        </Skills>
                        <Skills>
                            <SiAntdesign style={{ color: '#0170fe', }} />
                            <h2>Ant Design</h2>
                        </Skills>
                        <Skills>
                            <SiChakraui style={{ color: '#319795', }} />
                            <h2>Chakra UI</h2>
                        </Skills>
                        <Skills>
                            <SiAmp style={{ color: '#005af0', }} />
                            <h2>AMP</h2>
                        </Skills>
                    </SkillsItem>
                </div>
            </div>
        </div>
    )
}

export default About;