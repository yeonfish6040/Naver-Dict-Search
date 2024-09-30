declare const SearchTypeValues: readonly ["koko", "enko", "ccko", "jako", "zhko", "frko", "esko", "deko"];
type SearchType = (typeof SearchTypeValues)[number];
/**
 * @Method: Returns the means of query
 * @param { string } query - search query
 * @param { SearchType } type - search type ex) koko, enen
 * @Return { string }
 */
export declare function search(query: string, type: SearchType): Promise<any[]>;
export {};
