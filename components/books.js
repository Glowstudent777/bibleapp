import  {BookIndex} from "@/app/fetch";
export const books = {
    genesis:"ge",
    exodus:"ex",
    leviticus:"lv",
    numbers:"nm",
    deuteronomy:"dt",
    joshua:"js",
    judges:"jud",
    ruth:"rt",
    firstSamuel:"1sm",
    secondSamuel:"2sm",
    firstKings:"1kgs",
    secondKings:"2kgs",
    firstChronicles:"1ch",
    secondChronicles:"2ch",
    ezra:"ezr",
    nehemiah:"ne",
    esther:"et",
    job:"job",
    psalms:"ps",
    proverbs:"prv",
    ecclesiastes:"ec",
    songOfSongs:"so",  //or songs of solomon ig
    isaiah:"is",
    jeremiah:"jeremiah",
    lamentations:"lm",
    ezekiel:"ez",
    daniel:"dn",
    hosea:"ho",
    joel:"jl",
    amos:"am",
    obadiah:"ob",
    jonah:"jn",
    micah:"mi",
    nahum:"na",
    habakkuk:"hk",
    zephaniah:"zp",
    haggai:"hg",
    zechariah:"zc",
    malachi:"ml",
    matthew:"mt",
    mark:"mk",
    luke:"lk",
    john:"jo",
    acts:"act",
    romans:"rm",
    firstCorinthians:"1co",
    secondCorinthians:"2co",
    galatians:"gl",
    ephesians:"eph",
    philippians:"ph",
    colossians:"cl",
    firstThessalonians:"1ts",
    secondThessalonians:"2ts",
    firstTimothy:"1tm",
    secondTimothy:"2tm",
    titus:"tt",
    philemon:"phm",
    hebrews:"hb",
    james:"jm",
    firstPeter:"1pe",
    secondPeter:"2pe",
    firsJohn:"1jo",
    secondJohn:"2jo",
    thirdJohn:"3jo",
    jude:"jd",
    revelation:"re"
  }
  let i = 1;
  
export function getBookIndex(){
  let booksIndex = {}
  for (let key in books){
    booksIndex[key] = i;
    i++
  }
return booksIndex;
}
