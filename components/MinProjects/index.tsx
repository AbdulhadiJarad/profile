import type { NextPage } from "next";
import { style } from "./styles";
import { projectsData } from './data'
import dynamic from "next/dynamic";
import { Fragment } from "react";
const DownAnimation = dynamic(() => import("../../shared/Animation/DownAnimation"), {
  ssr: false,
});

const MinProjects = () => {
  return (
    <section id="projects" style={style.root}>
      <span className="bold" style={style.myNameIs}>Other Projects </span>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          flexWrap: "wrap",
          gap: 10,
          width: "100%",
        }}
        className={'startups'}
      >
        {projectsData.map(item => (<div key={item.title} style={{
          display: 'flex',
          flexWrap: 'wrap'
        }} >
          <DownAnimation >
            <div
              style={{
                height: '100%',
                width: 300,
                backgroundColor: "#112240",
                borderRadius: "10px",
                padding: '20px',
                margin: '5px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" fill="rgb(17, 34, 64)" viewBox="0 0 24 24" stroke="rgb(100, 255, 218)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"  ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <a rel="noreferrer" target={'_blank'} href={item.link}>
                  <div style={{ width: '25px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" fill="rgb(17, 34, 64)" viewBox="0 0 24 24" stroke="#a8b2d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>
                </a>
              </div>
              <div style={{ color: '#ccd6f6', marginTop: '20px', fontWeight: '500', fontSize: '19px' }}>
                {item.title}
              </div>
              <div style={{ marginTop: '10px' }}>
                <div style={{ color: '#a8b2d1', lineHeight: '24px', fontSize: '13px' }}>
                  {item.description}
              </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div style={{ color: '#8791b0', lineHeight: '24px', fontSize: '13px', display: 'flex', justifyContent: 'flex-start', gap: '15px' }}>
                  {item.techs.map(element => <div key={element}>
                      {element}
                    </div>)}
               
                </div>
              </div>
            </div>
          </DownAnimation>
        </div>))}
      </section>
    </section>
  );
};

export default MinProjects;
