import { useState } from "react"
import styled from "styled-components"
import Lottie from 'react-lottie-player'
import lottieJson from '@/assets/animations/like.json'
import likeSound from '@/assets/like.mp3'

function LikeButton (): JSX.Element {
    const [liked, setLiked] = useState(false)
    const handleClick = () => { 
        setLiked(!liked)
        if (!liked) playLikeSound()
    }

    const audio = new Audio(likeSound)

	const playLikeSound = () => {
		audio.playbackRate = 2
        audio.volume = .5
		audio.play()
	};

    const LikeWrapper = styled.button`
        background-color: transparent;
        border: none;
        position: absolute;
        right: 10px;
        top: 10px;
        & > svg {
            width: 24px;
            height: 24px;
            fill: var(--color-text);
            opacity: .2;
            &.icon_liked {
                fill: var(--color-accent);
                opacity: 1;
            }
        }
        .icon_sparkle {
            position: absolute;
            right: -14px;
            top: -20px;
        }
    `

    return (
        <LikeWrapper onClick={handleClick}>
            {liked ? 
                <svg className="icon_liked" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M236 92c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a8.1 8.1 0 0 1-7.8 0C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36Z"></path></svg>
                : <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path d="M236 92c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a8.1 8.1 0 0 1-7.8 0C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36Z"></path></svg>
            }
            <Lottie
                className="icon_sparkle"
                loop = {false}
                animationData={lottieJson}
                play = {liked}
                speed = {1.5}
                style={{ width: 64, height: 64 }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
        </LikeWrapper>
    )
}

export default LikeButton