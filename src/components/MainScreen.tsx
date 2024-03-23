import { FunctionComponent, JSX, useState, useEffect } from 'react';
import styled from "styled-components";

import { jobplaces, projects, skills, skillsSec } from '../jobplaces';
import MatrixColumn from './MatrixColumn';
import JobCard from './JobCard';

import { JobPlace } from '../interfases';

const AppContainer = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  background-color: #242424;
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  h2 {
    color: #E5B80B;
    font-size: 40px;
    font-family: 'terminator';
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  background: rgba(255, 255, 255, 0.0);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 100%;
  padding: 1% 0;
  img {
    margin: 0 0 0 15%;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    img {
      width: 15%;
    }
  }
  @media (max-width: 768px) {
    img {
      margin: 0 0 0 5%;
    }
  }
`;
const Resume = styled.a`
  font-family: 'terminator';
  font-size: 30px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #E5B80B;
  text-decoration: none;
  margin: 0 15% 0 0;
  padding: 0 0 0 15px;
  img {
    margin: 0 0 0 10px;
  }
  @media (max-width: 768px) {
    margin: 0 5% 0 0;
    font-size: 20px;
  }
`;
const ResumeBottom = styled.a`
  font-family: 'terminator';
  font-size: 26px;
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
  cursor: pointer;
  color: #E5B80B;
  text-decoration: none;
`;
const MatrixContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`;
const PhotoSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 7% 15% 0 15%;
  width: 70%;
  overflow: hidden;
  img {
    width: 30%;
    z-index: 1;
  }
  h1 {
    font-size: 70px;
    font-family: 'terminator';
    top: 50%;
    position: absolute;
    z-index: 1;
  }
  h2 {
    color: #ebebeb;
    top: 70%;
    position: absolute;
    z-index: 1;
  }
  span {
    transition: color 2s;
    &:hover {
      color: #E5B80B;
      transition: color 0s;
    }
  }
  @media (max-width: 1600px) {
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 36px;
    }
  }
  @media (max-width: 1300px) {
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 32px;
    }
  }
  @media (max-width: 1100px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 28px;
    }
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }
  @media (max-width: 768px) {
    margin: 7% 5%;
    width: 90%;
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 18px;
    }
  }
`;
const AboutSection = styled.div<{boxShadow: string}>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 7% 15% 0 15%;
  width: 70%;
  border-right: 2px solid #e5b80b;
  border-bottom: 2px solid #e5b80b;
  box-shadow: ${({ boxShadow }) => boxShadow};
  -webkit-box-shadow: ${({ boxShadow }) => boxShadow};
  -moz-box-shadow: ${({ boxShadow }) => boxShadow};
  transition: box-shadow 1s ease-in-out;
  p {
    letter-spacing: 1px;
    line-height: 145%;
  }
  @media (max-width: 768px) {
    margin: 7% 5%;
    width: 90%;
  }
`;
const ContainerVAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const ContainerV = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerH = styled.div`
  display: flex;
  flex-direction: row;
  
`;
const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 7% 15% 0 15%;
  width: 70%;
  h3 {
    margin: 50px 0 15px 0;
  }
  @media (max-width: 768px) {
    margin: 7% 5%;
    width: 90%;
  }
`;
const Skill = styled.div<{sec: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 5px 10px 0 0;
  background-color: ${({ sec }) => (sec ? "#ebebeb" : "#E5B80B")};
  color: black;
  letter-spacing: 1px;
  line-height: 145%;
`;
const PrevJobsSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 7% 15% 0 15%;
  width: 70%;
  @media (max-width: 768px) {
    margin: 7% 5%;
    width: 90%;
  }
`;
  // scroll horizontal
  // overflow: hidden;
  // white-space: nowrap;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  // overflow-x: scroll;
  // &::-webkit-scrollbar {
  //  display: none;
  // }
const PrevJobs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 400px;
  width: 50%;
  @media (max-width: 1400px) {
    justify-content: flex-start;
    align-items: flex-end;
    height: 800px;
    width: 35%;
    justify-content: center;
    flex-direction: column;
  }
`;
const JobPlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  white-space: normal;
  padding: 0 20px 0 0;
  h2 {
    font-size: 30px;
    margin: 30px 0 0 0;
  }
  h3 {
    margin: 20px 0 0 0;
  }
  h4 {
    margin: 20px 0 0 0;
    color: #E5B80B;
  }
  p {
    margin: 20px 0 0 0;
    letter-spacing: 1px;
    line-height: 145%;
  }
  @media (max-width: 1280px) {
    width: 65%;
  }
