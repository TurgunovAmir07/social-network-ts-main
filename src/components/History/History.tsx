import { StyledHistory } from "./History.style";

export const History = () => {
  return (
    <StyledHistory>
      <svg
        className="icon icon-slider-button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
      >
        <g>
          <g>
            <path
              d="M72,36c0,19.9-16.1,36-36,36S0,55.9,0,36,16.1,0,36,0s36,16.1,36,36Z"
              style={{ fill: "#fcfcff" }}
            />
            <path
              d="M38.8,46.2c-.4-.4-.5-.9-.5-1.4s.2-1,.6-1.4l5.2-5.5H23.4c-.5,0-1-.2-1.3-.6-.4-.4-.5-.8-.5-1.4,0-.5,.2-1,.5-1.4,.4-.4,.8-.6,1.3-.6h20.6l-5.3-5.5c-.4-.4-.6-.8-.6-1.4,0-.5,.2-1,.6-1.4,.4-.4,.8-.6,1.3-.6s.9,.2,1.3,.6l8.5,8.9c.2,.2,.3,.4,.4,.6,.1,.2,.1,.5,.1,.7,0,.3,0,.5-.1,.7s-.2,.4-.4,.6l-8.5,8.9c-.3,.4-.8,.5-1.3,.5-.4,.3-.8,.1-1.2-.3Z"
              style={{ fill: "#526ed3" }}
            />
          </g>
        </g>
      </svg>
      <div className="History__wrapper">
        <div className="History__item add-history">
          <div className="icon-wrapper">
            <svg
              className="icon icon-plus"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <g>
                <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
              </g>
            </svg>
            <span>История</span>
          </div>
          <img src="./img/users/andrey-kashirskiy.jpeg" alt="Add History" />
        </div>
        <div className="History__item">
          <img src="./img/history/poster-1.jpeg" alt="History Poster" />
          <div className="History__owner">
            <img
              className="owner__img"
              src="./img/users/aleksandr-maykov.jpeg"
              alt="History Owner"
            />
            <span className="owner__name">Александр Майков</span>
          </div>
        </div>
        <div className="History__item">
          <img src="./img/history/poster-2.jpeg" alt="History Poster" />
          <div className="History__owner">
            <img
              className="owner__img"
              src="./img/users/darya-gertner.jpeg"
              alt="History Owner"
            />
            <span className="owner__name">Дарья Гертнер</span>
          </div>
        </div>
        <div className="History__item">
          <img src="./img/history/poster-3.jpeg" alt="History Poster" />
          <div className="History__owner">
            <img
              className="owner__img"
              src="./img/users/denis-frolov.jpeg"
              alt="History Owner"
            />
            <span className="owner__name">Денис Фролов</span>
          </div>
        </div>
        <div className="History__item">
          <img src="./img/history/poster-4.jpeg" alt="History Poster" />
          <div className="History__owner">
            <img
              className="owner__img"
              src="./img/users/katarina-fisher.jpeg"
              alt="History Owner"
            />
            <span className="owner__name">Катарина Фишер</span>
          </div>
        </div>
        <div className="History__item">
          <img src="./img/history/poster-1.jpeg" alt="History Poster" />
          <div className="History__owner">
            <img
              className="owner__img"
              src="./img/users/aleksandr-maykov.jpeg"
              alt="History Owner"
            />
            <span className="owner__name">Александр Майков</span>
          </div>
        </div>
        <div className="History__item">
          <img src="./img/history/poster-2.jpeg" alt="History Poster" />
          <div className="History__owner">
            <img
              className="owner__img"
              src="./img/users/darya-gertner.jpeg"
              alt="History Owner"
            />
            <span className="owner__name">Дарья Гертнер</span>
          </div>
        </div>
      </div>
    </StyledHistory>
  );
};
