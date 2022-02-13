import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { Movie } from "./Movie";
import { User } from "./User";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  comment: string;

  @Column()
  commentor: string;

  // @ManyToOne(() => User, (user) => user.comments)
  // user: User;

  @ManyToOne(() => Movie, (movie) => movie.comments, { eager: true })
  movie: Movie;
}
