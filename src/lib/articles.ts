/** Turn a content collection id (e.g. `foo/index`) into a URL slug. */
export function slugFromId(id: string): string {
  return id.replace(/\/index$/, "");
}

export function sortByDate<T extends { data: { publishDate: Date } }>(
  items: T[],
): T[] {
  return [...items].sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );
}
