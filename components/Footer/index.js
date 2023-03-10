import Facebook from '../Icons/facebook';
import Gitlab from '../Icons/gitlab';
import InstagramIcon from '../Icons';
import Linkedin from '../Icons/linkedin';
import Email from '../Icons/email';
import { useState } from 'react';

const Footer = () => {

    const [activeIcons, setActiveIcons] = useState({});

    const onMouseEnter = (name) => {
        const object = { ...activeIcons };
        object[name] = true;
        setActiveIcons({ ...object });
    };

    const onMouseOut = (name) => {
        const object = { ...activeIcons };
        object[name] = false;
        setActiveIcons({ ...object });
    };

    return <>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 50 }}>
            <div
                onMouseLeave={() => onMouseOut("face")}
                onMouseEnter={() => onMouseEnter("face")}
                style={{ height: "20px", marginTop: '20px' }}
            >
                <a rel="noreferrer" target="_blank"
                    href="https://www.facebook.com/abdalhady.jarad">
                    <Facebook isActive={activeIcons["face"]} />
                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("gitlab")}
                onMouseEnter={() => onMouseEnter("gitlab")}
                style={{ marginTop: "20px", height: '20px' }}
            >
                <a rel="noreferrer" target="_blank" href="https://gitlab.com/AbdulhadiJarad">
                    <Gitlab isActive={activeIcons["gitlab"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("insta")}
                onMouseEnter={() => onMouseEnter("insta")}
                style={{ marginTop: "20px", height: '20px' }}
            >
                <a rel="noreferrer" target="_blank"
                    href="https://www.instagram.com/abd_alhadi_jarad/">
                    <InstagramIcon isActive={activeIcons["insta"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("linkedin")}
                onMouseEnter={() => onMouseEnter("linkedin")}
                style={{ height: '20px', marginTop: "20px" }}
            >
                <a rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/"
                >
                    <Linkedin isActive={activeIcons["linkedin"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("email")}
                onMouseEnter={() => onMouseEnter("email")}
                style={{ height: '20px', marginTop: "20px", }}
            >
                <a rel="noreferrer" href="mailto:abdulhadi.jarad@gmail.com">
                    <Email isActive={activeIcons["email"]} />

                </a>
            </div>
        </div>
        <hr style={{ margin: '0px auto', marginTop: '25px', position: 'relative', width: '20%' }} className={"headingDivider"}></hr>
        <p style={{ textAlign: 'center', fontSize: '15px', marginBottom: '50px', marginTop: '15px' }}>Designed & Coded by Abdulhadi Jarad</p>
    </>
}

export default Footer;