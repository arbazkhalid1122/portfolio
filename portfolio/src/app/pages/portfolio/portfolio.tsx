import project from '../../../../public/projct.jpg';
import Image from 'next/image';
import { styled } from 'styled-components';


function Portfolio() {
  return (
    <ImageSet>
        <ImageContainer>
          <Image src={project} layout="responsive" height={250} width={250} alt='' />
        </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
      <ImageContainer>
        <Image src={project} layout="responsive" height={250} width={250} alt='' />
      </ImageContainer>
    </ImageSet>
  );
}

export default Portfolio;



const ImageSet = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap; 
  margin-top: 70px;
  justify-content: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  flex: 1 1 calc(33.33% - 40px); 
  max-width: calc(33.33% - 40px); 
  border-radius: 15px;
  @media (max-width: 768px) {
    flex-basis: calc(50% - 40px); 
    max-width: calc(50% - 40px);
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
    max-width: 100%;
  }

  position: relative;
  overflow: hidden;
  transition: transform 0.6s ease;
  will-change: transform;

  &:hover {
    transform: scale(1.3); 
  }
`;