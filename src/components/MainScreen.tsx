import { FunctionComponent, JSX } from 'react';
import styled from "styled-components";

const ComponentContainer = styled.div`
 font-family: 'Josefin Sans', sans-serif;
 font-size: 16px;
 color: #28292C;
 display: flex;
 flex-direction: column;
 align-items: center;
 user-select: none;
`;

interface MainScreenProps {  
}
const MainScreen: FunctionComponent<MainScreenProps> = (): JSX.Element => {

    return (
        <ComponentContainer>
        
        </ComponentContainer>
      );
};

export default MainScreen;