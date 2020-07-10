import React from 'react';

import Header from '../../components/Header';
import LevelCard from '../../components/LevelCard';

import { Container, Content, Image, Recipe } from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Image
          src="https://images.unsplash.com/photo-1560910615-9eaa2e704e63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"
          alt="Cookie"
        />

        <Recipe>
          <header>
            <h1>Cookie Top</h1>
            <LevelCard />
          </header>

          <section>
            <h2>Ingredientes</h2>

            <ul>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
            </ul>
          </section>

          <section>
            <h2>Modo de Preparo</h2>

            <ol>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
              <li>125 g de manteiga sem sal;</li>
            </ol>
          </section>
        </Recipe>
      </Content>
    </Container>
  );
};

export default Details;
