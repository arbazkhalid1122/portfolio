import project from '../../../../public/projct.jpg';
import Image from 'next/image';
import { styled } from 'styled-components';
import dashboard from '../../../../public/dashboard.jpg';
import ecommerce from '../../../../public/ecommerce.webp';
import { FaReact } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";


const ImageSet = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  flex: 1 1 calc(33.33% - 40px); 
  max-width: calc(33.33% - 40px); 

  @media (max-width: 768px) {
    flex-basis: calc(50% - 40px);
    max-width: calc(50% - 40px);
  }

  @media (max-width: 480px) {
    flex-basis: 100%; 
    max-width: 100%;
  }
img{
  transition: transform 0.3s ease;
    will-change: transform;
   border-radius: 15px;
  &:hover {
    transform: scale(1.1);
  }
}
`;

const ImageCaption = styled.p`
  margin-top: 8px;
  text-align: center;
`;

const Frameworks = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
gap: 10px;
   padding: 8px;
   border-radius: 8px;
   background-color: #1e1e1f;
   color: #90CDF4;
  box-shadow: 0px 1px 7px 1px #0e0e0e; 
`

function Portfolio() {
  return (
    <div>
      <h1 style={{marginTop:'30px'}}>Portfolio</h1>
    <ImageSet>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Dashboard</ImageCaption>
        <div style={{display:'flex',gap:'20px'}}>

        <Frameworks>
        <FaReact />
        <div>React</div>
        </Frameworks>
        <Frameworks>
        <FaChartPie color='#E53F66' />
        <div style={{color:'#E53F66'}}>ECharts</div>
        </Frameworks>
        </div>
      </ImageContainer>
      <ImageContainer>
        <Image src={dashboard} layout='responsive' height={200} width={230} alt='' />
        <ImageCaption>Admin Dashboard</ImageCaption>
     
      </ImageContainer>
      <ImageContainer>
        <Image src={ecommerce} layout='responsive' height={380} width={250} alt='' />
        <ImageCaption>Ecommerce</ImageCaption>
      </ImageContainer>
      {/* <ImageContainer>
        <img src={'http://127.0.0.1:5500/assets/images/project-4.png'} height={200} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <img src={'http://127.0.0.1:5500/assets/images/project-5.png'} height={200} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <img src={'http://127.0.0.1:5500/assets/images/project-7.png'} height={200} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer> */}
    </ImageSet>
    </div>
  );
}

export default Portfolio;

