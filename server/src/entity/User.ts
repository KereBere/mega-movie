import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import bcrypt from "bcrypt";
import { Movie } from "./Movie";
import { Comment } from "./Comment";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: "" })
  password: string;

  @OneToMany(() => Movie, (movie) => movie.user)
  favMovies: Movie[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @Column()
  createddAt: Date;

  public hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
