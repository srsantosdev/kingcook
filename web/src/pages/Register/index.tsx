import React, { useState, useCallback, useRef } from 'react';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { FiCheck } from 'react-icons/fi';

import Dropzone from '../../components/Dropzone';
import Header from '../../components/Header';
import LevelSelect from '../../components/LevelSelect';
import InputForm, { Input } from '../../components/Input';

import api from '../../services/api';

import { Container, Content, Lists, BoxButton } from './styles';

interface Data {
  name: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [selectedFile, setSeletedFile] = useState<File>();

  const [ingredientValue, setIngredientValue] = useState('');
  const [preparationValue, setPreparationValue] = useState('');

  const [level, setLevel] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [preparationModes, setPreparationModes] = useState<string[]>([]);

  const handleSubmit = useCallback(
    async ({ name }: Data) => {
      const data = new FormData();

      const request = {
        name,
        level,
        ingredients: ingredients.join(';'),
        preparation_modes: preparationModes.join(';'),
      };

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome da receita é obrigatório.'),
        level: Yup.string().required('Nível de dificuldade obrigatório.'),
        ingredients: Yup.string().required(
          'É necessário colocar os ingredientes',
        ),
        preparation_modes: Yup.string().required(
          'É necessário colocar um modo de preparo',
        ),
      });

      await schema.validate(request, {
        abortEarly: false,
      });

      data.append('name', request.name);
      data.append('level', request.level);
      data.append('ingredients', request.ingredients);
      data.append('preparation_modes', request.preparation_modes);

      if (selectedFile) {
        data.append('recipe_img', selectedFile);
      }

      await api.post('/recipes', data);
    },
    [ingredients, preparationModes, level, selectedFile],
  );

  const handleAddIngredients = useCallback(() => {
    if (ingredientValue) {
      setIngredients([...ingredients, ingredientValue]);
      setIngredientValue('');
    }
  }, [ingredients, ingredientValue]);

  const handleAddPreparationModes = useCallback(() => {
    if (preparationValue) {
      setPreparationModes([...preparationModes, preparationValue]);
      setPreparationValue('');
    }
  }, [preparationValue, preparationModes]);

  return (
    <Container>
      <Header />
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Cadastrar nova receita</h1>

          <Dropzone onFileUploaded={setSeletedFile} />

          <div className="group">
            <div className="field">
              <InputForm name="name" label="Nome da receita" />
            </div>
            <LevelSelect onChange={setLevel} />
          </div>

          <div className="group">
            <div className="field">
              <Input
                name="ingredient"
                label="Ingrediente"
                value={ingredientValue}
                onChange={event => setIngredientValue(event.target.value)}
              />
              <button type="button" onClick={handleAddIngredients}>
                Adicionar ingrediente
              </button>
            </div>
            <div className="field">
              <Input
                name="preparation"
                label="Modo de preparo"
                value={preparationValue}
                onChange={event => setPreparationValue(event.target.value)}
              />
              <button type="button" onClick={handleAddPreparationModes}>
                Adicionar modo de preparo
              </button>
            </div>
          </div>
        </Form>
        <Lists>
          {ingredients.length > 0 && <h3>Ingredientes</h3>}

          <ul>
            {ingredients.map((ingredient, key) => (
              <li key={key}>{ingredient}</li>
            ))}
          </ul>

          {preparationModes.length > 0 && <h3>Modo de preparo</h3>}

          <ol>
            {preparationModes.map((mode, key) => (
              <li key={key}>{mode}</li>
            ))}
          </ol>
        </Lists>

        <BoxButton>
          <button type="button" onClick={() => formRef.current?.submitForm()}>
            <FiCheck size={25} />
            Cadastrar Receita
          </button>
        </BoxButton>
      </Content>
    </Container>
  );
};

export default Register;
