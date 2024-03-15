import React, { FunctionComponent, useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";

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
const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const ColumnSymbols = styled.div<{ leftPosition: number }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: ${({ leftPosition }) => leftPosition}%;
`;
const Symbol = styled.div<{ animatedIn: boolean, animatedOut: boolean, isLast: boolean }>`
    display: ${({ animatedIn }) => (animatedIn ? 'flex' : 'none')};
    margin: 1px 0;
    justify-content: center;
    color: ${({ isLast }) => (isLast ? "#fff" : "#E5B80B")};
    text-shadow: ${({ isLast }) => (isLast ? "0 0 20px #fff" : "0 0 20px #E5B80B")};
    width: 20px;
    height: 20px;
    
    animation: ${({ animatedIn, animatedOut }) => (animatedIn && !animatedOut) ? fadeInAnimation : fadeOutAnimation} ${({ animatedIn, animatedOut }) => (animatedIn && !animatedOut) ? '0s' : '1.5s'} ease-in-out forwards;
`;

const Matrix: FunctionComponent = (): JSX.Element => {
    const symbols = ['⼈', '⼒', '⼕', '⼟', '⼣', '⼥', '⼯', '⼰', '⼿', '⼼', '⽉', '⽂', '⽓', '⽣', '⽢', '⽰', '⾆', '⾃', '⾔', '⾿', '⿕', '⿓', 'ボ', 'グ', 'ダ', 'ン', 'デ', 'ベ', 'ロ', 'ッ', 'パ', 'ー', '@', '#', '$', '&', '𐊠', '𐊶', 'B', 'O', 'H', 'D', 'N', 'P', 'T', 'I', 'L', 'E', 'Y', 'V', 'L', 'R', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const [randomElements, setRandomElements] = useState<string[]>([]);
    const [fadeInIndexes, setFadeInIndexes] = useState<number[]>([]);
    const [fadeOutIndexes, setFadeOutIndexes] = useState<number[]>([]);
    const [lastFadeInIndex, setLastFadeInIndex] = useState<number>(-1);
    const [isNewStart, setIsNewStart] = useState<boolean>(true);

    const numberOfSymbols = 30;

    useEffect(() => {
        if (isNewStart) {      
            const newRandomElements = [];
            for (let i = 0; i < numberOfSymbols; i++) {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                newRandomElements.push(symbols[randomIndex]);
            }
            setRandomElements(newRandomElements);
            setIsNewStart(false);
        }                        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNewStart]);
   

    useEffect(() => {
        if (randomElements.length === numberOfSymbols) {
            setTimeout(() => {
                for (let i = 0; i < numberOfSymbols; i++) {
                    setTimeout(() => {
                        setFadeInIndexes(prevIndexes => {
                            const updatedIndexes = [...prevIndexes, i];
                            setLastFadeInIndex(i);
                            return updatedIndexes;
                        });
                    }, 100 * i);
                }
            }, 300);
        }
    }, [randomElements]);

    useEffect(() => {
        if (fadeInIndexes.length === numberOfSymbols) {
            setTimeout(() => {
                for (let i = 0; i < numberOfSymbols; i++) {
                    setTimeout(() => {
                        setFadeOutIndexes(prevIndexes => [...prevIndexes, i]);
                    }, 150 * i);
                }
            }, 300);
        }
    }, [fadeInIndexes]);

    useEffect(() => {
        if (fadeOutIndexes.length === numberOfSymbols) {
            setTimeout(() => {
                setRandomElements([]);
                setFadeInIndexes([]);
                setFadeOutIndexes([]);
                setIsNewStart(true);
            }, 1510);
        }
    }, [fadeOutIndexes]);


    return (
        <MatrixContainer>
            <ColumnSymbols leftPosition={10}>
                {randomElements.map((element, index) => (
                    <Symbol
                        key={index}
                        animatedIn={fadeInIndexes.includes(index)}
                        animatedOut={fadeOutIndexes.includes(index)}
                        isLast={index === lastFadeInIndex}
                    >
                        {element}
                    </Symbol>
                ))}
            </ColumnSymbols>
        </MatrixContainer>
    );
};

export default Matrix;
