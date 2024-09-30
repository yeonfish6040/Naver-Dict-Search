const SearchTypeValues = ["koko", "enko", "ccko", "jako", "zhko", "frko", "esko", "deko"] as const;
type SearchType = (typeof SearchTypeValues)[number];

/**
 * @Method: Returns the means of query
 * @param { string } query - search query
 * @param { SearchType } type - search type ex) koko, enen
 * @Return { string }
 */
export async function search(query: string, type: SearchType) {
    if (query === undefined || SearchTypeValues.indexOf(type) === -1)
        throw new Error("Incorrect parameters");

    const wordUUIDSource = `https://ac-dict.naver.com/${type}/ac?st=1&r_lt=1&q=${query}`;
    const wordUUID = (await (await fetch(wordUUIDSource)).json()).items[0][0][4];

    const wordEntrySource = `https://ko.dict.naver.com/api/platform/${type}/entry?entryId=${wordUUID}`;
    const wordMeans: any[] = (await (await fetch(wordEntrySource, { method: "GET", headers: { Referer: "https://ko.dict.naver.com/" } })).json())['entry']['means'];

    return wordMeans.map(wm => { return wm.show_mean });
}