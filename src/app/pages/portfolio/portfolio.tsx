import project from '../../../../public/Al-hilal-1.png';
import Image from 'next/image';
import { styled } from 'styled-components';
import dashboard from '../../../../public/cogplay-1.png';
import ecommerce from '../../../../public/Office Mangment Systyem-1.png';
import oono from '../../../../public/oono.png';
import { FaReact } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";


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
max-height: 450px;
object-fit: contain;

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
const ProjectLink = styled.a`
color: #90CDF4;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;

const projects = [
  {
    src: oono,
    alt: 'Oono',
    name: 'Oono',
    frameworks: [
      { icon: <FaReact />, name: 'Next JS' },
      { icon: <FaChartPie color='#E53F66' />, name: 'AMP', color: '#E53F66' }
    ],
    link: 'https://staging-brand.oono.ai/alpa4'
  },
  {
    src: project,
    alt: 'Al-Hilal',
    name: 'Al-Hilal',
    frameworks: [
      { icon: <FaReact />, name: 'React JS' },
      { icon: <FaChartPie color='#E53F66' />, name: 'shadcn', color: '#E53F66' }
    ],
    link: 'https://hilal-staging.midood.com/'
  },
  {
    src: dashboard,
    alt: 'COGPLAY',
    name: 'COGPLAY',
    frameworks: [
      { icon: <FaReact />, name: 'React JS' },
      { icon: <FaChartPie color='#E53F66' />, name: 'Ant Design', color: '#E53F66' },
      { icon: <FaChartLine color='#E53F66' />, name: 'ECharts', color: '#E53F66' },
      
    ],
    link: 'https://eva-mazzei-cogplay-337-staging.botics.co/'
  },
  // {
  //   src: project,
  //   alt: 'Rent Arround',
  //   name: 'Rent Arround',
  //   frameworks: [
  //     { icon: <FaReact />, name: 'Next JS' },
  //     { icon: <FaChartPie color='#E53F66' />, name: 'React Query', color: '#E53F66' }
  //   ],
  //   link: 'https://rentarround.com'
  // },
  {
    src: ecommerce,
    alt: 'Office Management System',
    name: 'Office Management System',
    frameworks: [
      { icon: <FaReact />, name: 'React JS' },
      { icon: <FaChartPie color='#4e55d3' />, name: 'Single SPA', color: '#c1c4f3' },
      { icon: <BsFiletypeScss color='#E53F66' />, name: 'SCSS', color: '#E53F66' }
    ],
    link: 'https://oms.enigmatix.co/'
  },
  // {
  //   src: project,
  //   alt: 'Journey App',
  //   name: 'Journey App',
  //   frameworks: [
  //     { icon: <FaReact />, name: 'React JS' },
  //     { icon: <FaChartPie color='#E53F66' />, name: 'Redux Toolkit', color: '#E53F66' }
  //   ],
  //   link: 'https://journeyapp.com'
  // }
];


function Portfolio() {
  return (
    <div>
      <h1 style={{ marginTop: '30px' }}>Projects</h1>

      <ImageSet>
        {projects.map((project, index) => (
          <ImageContainer key={index}>
            <Image src={project.src} layout="responsive" height={250} width={250} alt={project.alt} />
            <ImageCaption>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </ProjectLink>
            </ImageCaption>
            <div style={{ display: 'flex', gap: '10px',justifyContent:'center',alignItems:'center' }}>
              {project.frameworks.map((framework, idx) => (
                <Frameworks key={idx}>
                  {framework.icon}
                  <div style={{ color: framework.color || '#90CDF4' }}>{framework.name}</div>
                </Frameworks>
              ))}
            </div>
          </ImageContainer>
        ))}
      </ImageSet>
    </div>

  );
}

export default Portfolio;

