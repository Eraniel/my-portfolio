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

const ColumnSymbols = styled.div<{ leftPosition: number }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: ${({ leftPosition }) => leftPosition}%;
`;
const Symbol = styled.div<{ animated: boolean, isLast: boolean }>`
    display: flex;
    margin: 1px 0;
    justify-content: center;
    color: ${({ isLast }) => (isLast ? "#fff" : "#E5B80B")};
    text-shadow: ${({ isLast }) => (isLast ? "0 0 10px #fff" : "0 0 10px #E5B80B")};
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
    const [fadeOutIndexes, setFadeOutIndexes] = useState<number[]>([]);

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
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        setFadeOutIndexes(prevIndexes => [...prevIndexes, i]);
                    }, 250 * i);
                }
            }, 500);
        }
    }, [randomElements]);

    return (
        <MatrixContainer>
            <ColumnSymbols leftPosition={10}>
                {randomElements.map((element, index) => (
                    <Symbol
                        key={index}
                        animated={fadeOutIndexes.includes(index)}
                        isLast={index === randomElements.length - 1}
                        className={fadeOutIndexes.includes(index) ? 'fadeOut' : ''}
                    >
                        {element}
                    </Symbol>
                ))}
            </ColumnSymbols>
        </MatrixContainer>
    );
};

export default Matrix;
