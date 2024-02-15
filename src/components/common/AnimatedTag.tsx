import { Stack, alpha, styled } from "@mui/material";

const AnimatedTagContainer = styled(Stack)`
  font-weight: bold;
  font-size: 14px;

  border-radius: 6px;

  background: ${({ theme }) => alpha(theme.palette.primary.main, 0.1)};
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 5px 10px;
  overflow: hidden;
  position: relative;

  @media (max-width: 575px) {
    font-size: 10px;
  }
  &:before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      ${({ theme }) => alpha(theme.palette.primary.main, 0.2)} 0%,
      ${({ theme }) => alpha(theme.palette.primary.main, 0.1)} 100%
    );
    transform: skewX(-25deg);
    animation: shine 8s infinite ease-in-out;
  }

  @keyframes shine {
    20%,
    100% {
      opacity: 0;
      left: 125%;
    }
    0% {
      opacity: 1;
      left: -75%;
    }
    10% {
      opacity: 1;
      left: 125%;
    }
  }
`;

const AnimatedTag = ({ text }: { text: string }) => {
  return (
    <AnimatedTagContainer>
      <span>{text}</span>
    </AnimatedTagContainer>
  );
};

export default AnimatedTag;
