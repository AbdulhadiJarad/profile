import type { NextPage } from "next";
import { style } from "./styles";
const MinProjects: NextPage = () => {
  return (
    <section style={style.root}>
      <span style={style.myNameIs}>Other Noteworthy Projects </span>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          flexWrap: "wrap",
          gap: 10,
          width: "100%",
        }}
      >
        {new Array(9).fill(undefined).map(() => (
          <div
            style={{
              height: 300,
              width: 300,
              backgroundColor: "#112240",
              borderRadius: "10px",
            }}
          ></div>
        ))}
      </section>
    </section>
  );
};

export default MinProjects;
