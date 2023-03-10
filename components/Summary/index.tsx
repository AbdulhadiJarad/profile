import type { NextPage } from "next";
import { TypeAnimation } from "react-type-animation";
import { summaryData } from "./data";
import { style } from "./style";

const Summary = () => {

  return (
    <section className="layout" style={style.root}>
      <section style={style.intro}>
        <section style={style.mainInfo}>
          <span className="italic" style={style.myNameIs}>{summaryData.welcome}</span>
          <span style={{ color: "#ccd6f6", fontWeight: "bold", fontSize: '9vmin' }}>

            <TypeAnimation
              sequence={[
                1000, // Waits 1s
                `${summaryData.name}`, // Types 'One'
                2000, // Waits 1s
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="h1"
              cursor={true}
              repeat={2}
            // style={{ fontSize: '2em' }}
            />
          </span>

          <span
            style={{
              display: "block",
              color: "#8892b0",
              lineHeight: "80px",
              fontWeight: "bold",
              fontSize: '7vmin'
            }}
          >

            <TypeAnimation
              sequence={[
                2000, // Waits 1s
                `${summaryData.job}`, // Types 'One'
                2000, // Waits 1s
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </section>
        <p className="italic" style={style.summary}>Diligent software full-stack engineer with four years of experience.
          I Developed and maintained Web Applications with React, Vue, Angular, and
          Next (React framework) as a frontend developer and NodeJS as a backend
          developer.</p>
        <a rel="noreferrer" href="mailto:abdulhadi.jarad@gmail.com" 
        >
        <button className="button-hover medium" style={style.contactMe}>Contact Me !</button>
        </a>
      </section>
    </section>
  );
};

export default Summary;
