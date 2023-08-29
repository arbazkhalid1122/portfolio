'use client'
import styles from './page.module.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { VscLocation } from 'react-icons/vsc'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { RiJavascriptFill } from 'react-icons/ri'
import { SlCalender, SlScreenSmartphone } from 'react-icons/sl'
import avatar from '.././../public/my-avatar.png'
import design from '.././../public/icon-design.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: 'flex', gap: '50px' }}>
        <div className={styles.intro}>
          <div style={{ textAlign: 'center' }}>
            <Image src={avatar} height={100} width={100} alt={''} style={{ background: '#3c3c3d', borderRadius: '8px' }}></Image>
            <h1>Arbaz Khalid</h1>
            <p style={{ marginTop: '5px', background: '#3c3c3d', borderRadius: '8px', padding: '8px' }}>web developer</p>
          </div>
          <div className={styles.iconText}>
            <div><MdOutlineMailOutline /></div>
            <div>
              <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Email</p>
              <p>khalidarbaz27@gmail.com</p>
            </div>
          </div>
          <div className={styles.iconText}>
            <div><SlScreenSmartphone /></div>
            <div>
              <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Phone</p>
              <p>03061368797</p>
            </div>
          </div>
          <div className={styles.iconText}>
            <div><SlCalender /></div>
            <div>
              <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Birthday</p>
              <p>May 9, 2002</p>
            </div>
          </div>
          <div className={styles.iconText}>
            <div><VscLocation /></div>
            <div>
              <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Location</p>
              <p>Bahawalpur</p>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <h1>About Me</h1>
            <p style={{color:'rgb(185 182 182)'}}>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
              My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
            </p>
          </div>
          <div style={{marginTop:'30px'}}>
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

          <div style={{marginTop:'30px'}}>
            <h1>Skills</h1>
            <div style={{marginTop:'15px'}}>
              <div style={{textAlign:'center',display: 'flex', gap:'4 0px'}}>
                <div className={styles.skills} style={{color:'#f6d36b'}}>
                <RiJavascriptFill/>
                <h2>JavaScript</h2>
                </div>
                <div style={{color:'#149eca'}} className={styles.skills}>
                  <FaReact />
                  <h2>React</h2>
                </div>
                <div style={{color:'#149eca'}} className={styles.skills}>
                  <ImHtmlFive />
                  <h2>React</h2>
                </div>
                <div style={{color:'#149eca'}} className={styles.skills}>
                  <FaCss3Alt />
                  <h2>React</h2>
                </div>
              </div>
              <div style={{display:'flex',marginTop:'20px',gap:'30px'}}>
              <div style={{color:'#149eca'}} className={styles.skills}>
                  <FaCss3Alt />
                  <h2>React</h2>
                </div>
                <div style={{color:'#149eca'}} className={styles.skills}>
                  <FaCss3Alt />
                  <h2>React</h2>
                </div>
                <div style={{color:'#149eca'}} className={styles.skills}>
                  <FaCss3Alt />
                  <h2>React</h2>
                </div>
                <div style={{color:'#149eca'}} className={styles.skills}>
                  <FaCss3Alt />
                  <h2>React</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

