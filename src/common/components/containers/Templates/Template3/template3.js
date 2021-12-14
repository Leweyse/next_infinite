import { useRef } from "react";
import { Img, Title, Text } from '../../../blocks';

const Template3 = (props) => {

    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;
    const viewBox = useRef(null);
    const img = useRef(null);
    const t2 = useRef(null);

    function mouseOver(){
        let Xdiff = 0;
        let Ydiff = 0;


        let imgX = img.current.offsetLeft;
        let imgY = img.current.offsetTop;
        let boxX = viewBox.current.offsetLeft;
        let boxY = viewBox.current.offsetTop;
        let t2X = t2.current.offsetLeft;
        let t2Y = t2.current.offsetTop;

        let oldX = 0;
        let oldY= 0;
        let directionX = "";
        let directionY = "";
        viewBox.current.onmousemove = function(event){
            let mouseX = event.pageX;
            let mouseY = event.pageY;
            if (mouseX < oldX) {
                directionX = "left"
            } else if (mouseX > oldX) {
                directionX = "right"
            } else {
                directionX = null;
            }
            if (mouseY < oldY){
                directionY = "up";
            } else if (mouseY > oldY){
                directionY = "down";
            } else {
                directionY = null;
            }
            oldX = mouseX;
            oldY = mouseY;

            switch(directionX) {
                case "left":
                    Xdiff --;
                    if(Xdiff > -80){
                        boxX -= 0.5;
                        imgX += 0.5;
                        t2X -= 0.3;
                    }
                    break;
                case "right":
                    Xdiff ++;
                    if(Xdiff < 80){
                        boxX += 0.5;
                        imgX -= 0.5;
                        t2X += 0.3;
                    }
                    break;
                case null:
                    break;
                default: break;
            }
            switch (directionY){
                case "up":
                    Ydiff --;
                    if(Ydiff > -80) {
                        boxY -= 0.5;
                        imgY += 0.5;
                        t2Y -= 0.2;
                    }
                    break;
                case "down":
                    Ydiff ++;
                    if(Ydiff < 80) {
                        boxY += 0.5;
                        imgY -= 0.5;
                        t2Y += 0.5;
                    }
                    break;
                case null:
                    break;
                default: break;
            }
            viewBox.current.style.top = boxY + "px";
            viewBox.current.style.left = boxX + "px";
            img.current.style.top = imgY + "px";
            img.current.style.left = imgX + "px";
            t2.current.style.top = t2Y + "px";
            t2.current.style.left = t2X + "px";
        }
    }

    function mouseLeave(){
        viewBox.current.style.top = "50VH";
        viewBox.current.style.left = "";
        img.current.style.top = "0";
        img.current.style.left = "0";
        t2.current.style.top = "0";
        t2.current.style.left = "50%";
    }

    return (
        <section id={'t3-main'} >
            <section id={'t3-title1'}>
                <Title class={"t3-title"} content={"Welcome!"} color = {colorScheme.txtColor} />
            </section>
            <section ref={viewBox} id={'t3-imgContainer'} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                <section ref={t2} id={'t3-title2'}>
                    <Title class={"t3-title"} content={"Welcome!"} color = {colorScheme.accent3} />
                </section>
                <Img refference={img} id={'t3-img'} url={imageInfo.urlRegular} description={imageInfo.description} credit={imageInfo.credit} creditUrl={imageInfo.creditUrl} />
            </section>
            <Text id={'t3-text'} text={"scroll"} accent={colorScheme.accent1}/>
        </section>
    )
}

export default Template3;