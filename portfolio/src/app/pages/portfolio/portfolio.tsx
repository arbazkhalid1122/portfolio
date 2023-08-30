import styles from '../../page.module.css';
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
    <ImageSet>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
        <ImageCaption>Your Image Caption Here</ImageCaption>
      </ImageContainer>
    </ImageSet>
  );
}

export default Portfolio;
