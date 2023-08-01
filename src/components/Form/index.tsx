import { useState } from 'react';
import Button from '../Button/Button';

type FormProps = {
  submitFunction: (title: string, pages: number) => void;
};

function Form({ submitFunction }: FormProps) {
  const [formData, setFormData] = useState({ title: '', pages: 0 });
  const [errorsMessages, setErrorMessages] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function resetForm() {
    setFormData({ title: '', pages: 0 });
  }

  function isFormValid() {
    const errors = [];

    // validar o bookTitle
    if (formData.title === '') {
      errors.push('O campo Título é obrigatório!');
    }
    // validar o bookPages
    if (formData.pages <= 0) {
      errors.push('O campo Páginas precisa ser maior que 0!');
    }
// se o array estiver vazio, significa que não tem nenhuma msg de erro:
    setErrorMessages(errors);
    return errors.length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid()) {
      submitFunction(formData.title, formData.pages);
      resetForm();
      setErrorMessages([]);
    }
  }
// handleSubmit-> Quando fizer o submit do form (botão adicionar), vai chamar a preventDefault para evitar o comportamento padrão do form (que é recarregar a página) e depois vai chamar a função updateState que vai atualizar o estado. Logo após chamar a updateState, chamará a função resetForm para APAGAR o que havia sido digitado no input.

// É realizada uma VALIDAÇÃO para verificar se o title NÃO é vazio e se numero de paginas é maior que 0.

  return (
    <form className="books-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Quantidade de páginas"
        name="pages"
        value={formData.pages}
        onChange={handleChange}
      />
      {errorsMessages && (
        <div className="form-message">
          {errorsMessages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}
      <Button>Adicionar</Button>
    </form>
  );
}

export default Form;

