import "./Button.scss";

type Button = {
    google: string;
    inverted: string;
}

interface Props{
    children: React.ReactNode;
    buttonType?: "google" | "inverted";
    [otherProps: string]: any;
}

export const BUTTON_TYPE_CLASSES:Button = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button:React.FC<Props> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonType && BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;