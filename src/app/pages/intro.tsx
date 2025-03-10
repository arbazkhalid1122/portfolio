import { useContext, useEffect, useState } from 'react';
import styles from '../page.module.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { VscLocation } from 'react-icons/vsc';
import { SlCalender, SlScreenSmartphone } from 'react-icons/sl';
import avatar from '../../../public/myImg.jpeg';
import Image from 'next/image';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

function calculateExactAge(birthDate: Date): number {
  const now = new Date();
  const ageInMs = now.getTime() - birthDate.getTime();

  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  return ageInYears;
}

export default function Intro() {
  const birthDate = new Date(2002, 5, 9);
  const [age, setAge] = useState(calculateExactAge(birthDate).toFixed(10));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateExactAge(birthDate).toFixed(10));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [birthDate]);



  return (
    <Intros className='intro'>
      <div style={{ textAlign: 'center' }}>
        <Image src={avatar} height={100} width={100} alt={''} style={{ background: '#3c3c3d', borderRadius: '8px' }} />
        <div className='heading'>
          <h1>Arbaz Khalid</h1>
          <p className='wDeveloper'>
            Web Developer
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '15px' }}>
        <IconText className='iconText' >
          <div><MdOutlineMailOutline /></div>
          <div>
            <p className='introHeading'>Email</p>
            <p>khalidarbaz27@gmail.com</p>
          </div>
        </IconText>
        <IconText className='iconText'>
          <div><SlScreenSmartphone /></div>
          <div>
            <p className='introHeading'>Phone</p>
            <p>03061368797</p>
          </div>
        </IconText>
        <IconText className='iconText'>
          <div><SlCalender /></div>
          <div>
            <p className='introHeading'>Age</p>
            <p>{age}</p>
          </div>
        </IconText>
        <IconText className='iconText'>
          <div><VscLocation /></div>
          <div>
            <p className='introHeading'>Location</p>
            <p>Bahawalpur</p>
          </div>
        </IconText>
      </div>
    </Intros>
  );
}


const Intros = styled.div`
  padding: 40px 23px 40px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  gap: 50px;
 height: fit-content;
  width: 300px;


 h1 {
  margin-top: 20px;
}

@media (max-width: 980px) {
  .name {
    width: 100%;
    gap: 40px;
  }
}

@media (max-width: 980px) {
  .heading {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 980px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  
}  `


const IconText = styled.div`
width: 100%;
border-radius: 10px;
@media (max-width: 980px) {
    font-size: 4vw;
    width: 100%;
}


  display: flex;
  align-items: center;
  text-align: start;
  gap: 10px;

 svg {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;

}

@media (max-width: 980px) {
   svg {
    width: 18vw;
    height: 18vw;
  }
}`