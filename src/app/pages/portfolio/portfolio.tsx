import project from '../../../../public/Al-hilal-1.png';
import Image from 'next/image';
import { styled } from 'styled-components';
import dashboard from '../../../../public/cogplay-1.png';
import ecommerce from '../../../../public/Office Mangment Systyem-1.png';
import oono from '../../../../public/oono.png';
import chatbot from '../../../../public/chatbot.png';


const projects = [
  {
    src: oono,
    alt: 'Oono',
    name: 'Oono',
    link: 'https://staging-brand.oono.ai/task-oono-new'
  },
  {
    src: project,
    alt: 'Al-Hilal',
    name: 'Al-Hilal',
    link: 'https://hilal-staging.midood.com/'
  },
  {
    src: dashboard,
    alt: 'COGPLAY',
    name: 'COGPLAY',
    link: 'https://eva-mazzei-cogplay-337-staging.botics.co/'
  },
  {
    src: ecommerce,
    alt: 'Office Management System',
    name: 'Office Management System',
    link: 'https://oms.enigmatix.co/'
  },
  {
    src: chatbot,
    alt: 'Chatbot',
    name: 'Chatbot',
    link: 'https://nextjs-chatbot-smoky-psi.vercel.app/'
  }
];
const ImageSet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Bigger images */
  gap: 20px;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3; /* Keeps all images the same size */
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures uniform image display */
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  font-weight: bold;
`;

function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <ImageSet>
        {projects.map((project, index) => (
          <ImageContainer key={index}>
            <Image src={project.src} layout="fill" alt={project.alt} />
            <ImageCaption>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#90CDF4', textDecoration: 'none' }}>
                {project.name}
              </a>
            </ImageCaption>
          </ImageContainer>
        ))}
      </ImageSet>
    </div>
  );
}

export default Portfolio;



