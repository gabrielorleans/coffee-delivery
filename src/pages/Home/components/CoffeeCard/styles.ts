import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  text-align: center;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Name = styled.div`
  size: "s";
  color: "subtitle";
`;

export const Description = styled.div`
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;

  > div {
    gap: 3px;

  }
`;