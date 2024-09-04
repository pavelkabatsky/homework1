import { StyledButton } from "./Button";
import img from "./../images/Rectangle1.png";

export function Card() {
  return (
    <div className="card">
      <img src={img} />
      <div className="card__content-wrap">
        <h2 className="card__headline">Headline</h2>
        <p className="card__text">
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </p>
        <StyledButton>See more</StyledButton>
        <StyledButton>Save</StyledButton>
      </div>
    </div>
  );
}
