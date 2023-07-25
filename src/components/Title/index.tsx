import './title.css';

type TitleProps = {
  text: string,
};

function Title({ text }: TitleProps) {
  return (
    <h2 className="title">{ text }</h2>
  )
}

export default Title;

// Exemplo se fosse utilziar a prop childrem:
// type TitleProps = {
//   children: React.reactNode,
// };

// function Title({ children }: TitleProps) {
//   return (
//     <h2>{ children }</h2>
//   )
// }