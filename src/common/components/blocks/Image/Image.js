import React, { useRef } from 'react';
import Image from 'next/image';

const Img = React.forwardRef((props, ref) => {
    const imgData = useRef(props.obj);

    return (
        <div ref={ref} className={"img"}>
            <Image
                id={props.id}
                className={props.className}
                src={props.url}
                alt={props.description}
                width={1000}
                height={1000}
                layout='responsive'
                priority
            />
            <figcaption>Img by {props.credit} on <a href={props.creditUrl}>Unsplash</a></figcaption>
        </div>
    )
})

// Based on "Component definition is missing display name" (react/display-name)
Img.displayName = Img;

export default Img;