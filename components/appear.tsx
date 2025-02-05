import React, { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface GhostiProps {
  isGhostin: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
}
const Ghosti = styled.div<GhostiProps>`
  opacity: ${props => (props.isGhostin ? 0 : 1)};
  transform: translateX(${props => (props.isGhostin ? "50px" : 0)});
  transition: all ${props => props.transitionDuration}s;
  transition-delay: ${props => props.transitionDelay}s;
`;

interface AppearProps {
  transitionDuration?: number;
  transitionDelay?: number;
}

export const Appear: FC<AppearProps> = props => {
  const [visible, setVisible] = useState(false);
  const ghostiRef = useRef<HTMLDivElement>();

  useEffect(() => {
    window.addEventListener("scroll", (event: Event) => {
      event.target;

      if (ghostiRef?.current) {
        const scrollBottom = window.scrollY + window.innerHeight;
        const ghostiBottom =
          ghostiRef.current.clientTop + ghostiRef.current.clientHeight;

        if (scrollBottom > ghostiBottom) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });
  }, []);

  return (
    <Ghosti
      ref={ghostiRef}
      isGhostin={!visible}
      transitionDuration={props.transitionDuration || 2.5}
      transitionDelay={props.transitionDelay}
    >
      {props.children}
    </Ghosti>
  );
};
