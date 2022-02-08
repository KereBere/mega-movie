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
export class Actor extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ default: true })
  isVisible: boolean;

  @ManyToOne(() => User, (user) => user.favMovies, { eager: true })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.comment)
  comments: Comment[];
}
