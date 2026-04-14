export interface ButtonProps{
    id: number;
    name: string;
    type?: "button" | "submit" | "reset";
    onButtonClick?: () => void;
}