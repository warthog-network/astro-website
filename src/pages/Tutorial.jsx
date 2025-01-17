import { useState } from "react";
import Joyride from "react-joyride";

const Tutorial = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".step-1",
      content: "This is order book. You can insert individual orders to swap between TOKEN and WART.",
    },
    {
      target: ".step-2",
      content: "This is the sellers' part of the order book. You can add limit swaps from TOKEN to WART here.",
    },
    {
      target: ".step-3",
      content: "This is the buyers' part of the order book. You can add limit swaps from WART to WART here. An important difference to traditional order books is that the quantity for buying is specified in WART (quote currency) and not in TOKEN (base currency).",
    },
    {
      target: ".step-4",
      content: "This is swap section, where the TOKEN and WART flow between buyers, sellers and the pool is visualized.",
    },
    {
      target: ".step-5",
      content: "This is pool input field specifying the TOKEN amount of pool liquidity.",
    },
    {
      target: ".step-6",
      content: "This is pool input field specifying the WART amount of pool liquidity.",
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
