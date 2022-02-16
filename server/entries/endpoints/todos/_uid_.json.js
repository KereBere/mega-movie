import { a as api } from "../../../chunks/_api-59ffa6af.js";
const patch = async (event) => {
  const data = await event.request.formData();
  return api(event, `todos/${event.locals.userid}/${event.params.uid}`, {
    text: data.get("text"),
    done: data.has("done") ? !!data.get("done") : void 0
  });
};
const del = async (event) => {
  return api(event, `todos/${event.locals.userid}/${event.params.uid}`);
};
export { del, patch };
