import { User } from "../entity/User";
import { Actor } from "../entity/Actor";
import { RequestHandler } from "express";

class ActorController {
  public static newFavActor: RequestHandler = async (req, res) => {
    console.log("newuser");
    const currentUserId = req.session.userId;
    let user;
    try {
      user = await User.findOneOrFail(currentUserId);
    } catch (error) {
      return res.status(404).send("User not found, log in");
    }
    const ActorId = req.body.ActorId;
    const actor = new Actor();
    actor.name = req.body.name;
    actor.user = user;
    try {
      await Actor.save(actor);
    } catch (error) {
      console.log("Actor could not saved");
      return res.status(500).send("Sorry, we could not save the Actor");
    }
    res.status(201).send("Actor saved to favorites");
  };
  public static deleteFavActor: RequestHandler = (req, res) => {
    const id = req.params.id;
    let actor;
    try {
      actor = Actor.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("Can not delete from favorite Actors");
    }
    Actor.delete(id);
    res.status(200).send("post deleted");
  };

  public static getAllActorsByUser: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;
    console.log(currentUserId);
    const actors: Actor[] = await Actor.find({
      where: { user: currentUserId },
    });
    console.log(actors);
  };
  public static getFavActors: RequestHandler = async (req, res) => {
    const currentUserId = req.session.userId;
    console.log(currentUserId);
    const actors: Actor[] = await Actor.find({
      where: { user: currentUserId },
    });
    console.log(actors);
  };
}

export default ActorController;
