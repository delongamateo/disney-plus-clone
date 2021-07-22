import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import db from '../../firebase';

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState()

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            } else {

            }
        })
    }, [])

    console.log(movie)

    return (
        <Container>
            {movie && (
                <>
                <Background>
                    <img src={movie.backgroundImg} />
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" />
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" />
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                    {movie.subTitle} 
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 5px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 55px;
    background: rgb(250, 250, 250);
    border: none;
    padding: 0px 25px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgb(250, 250, 250);
    color: rgba(250, 250, 250)
`
const AddButton = styled.button`
    margin-right: 15px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0, 0, 0)
`
const SubTitle = styled.div`
    color: rgb(250, 250, 250);
    font-size: 15px;
    min-height: 20px;
    margin-top: 25px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 15px;
    color: rgb(250, 250, 250);
    max-width: 750px;
`

export default Detail
