export const allQueries = {
  searchQuery: (name: string) => `{
        stops(name: "${name}") {
        value:gtfsId
          label:name
          code
          lat
          lon
        }
      }`,
};