`;
const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 7% 15% 0 15%;
  width: 70%;
  @media (max-width: 768px) {
    margin: 7% 5%;
    width: 90%;
  }
`;
const ContainerHChange = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
const Project = styled.div<{boxShadow: string}>`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #E5B80B;
  box-shadow: ${({ boxShadow }) => boxShadow};
  -webkit-box-shadow: ${({ boxShadow }) => boxShadow};
  -moz-box-shadow: ${({ boxShadow }) => boxShadow};
  transition: box-shadow 1s ease-in-out;

  h3 {
    color: #E5B80B;
    font-size: 30px;
    font-family: terminator;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 450px;
    height: 300px;
    object-fit: cover;
  }
  p {
    align-self: center;
    width: 40%;
    margin: 0 0 0 10%;
    letter-spacing: 1px;
    line-height: 145%;
  }
  @media (max-width: 1280px) {
    p {
      margin: 0 0 0 5%;
    }
  }
  @media (max-width: 1080px) {
    img {
      width: 100%;
    }
    p {
      margin: 5% 0;
      width: 100%;
    }
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7% 15%;
  width: 70%;
  h3 {
    font-size: 30px;
    margin: 0 0 20px 0;
  }
  img {
    margin: 0 15px 0 0;
  }
  @media (max-width: 768px) {
    margin: 7% 5%;
    width: 90%;
  }
`;
const ContainerVFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const InnerFooter = styled.div`
  display: flex;
  flex-direction: row;
  p {
    user-select: all;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const MainScreen: FunctionComponent = (): JSX.Element => {
  //PhotoSection
  const wrapLettersWithSpan = (text: string) => {
    const result = [];
    const pattern = /\S/;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (pattern.test(char)) {
            result.push(<span key={i}>{char}</span>);
        } else {
            result.push(char);
        }
    }
    return result;
  }
  const originName = "Bohdan Pantiley";
  const originSpec = "Front-end Developer";
  const wrappedName = wrapLettersWithSpan(originName);
  const wrappedSpec = wrapLettersWithSpan(originSpec);
  //JobSection
  const [activeIndex, setActiveIndex] = useState<number | null>(null); 
  const [selectedJob, setSelectedJob] = useState<JobPlace | null>(null);
  const handleClick = (selected : JobPlace) => {
    if (selected.id === activeIndex){
      setActiveIndex(null);
      setSelectedJob(null);
    } else {
      setActiveIndex(null);
      setSelectedJob(null);

      setTimeout(() => {
        setActiveIndex(selected.id);
        setSelectedJob(selected);
      }, 50);
    }
  };
  const textTyper = (text: string, id: string, speed: number) => {
    let i = 0;
    const element = document.getElementById(id);
    if (element !== null) {
      element.innerHTML = '';
      const typeNextChar = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeNextChar, speed);
        }
      };
      typeNextChar();
    }
  };
  useEffect(() => {
    if (selectedJob){
      textTyper(selectedJob.name, "job-name", 50);
      textTyper(selectedJob.time, "job-time", 50);
      textTyper(selectedJob.position, "job-position", 50);
      textTyper(selectedJob.description, "job-description", 5);
    } 
  }, [selectedJob]);

  //Matrix
  const generateMatrixColumns = () => {
    const columns = [];
    for (let i = 0; i <= 96; i += 3) {
        columns.push(<MatrixColumn key={i} leftPosition={i} />);
    }
    return columns;
  };

  //shadow-glowing
  const [isFirstShadow, setIsFirstShadow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstShadow((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return (
        <AppContainer>
          <Header>
            <img onClick={() => window.scrollTo(0, 0)} src="img/LogoYellow.png" alt="logo"/>
            <Resume href="img/BohdanPantiley.pdf" download="Bohdan's resume" target="_blank">Resume<img src ="img/download-icon.svg" alt="download" /></Resume>
          </Header>
          <PhotoSection>
          <MatrixContainer>
            {generateMatrixColumns()}
          </MatrixContainer>
            <img src="img/BohdanP.png" alt="bohdan" />
            <h1>{wrappedName}</h1>
            <h2>{wrappedSpec}</h2>
          </PhotoSection>
          <AboutSection boxShadow={isFirstShadow ? '15px 15px 15px -5px rgba(229,184,11,0.4)' : '20px 19px 15px -15px rgba(229,184,11,0.4)'}>
            <h2>Hello there!</h2>
            <ContainerH>
              <ContainerVAbout>
                <p>Name is Bohdan and I am sociable, curious and positive person. And actually, a web developer with 2 years of experience in JavaScript and React. My earlier background spans across various domains. Transitioning from roles in project management and system administration to a freelance career in graphic design and website markup underscores my versatility.</p>
                <p>Now I am looking for an opportunity to improve my skills in friendly team.</p>
                <p></p>
              </ContainerVAbout>
            </ContainerH>
          </AboutSection>
          
          <SkillsSection>
            <h2>Main skills</h2>
            <ContainerH style={{flexWrap:'wrap'}}>
              {skills.map((skill) => {
                return  (
                  <Skill sec={false}>{skill}</Skill>
                );
              })}
            </ContainerH>
            <h3>Secondary skills</h3>
            <ContainerH style={{flexWrap:'wrap'}}>
              {skillsSec.map((skill) => {
                return  (
                  <Skill sec={true}>{skill}</Skill>
                );
              })}
            </ContainerH>
          </SkillsSection>         
          <PrevJobsSection>
            <h2>Job places</h2>
            <ContainerH>
              <JobPlaceInfo>
                {selectedJob ?
                  <>
                  <h2 id="job-name"> </h2>
                  <h3 id="job-time"> </h3>
                  <h4 id="job-position"> </h4>
                  <p id="job-description"> </p>
                  </>
                  : null
                }
              </JobPlaceInfo>
              <PrevJobs>
                {jobplaces.map((jobplace) => {
                  return  (
                    <JobCard key={jobplace.id} zIndex={ jobplaces.length - jobplace.id } active={activeIndex === jobplace.id} onClick={() => {handleClick(jobplace)}} jobplace={jobplace} />
                  );
                })}
              </PrevJobs>
            </ContainerH>
          </PrevJobsSection>
          <ProjectsSection>
            <h2>Solo projects</h2>
            <ContainerV>
              {projects.map((project) => {
                return  (
                  <Project boxShadow={isFirstShadow ? '-2px 15px 10px -8px rgba(229,184,11,0.4)' : '-2px 19px 10px -8px rgba(229,184,11,0.4)'}>
                    <h3>{project.name}</h3>
                    <ContainerHChange>
                      <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={project.img} alt=""/></a>
                      <p>{project.description}</p>
                    </ContainerHChange>
                  </Project>
                );
              })}
            </ContainerV>
          </ProjectsSection>         
          <Footer>
            <h2>Contact Me</h2>
            <h3>And let's create something cool!</h3>
            <InnerFooter>
              <ContainerVFooter>
                <ContainerH>
                  <img src="img/github.svg" alt="Github-icon" />
                  <p>https://github.com/Eraniel</p>
                </ContainerH>
                <ContainerH>
                  <img src="img/gmail.svg" alt="Email-icon" />
                  <p>l.o.t.future@gmail.com</p>
                </ContainerH>
                <ResumeBottom href="img/BohdanPantiley.pdf" download="Bohdan's resume" target="_blank">Resume download<img src ="img/download-icon.svg" alt="download" /></ResumeBottom>
              </ContainerVFooter>      
              <ContainerVFooter>
                <p>This website is owned, created and operated by Bohdan Pantiley</p>
                <p>Copyright © {new Date().getFullYear()}</p>
              </ContainerVFooter>
            </InnerFooter>
          </Footer>
        </AppContainer>
      );
};

export default MainScreen;