import styles from '../page.module.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { VscLocation } from 'react-icons/vsc'
import { SlCalender, SlScreenSmartphone } from 'react-icons/sl'
import avatar from '.././../../public/my-avatar.png'
import Image from 'next/image'


export default function Intro() {
  return (
    <div className={styles.intro}>
      <div style={{ textAlign: 'center' }} className={styles.name}>
        <Image src={avatar} height={100} width={100} alt={''} style={{ background: '#3c3c3d', borderRadius: '8px' }}></Image>
        <div className={styles.heading}>
        <h1>Arbaz Khalid</h1>
        <p style={{ marginTop: '5px', background: '#3c3c3d', borderRadius: '8px', padding: '8px' }} className={styles.developer}>web developer</p>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:'30px'}}>
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
    </div>
  )
}