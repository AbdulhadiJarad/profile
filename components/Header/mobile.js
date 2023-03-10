import { mobileData, webData } from "./webData";
import Menu from '../../public/menu.svg'
import Close from '../../public/close.svg'
import { useState } from "react";
import { style } from "./styles";


const MobileHeader = () => {



    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(true);
        document.body.style.overflow = 'hidden';
    }

    const closeMenu = () => {
        setClicked(false);
        document.body.style.overflow = 'scroll';
    }

    const onClickRoute = id => {
        setClicked(false);
        document.body.style.overflow = 'scroll';
        document.location.href = `#${id}`;
    }

    return <>

        <div style={style.wrapper} className="mobileHeader">
            <input type="checkbox" checked={clicked} id="active" />
            <img onClick={onClick} style={style.openIcon} src={'menu.svg'} />
            <div className="wrapper">

                <img onClick={closeMenu} style={style.closeMenu} src={'close.svg'} />
                <ul >
                    {mobileData.map((item, index) => <li key={item.id}><a rel="noreferrer" onClick={() => onClickRoute(item.id)}  style={{ fontSize: '4vmin' }}><span style={style.item}>0{index + 1}.</span> {item.name}</a></li>)}
                    <a rel="noreferrer" target={'_blank'} href="https://drive.google.com/file/d/1pxUDPTJREiZuMXBzX44PbknRk9caDa70/view?usp=share_link" id="resume" style={style.resume}>
                        Resume
                    </a>
                </ul>

            </div>
        </div>
    </>
}

export default MobileHeader;