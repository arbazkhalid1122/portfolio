import project from '../../../../public/projct.jpg';
import Image from 'next/image';
import { styled } from 'styled-components';

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


function Portfolio() {
  return (
    <div>
      <h1 style={{marginTop:'30px'}}>Portfolio</h1>
    <ImageSet>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <img src={'https://www.istockphoto.com/essential/vector/dashboard-great-design-for-any-site-purposes-business-infographic-template-vector-gm1309831153-399425704'} height={200} width={250} alt='' />
        <ImageCaption>Admin Dashboard</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdigitalead.com%2Fe-commerce-development-service%2F&psig=AOvVaw3x4_LWYa1KoAAtvPo8U_Dz&ust=1714748570599000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiqlLSe74UDFQAAAAAdAAAAABAJ'} height={200} width={250} alt='' />
        <ImageCaption>eCommerce</ImageCaption>
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
