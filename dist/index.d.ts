declare const SearchMethodValues: readonly ["koko"];
type SearchMethod = (typeof SearchMethodValues)[number];
/**
 * @Method: Returns the means of query
 * @param { string } query - search query
 * @param { SearchMethod } type - search type ex) koko, enen
 * @Return: {string}
 */
export declare function search(query: string, type: SearchMethod): Promise<any[]>;
export {};
