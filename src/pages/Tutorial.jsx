import { useState } from "react";
import Joyride from "react-joyride";

const Tutorial = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".step-1",
      content: "This is Order Book, You can make your order here",
    },
    {
      target: ".step-2",
      content: "This is Sell Order book Input fields, You can type your sell infos here",
    },
    {
      target: ".step-3",
      content: "This is Buy Order book Input fields, You can type your buy infos here",
    },
    {
        target: ".step-4",
        content: "This is Swap Section,  You can check the swap process here",
      },
      {
        target: ".step-5",
        content: "This is Pool Input field for Token, You can type initial token amount here",
      },
      {
        target: ".step-6",
        content: "This is Pool Input field for Wart, You can type initial wart amount here",
      },
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
    />
  );
};

export default Tutorial;
