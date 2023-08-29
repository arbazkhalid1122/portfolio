import styles from './page.module.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import avatar from '.././../public/my-avatar.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
        <div className='flex border-2'>
        <div>
          <Image src={avatar} height={100} width={100} alt={''}></Image>
          <h1>Arbaz Khalid</h1>
          <p>web developer</p>
        </div>
        <div className={styles.iconText}>
          <div><MdOutlineMailOutline /></div>
          <div>
            <p>Email</p>
            <p>khalidarbaz27@gmail.com</p>
          </div>
        </div>
        <div>
          <p>Phone</p>
          <p>03061368797</p>
        </div>
        <div>
          <p>Birthday</p>
          <p>May 9, 2002</p>
        </div>
      </div>
    </main>
  )
}

