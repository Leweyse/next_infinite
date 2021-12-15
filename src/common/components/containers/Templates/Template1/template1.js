import { useEffect, useRef } from 'react';
import { Img, Title } from '../../../blocks';

const Template1 = (props) => {
    let imageInfo = props.imgInfo;
    let colorScheme = props.scheme;

    const templateRef = useRef();

    const setValues = useRef([
        {
            property: '--accent',
            value: colorScheme.accent2
        },
    ]);

    useEffect(() => {
        setValues.current.forEach((element) => {
            templateRef.current.style.setProperty(element.property, element.value);
        })
    }, []);

    return (
        <div ref={templateRef} className={'main t1'}>
            <aside className={'left'}>
                <Title class="t1-title" content="I'm such a big title" />
            </aside>

            <aside className={'right'}>
                <Img 
                    className={'image imgCenter imgMedium t1-img'}
                    url={imageInfo.urlRegular}
                    description={imageInfo.description}
                    credit={imageInfo.credit}
                    creditUrl={imageInfo.creditUrl}
                />
            </aside>
        </div>
    )
}


export default Template1;


