import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Recipe from './Recipe';

@Entity('ingredients')
class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  detail: string;

  @Column()
  recipe_id: string;

  @ManyToOne(() => Recipe)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ingredient;
