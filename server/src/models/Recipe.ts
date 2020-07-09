import {
  Entity,
  OneToMany,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Ingredient from './Ingredient';
import PreparationMode from './PreparationMode';

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @Column()
  level: 'easy' | 'medium' | 'hard';

  @OneToMany(() => Ingredient, ingredient => ingredient.recipe)
  ingredients: Ingredient[];

  @OneToMany(() => PreparationMode, preparation_mode => preparation_mode.recipe)
  preparation_modes: PreparationMode[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipe;
