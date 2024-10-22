export default "bible --help"
        + "\n" + "usage: bible [options] [reference1, reference2, ...]"
        + "\n" + ""
        + "\n" + "Bible.JS CLI client. Read the Holy Bible via the command line."
        + "\n" + ""
        + "\n" + "options:"
        + "\n" + "  --v, --version          prints the tool and the Bible.JS version."
        + "\n" + "  --lang, --language      sets the language."
        + "\n" + "  --onlyVerses            doesn't display the table, just the verses."
        + "\n" + "  --s, --search           gets the verses that match to the string or"
        + "\n" + "                          regular expression provided."
        + "\n" + "  --rc, --resultColor     sets the result color when searching something."
        + "\n" + "  -h --help               prints this output."
        + "\n" + ""
        + "\n" + "references:"
        + "\n" + " - References separated by spaces (see the examples)."
        + "\n" + ""
        + "\n" + "examples:"
        + "\n" + "   bible --lang en 'John 1:1-10' 'Genesis 2:3-7'"
        + "\n" + "   bible --lang ro --search 'Meroza'"
        + "\n" + "   bible --lang ro --search '/Meroza/gi'"
        + "\n" + ""
        + "\n" + "When the module is initialized, the packages listed in configuration file,"
        + "\n" + "are downloaded and used (~/.bible directory).  The configuration is stored"
        + "\n" + "in a JSON file, in the home directory: ~/.bible-config.json"
        + "\n" + ""
        + "\n" + "If this doesn't exist, it's created at the first `bible` call."
        + "\n" + ""
        + "\n" + "You can create custom packages, including them there (in  the `versions`"
        + "\n" + "field). The additional configuration fields are listed below:"
        + "\n" + ""
        + "\n" + " - `language`: a string representing the default language (if this is set,"
        + "\n" + "               `--lang`  is not needed anymore unless you want to override"
        + "\n" + "               the language value)"
        + "\n" + ""
        + "\n" + " - `resultColor`: a string  representing  the  default  result color  when"
        + "\n" + "                  searching    something   (if  this  is  set,  `--rc`  or"
        + "\n" + "                  `--resultColor`  options are not needed anymore unless"
        + "\n" + "                  you want to override the `resultColor` value)"
        + "\n" + ""
        + "\n" + " - `searchLimit`: an integer representing max number of verses that will be"
        + "\n" + "                  output when searching something"
        + "\n" + ""
        + "\n" + ""
        + "\n" + "Documentation can be found at https://github.com/BibleJS/BibleApp";


// Bible version ID's were found on https://www.bible.com/versions.
/*
const ENGLISH_BIBLE_VERSION_IDS = {
    AMP: 1588,
    AMPC: 8,
    ASV: 12,
    BOOKS: 31,
    BSB: 3034,
    CEB: 37,
    CEV: 392,
    CEVDCI: 303,
    CEVUK: 294,
    CJB: 1275,
    CPDV: 42,
    CSB: 1713,
    DARBY: 478,
    DRC1752: 55,
    EASY: 2079,
    ERV: 406,
    ESV: 59,
    FBV: 1932,
    FNVNT: 3633,
    GNBDC: 416,
    GNBDK: 431,
    GNBUK: 296,
    GNT: 68,
    GNTD: 69,
    GNV: 2163,
    GW: 70,
    GWC: 1047,
    HCSB: 72,
    ICB: 1359,
    JUB: 1077,
    KJV: 1,
    KJVAAE: 546,
    KJVAE: 547,
    LEB: 90,
    LSB: 3345,
    MEV: 1171,
    MP1650: 1365,
    MP1781: 3051,
    MSG: 97,
    NABRE: 463,
    NASB1995: 100,
    NASB2020: 2692,
    NCV: 105,
    NET: 107,
    NIRV: 110,
    NIV: 111,
    NIVUK: 113,
    NKJV: 114,
    NLT: 116,
    NMV: 2135,
    NRSV: 2015,
    NRSVUE: 3523,
    PEV: 2530,
    RAD: 2753,
    RSV: 2017,
    RSVCI: 3548,
    RV1885: 477,
    RV1895: 1922,
    TCENT: 3427,
    TEG: 3010,
    TLV: 314,
    TOJB2011: 130,
    TPT: 1849,
    TS2009: 316,
    WBMS: 2407,
    WEBBE: 1204,
    WEBUS: 206,
    WMB: 1209,
    WMBBE: 1207,
    YLT98: 821
}

const TRANSLATIONS = Object.assign(ENGLISH_BIBLE_VERSION_IDS, {
    VULG: 823,
    ICL00D: 1196,
    NR06: 122,
})
*/

// Bible book names each have a short code called a USFM code.
// These can be found here: https://ubsicap.github.io/usfm/identification/books.html
/*
const booksAndUsfmShortcodes = {
    'Genesis': 'GEN',
    'Exodus': 'EXO',
    'Leviticus': 'LEV',
    'Numbers': 'NUM',
    'Deuteronomy': 'DEU',
    'Joshua': 'JOS',
    'Judges': 'JDG',
    'Ruth': 'RUT',
    '1 Samuel': '1SA',
    '2 Samuel': '2SA',
    '1 Kings': '1KI',
    '2 Kings': '2KI',
    '1 Chronicles': '1CH',
    '2 Chronicles': '2CH',
    'Ezra': 'EZR',
    'Nehemiah': 'NEH',
    'Esther': 'EST',
    'Job': 'JOB',
    'Psalms': 'PSA',
    'Psalm': 'PSA',
    'Proverbs': 'PRO',
    'Ecclesiastes': 'ECC',
    'Song of Solomon': 'SNG',
    'Isaiah': 'ISA',
    'Jeremiah': 'JER',
    'Lamentations': 'LAM',
    'Ezekiel': 'EZK',
    'Daniel': 'DAN',
    'Hosea': 'HOS',
    'Joel': 'JOL',
    'Amos': 'AMO',
    'Obadiah': 'OBA',
    'Jonah': 'JON',
    'Micah': 'MIC',
    'Nahum': 'NAM',
    'Habakkuk': 'HAB',
    'Zephaniah': 'ZEP',
    'Haggai': 'HAG',
    'Zechariah': 'ZEC',
    'Malachi': 'MAL',
    'Matthew': 'MAT',
    'Mark': 'MRK',
    'Luke': 'LUK',
    'John': 'JHN',
    'Acts': 'ACT',
    'Romans': 'ROM',
    '1 Corinthians': '1CO',
    '2 Corinthians': '2CO',
    'Galatians': 'GAL',
    'Ephesians': 'EPH',
    'Philippians': 'PHP',
    'Colossians': 'COL',
    '1 Thessalonians': '1TH',
    '2 Thessalonians': '2TH',
    '1 Timothy': '1TI',
    '2 Timothy': '2TI',
    'Titus': 'TIT',
    'Philemon': 'PHM',
    'Hebrews': 'HEB',
    'James': 'JAS',
    '1 Peter': '1PE',
    '2 Peter': '2PE',
    '1 John': '1JN',
    '2 John': '2JN',
    '3 John': '3JN',
    'Jude': 'JUD',
    'Revelation': 'REV'
} */
