import styled from "@emotion/styled";

const fontSizeMap = new Map([
  ["xxlarge", "36px"],
  ["large", "24px"],
  ["medium", "15px"],
]);

export const TextBase = styled.span((props) => ({
  fontFamily: '"Jaldi", sans-serif',
  color: props?.color,
  fontWeight: props?.variant,
  fontSize: fontSizeMap.get(props?.size || "medium"),
  lineHeight: props?.lineHeight,
  display: props?.block ? "block" : "inline",
}));
