export const dateRegExp =
  "(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})";

export const timeRegExp = "(7|11|15|19|23)(\\-|\\s)(7|11|15|19|23)";
export const dayAndTimeRegExp = `\\d{1,2} ${timeRegExp}`;
export const dateAndTimeRegExp = `\\d{1,2}\\.${dayAndTimeRegExp}`;
export const deleteAllRegExp = /Удалить вс(е|ё)/i;
export const deleteRecordRegExp = /del\s\d{1,2}/i;
