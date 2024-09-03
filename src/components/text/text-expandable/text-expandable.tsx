"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";

import { Link } from "../../link";

import * as styles from "./text-expandable.styles";

interface TextExpandableProps {
  readonly children: ReactNode;
  readonly height: string;
}

export function TextExpandable(props: TextExpandableProps) {
  const [state, setState] = useState<{
    readonly isExpanded: boolean;
    readonly isEnabled: boolean;
  }>({
    isExpanded: false,
    isEnabled: true,
  });

  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerContainerRef.current && outerContainerRef.current) {
      console.log(
        "innerContainerRef.current.clientHeight",
        innerContainerRef.current.clientHeight,
      );
      console.log(
        "outerContainerRef.current.clientHeight",
        outerContainerRef.current.clientHeight,
      );
      if (
        innerContainerRef.current.clientHeight <=
        outerContainerRef.current.clientHeight
      ) {
        setState({
          ...state,
          isEnabled: false,
        });
      }
    }
  }, []);

  return (
    <>
      <div
        ref={outerContainerRef}
        className={styles.textExpandableOuterContainer}
        style={{
          height: state.isExpanded ? undefined : props.height,
        }}
      >
        <div
          ref={innerContainerRef}
          className={styles.textExpandableInnerContainer}
        >
          {props.children}
        </div>
      </div>

      <Link
        className={styles.toggleLink}
        onClick={() => {
          setState({ ...state, isExpanded: !state.isExpanded });
        }}
      >
        {state.isExpanded ? "Less" : "More"}
      </Link>
    </>
  );
}
