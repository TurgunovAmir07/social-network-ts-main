import styled from "styled-components";

export const StyledMainPage = styled.div`
  display: grid;
  grid-template-areas: "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;

  .LeftSide {
    grid-area: L;
  }

  .Main {
    grid-area: M;
  }

  .RightSide {
    grid-area: R;

    .List {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1440px) {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;

    .RightSide {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: min-content auto;

    .LeftSide {
      .List {
        display: none;
      }
    }
  }

  @media (max-width: 730px) {
    display: block;

    .LeftSide {
      display: none;
    }
  }
`;
