/** Base-aware path for files in `public/`. */
export function asset(path: string) {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
