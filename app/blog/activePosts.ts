import { posts } from "./posts";
import { retiredPostRedirects } from "./retired";

// Every post except retired ones that now redirect elsewhere.
export const activePosts = posts.filter((p) => !(p.slug in retiredPostRedirects));
