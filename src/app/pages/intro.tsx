import { useEffect, useState } from 'react';
import styles from '../page.module.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { VscLocation } from 'react-icons/vsc';
import { SlCalender, SlScreenSmartphone } from 'react-icons/sl';
import avatar from '../../../public/myImg.jpeg';
import Image from 'next/image';
import styled from 'styled-components';

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
    <Intros>
      <div style={{ textAlign: 'center' }}>
        <Image src={avatar} height={100} width={100} alt={''} style={{ background: '#3c3c3d', borderRadius: '8px' }} />
        <div className='heading'>
          <h1>Arbaz Khalid</h1>
          <p style={{ marginTop: '5px', background: '#3c3c3d', borderRadius: '8px', padding: '8px' }}>
            Web Developer
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '30px' }}>
        <IconText >
          <div><MdOutlineMailOutline /></div>
          <div>
            <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Email</p>
            <p>khalidarbaz27@gmail.com</p>
          </div>
        </IconText>
        <IconText >
          <div><SlScreenSmartphone /></div>
          <div>
            <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Phone</p>
            <p>03061368797</p>
          </div>
        </IconText>
        <IconText >
          <div><SlCalender /></div>
          <div>
            <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Age</p>
            <p>{age}</p>
          </div>
        </IconText>
        <IconText >
          <div><VscLocation /></div>
          <div>
            <p style={{ color: 'hsl(0deg 0.42% 46.86%)' }}>Location</p>
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
  background-color: #1e1e1f;
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
@media (max-width: 980px) {
    font-size: 4vw;
    width: 100%;
}


  display: flex;
  align-items: center;
  text-align: start;
  gap: 25px;

 svg {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  background-color: #1e1e1f;
  box-shadow: 0px 1px 7px 1px #0e0e0e;
}

@media (max-width: 980px) {
   svg {
    width: 18vw;
    height: 18vw;
  }
}`