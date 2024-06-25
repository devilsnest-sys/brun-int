// export a enum for button type 'submit' and 'button'
enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
}

enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
}

export interface IMyOutlinedButton {
  active?: boolean;
  type?: ButtonType;
  handleClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean
}

export { ButtonType, RoleEnum };
