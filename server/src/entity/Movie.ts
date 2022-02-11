import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: true })
  isVisible: boolean;

  @Column()
  movieId: string;

  @Column()
  originalTile: string;

  @Column("longtext")
  overview: string;

  @Column()
  posterPath: string;

  @Column()
  backdropPath: string;

  @ManyToOne(() => User, (user) => user.favMovies, { eager: true })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.comment)
  comments: Comment[];
}
