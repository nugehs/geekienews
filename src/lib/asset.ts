/** Base-aware path for routes and files in `public/`. */
export function asset(path = "") {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
