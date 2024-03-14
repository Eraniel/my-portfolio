import { FunctionComponent, JSX, useState, useEffect } from 'react';
import styled, {keyframes} from "styled-components";


const MatrixContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ColumnSymbols = styled.div<{leftPosition : number}>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: ${({ leftPosition }) => leftPosition}%;
`;
const Symbol = styled.div<{ animated: boolean }>`
    display: flex;
    margin: 1px 0;
    justify-content: center;
    color: #E5B80B;
    width: 20px;
    height: 20px;
    animation: ${({ animated }) => (animated ? fadeOutAnimation : 'none')} 1.5s ease-in-out forwards;
    
    &.fadeOut {
        animation-name: ${fadeOutAnimation};
    }
    
`;




const Matrix: FunctionComponent = (): JSX.Element => {
    const symbols = ['⼈', '⼒', '⼕', '⼟', '⼣', '⼥', '⼯', '⼰', '⼿', '⼼', '⽉', '⽂', '⽓', '⽣', '⽢', '⽰', '⾆', '⾃', '⾔', '⾿', '⿕', '⿓', 'ボ', 'グ', 'ダ', 'ン', 'デ', 'ベ', 'ロ', 'ッ', 'パ', 'ー', '@', '#', '$', '&', '𐊠', '𐊶', 'B', 'O', 'H', 'D', 'N', 'P', 'T', 'I', 'L', 'E', 'Y', 'V', 'L', 'R', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const [randomElements, setRandomElements] = useState<string[]>([]);

    useEffect(() => {
        const addSymbolWithDelay = (index: number) => {
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                setRandomElements(prevRandomElements => [...prevRandomElements, symbols[randomIndex]]);
            }, 250 * index);
        };
    
        for (let i = 0; i < 20; i++) {
            addSymbolWithDelay(i);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (randomElements.length === 20) {
            setTimeout(() => {
                randomElements.forEach((_, index) => {
                    setTimeout(() => {
                        fadeOut(index);
                    }, 250 * index);
                });
            }, 500);
        }
    }, [randomElements]);

    const fadeOut = (index: number) => {
        const symbolFadeOut = document.getElementById(`symbolFadeOut_${index}`);
        if (symbolFadeOut) {
            symbolFadeOut.classList.add('fadeOut');
        }
    };
   

    return (
        <MatrixContainer>
            <ColumnSymbols leftPosition={10}>{randomElements.map((element, index) => (
            <Symbol id={`symbolFadeOut_${index}`}  key={index} animated={false} style={{color: index === randomElements.length - 1 ? "#fff" : "#E5B80B", textShadow: index === randomElements.length - 1 ? "0 0 10px #fff" : "0 0 10px #E5B80B"}}>
                {element}
            </Symbol>
        ))}</ColumnSymbols>
        </MatrixContainer>
    );

};

export default Matrix;