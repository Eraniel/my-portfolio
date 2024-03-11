import { FunctionComponent, JSX } from 'react';
import styled from "styled-components";

import { jobplaces, projects, skills } from '../jobplaces';



const AppContainer = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  background-color: #242424;
  color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  position: fixed;
`;

const PhotoSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 5% 15% 0 15%;
  width: 70%;
  img {
    width: 30%;
  }
  h1 {
    font-size: 70px;
    top: 50%;
    position: absolute;
  }
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5% 15% 0 15%;
  width: 70%;
  h2 {
    color: #E5B80B;
    font-size: 40px;
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
  margin: 5% 15% 0 15%;
  width: 70%;
  h2 {
    color: #E5B80B;
    font-size: 40px;
  }
`;
const Skill = styled.div`
  display: flex;
  padding: 5px 10px;
  margin: 5px 10px 0 0;
  background-color: #E5B80B;
  color: black;
`;
const PrevJobsSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5% 15% 0 15%;
  width: 70%;
  h2 {
    color: #E5B80B;
    font-size: 40px;
  }
`;
const JobPlace = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #ebebeb;
    font-size: 30px;
  }
`;
const ProjectsSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5% 15% 0 15%;
  width: 70%;
  h2 {
    color: #E5B80B;
    font-size: 40px;
  }
`;
const Project = styled.div`
  display: flex;
`;
const Footer = styled.div`
  display: flex;
`;


const MainScreen: FunctionComponent = (): JSX.Element => {
  

    return (
        <AppContainer>
          <Header>Header</Header>
          
          <PhotoSection>
            <img src="img/BohdanP.png" alt="bohdan" />
            <h1>Javascript Developer</h1>
          </PhotoSection>
          <AboutSection>
            <h2>A little bit about me:</h2>
            <ContainerH>
              <ContainerV style={{width: '60%'}}>
                <p>Hello there!</p>
                <p>Name is Bohdan and I am sociable, curious and positive person. And actually, a web developer with 2 years of experience in JavaScript and React. My earlier background spans across various domains. Transitioning from roles in project management and system administration to a freelance career in graphic design and website markup underscores my versatility. I'm deeply committed to continuous learning, as evidenced by my completion of numerous online courses in web development and React.js.</p>
                <p>Now I have theoretical knowledge, along with pet project, in Svelte. So I am eager to use them in real scenarios.</p>
                <p></p>
              </ContainerV>
              <img src="" alt="cool something" />
            </ContainerH>
          </AboutSection>
          <SkillsSection>
            <h2>My skills:</h2>
            <ContainerH>
              {skills.map((skill) => {
                return  (
                  <Skill>{skill}</Skill>
                );
              })}
            </ContainerH>
          </SkillsSection>
          
          <PrevJobsSection>
            <h2>My job places:</h2>
            <ContainerH>
              {jobplaces.map((jobplace) => {
                return  (
                  <JobPlace>
                    <h2>{jobplace.name}</h2>
                    <h3>{jobplace.time}</h3>
                    <h4>{jobplace.position}</h4>
                    <p>{jobplace.description}</p>
                  </JobPlace>
                );
              })}
            </ContainerH>
          </PrevJobsSection>
          <ProjectsSection>
            <h2>My projects:</h2>
            <ContainerV>
              {projects.map((project) => {
                return  (
                  <Project>
                    <h3>{project.name}</h3>
                    <img src={project.img} alt=""/>
                    <p>{project.description}</p>
                    <h4>{project.link}</h4>
                  </Project>
                );
              })}
            </ContainerV>
          </ProjectsSection>
          
          <Footer></Footer>
        </AppContainer>
      );
};

export default MainScreen;