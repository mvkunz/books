type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// a tipagem do onClick informa que ele é OPCIONAL, por isso a ? após o nome. e então sumirá o erro que estava dando no App, pq era um erro de tipagem apenas.