import React from "react";
import {Composition} from "remotion";
import {Investigative} from "./Investigative";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Investigative"
      component={Investigative}
      durationInFrames={450}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        title: "The Missing Ledger",
        subtitle: "Chapter 1: The Escalation",
      }}
    />
  );
};
