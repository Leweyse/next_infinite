import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Title, Text } from '../../../blocks';

const Template3 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    const main = useRef();
    const clipPath = useRef();
    const imgContainer = useRef();

    const imgBg = useRef();
        
    let tl = gsap.timeline();

    useEffect(() => {
        imgBg.current.style.setProperty('background-position', 'center');

        let centerX = main.current.clientWidth / 2;
        let centerY = main.current.clientHeight / 2;

        main.current.addEventListener('mousemove', (event) => {
            gsap.to(clipPath.current, {
                duration: 0.5,
                ease: "power1.out",
                x: (event.clientX - centerX) / 5,
                y: (event.clientY - centerY) / 5
            })
            gsap.to(imgContainer.current, {
                duration: 0.5,
                ease: "power1.out",
                x: (centerX - event.clientX) / 4.5,
                y: (centerY - event.clientY) / 4.5
            })
        })
    }, [])

    return (
        <div ref={main} id={'t3-main'} >
            <div id={'t3-title1'}>
                <Title class={"t3-title"} content={"Welcome!"} color = {colorScheme.txtColor} />
            </div>
            <div ref={clipPath} id={'t3-imgContainer'}>
                <span id={'t3-title2'}>
                    <Title class={"t3-title"} content={"Welcome!"} color = {colorScheme.accent3} />
                </span>
                <div ref={imgContainer} id={"imageContainer"}>
                    <div ref={imgBg} id={"imageBg"} style={{background: `url(${imageInfo.urlRegular})`}}></div>
                </div>
            </div>
            <Text id={'t3-text'} text={"scroll"} accent={colorScheme.accent1}/>
        </div>
    )
}

export default Template3;