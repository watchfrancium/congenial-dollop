import React from "react";
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from "remotion";

// Palette: near-black background, muted off-white text, one restrained accent.
const COLORS = {
  background: "#0b0c0e",
  text: "#d9d6cf",
  muted: "#7d7b76",
  accent: "#b5532f",
};

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

type Props = {
  title: string;
  subtitle: string;
};

export const Investigative: React.FC<Props> = ({title, subtitle}) => {
  const frame = useCurrentFrame();

  // Slow fades, no bounce.
  const titleOpacity = interpolate(frame, [30, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const titleY = interpolate(frame, [30, 120], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const subtitleOpacity = interpolate(frame, [120, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  // A thin timeline rule that draws across the frame.
  const ruleWidth = interpolate(frame, [200, 320], [0, 960], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const fadeOut = interpolate(frame, [400, 450], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Georgia, 'Times New Roman', serif",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          color: COLORS.text,
          fontSize: 96,
          letterSpacing: 2,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: COLORS.muted,
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 28,
          marginTop: 24,
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: subtitleOpacity,
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          marginTop: 80,
          height: 2,
          width: ruleWidth,
          backgroundColor: COLORS.accent,
        }}
      />
    </AbsoluteFill>
  );
};
