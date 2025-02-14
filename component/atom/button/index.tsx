interface ButtonProps {
  content: string;
  onClick?: () => void;
}

const Button = ({ content, onClick }: ButtonProps) => {
  return (
    <button className="bg-black text-white font-bold p-4 rounded-md" onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
