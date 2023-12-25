import styled from "styled-components";

export const StyledUserBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  padding: 20px;
  padding-left: calc(3.9vw + 165px); //? 180 - 375 | 240 - 1920
  background-color: ${(props) => props.theme.colors.elemsBgc};
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
    height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
    object-fit: cover;
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;

    position: absolute;
    top: -56px;
    left: 30px;
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 1750px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    padding: 20px;

    img {
      width: 130px;
      height: 130px;
      top: -75px;
      left: 50px;
    }

    .user__description {
      width: 100%;
    }

    .user__info {
      width: 100%;

      .parameter {
        flex: 1 1 33.333%;
        text-align: center;
      }
    }

    .user__name {
      text-align: right;
    }

    .buttons-wrapper {
      width: 100%;
      flex-direction: row;

      button {
        flex: 1 1 50%;
      }
    }
  }
`;
