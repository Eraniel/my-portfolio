import { FunctionComponent, JSX } from 'react';
import styled from "styled-components";
import { JobPlace } from '../interfases';

const JobPlaceClosed = styled.div<{active : boolean}>`
    display: flex;
    flex-direction: column;
    min-width: 20%;
    max-width: 20%;
    height: 175px;
    cursor: pointer;
    margin: 10px 0 0 0;
    white-space: normal;
    
    color: ${({ active }) => (active ? "#fff" : "#E5B80B")};
    border-top:  ${({ active }) => (active ? "1px solid #fff" : "3px solid #E5B80B")};
    border-right: ${({ active }) => (active ? "1px solid #fff" : "3px solid #E5B80B")};
    border-bottom: 1px solid ${({ active }) => (active ? "#fff" : "#E5B80B")};
    border-left: 1px solid ${({ active }) => (active ? "#fff" : "#E5B80B")};
    text-shadow: ${({ active }) => (active ? "0 0 20px #fff" : "0 0 20px #E5B80B")};
    top: ${({ active }) => (active ? 15 : 25)}%;
    position: relative;
    perspective: 100px;
    transition: transform 1s;
    transform: ${({ active }) => (active ? "rotateY(0deg) skewY(0deg)" : "rotateY(30deg) skewY(10deg)")};
    p {
        margin: 10px 15px;
    }
    &:hover {
        color: #fff;
        text-shadow: 0 0 20px #fff;
    }
    @media (max-width: 1400px) {
        min-width: 150px;
        max-width: 150px;
        top: 0;
        right: ${({ active }) => (active ? 20 : 0)}%;
    }
    @media (max-width: 768px) {
        min-width: 100%;
        max-width: 100%;
        right: ${({ active }) => (active ? 5 : 0)}%;
    }
`;


interface JobCardProps {
    active: boolean,
    zIndex: number,
    jobplace: JobPlace,
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const JobCard: FunctionComponent<JobCardProps> = ({ active, zIndex, jobplace, onClick }: JobCardProps): JSX.Element => {
    

    return (
        <JobPlaceClosed active={active} style={{ zIndex: zIndex }} onClick={onClick}>
            <p>{jobplace.name}</p>
            <p>{jobplace.time}</p>
        </JobPlaceClosed>
    );
};

export default JobCard;
