import InputType1 from "../components/InputType1";
import InputType2 from "../components/InputType2";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InputType1 /> <InputType2 />
      </div>

      <p>
        HTML & CSS by Online Tutorials // Translate in React by Ludovic Argenty
      </p>
    </>
  );
};

export default Home;
