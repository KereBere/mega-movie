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
  uuid: string;

  @Column({ default: true })
  isVisible: boolean;

  @Column()
  id: string;

  @Column()
  title: string;

  @Column("longtext")
  overview: string;

  @Column({ nullable: true })
  poster_path: string;

  @Column({ nullable: true })
  backdrop_path: string;

  @Column()
  release_date: string;

  @ManyToOne(() => User, (user) => user.favMovies, { eager: true })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.comment)
  comments: Comment[];
}
