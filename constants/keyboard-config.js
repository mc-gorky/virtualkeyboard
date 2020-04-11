export const buttonTypes = {
  printSymbol: 'printSymbol',
  capsLock: 'capsLock',
  backspace: 'backspace',
  tab: 'tab',
  enter: 'enter',
  shift: 'shift',
  control: 'control',
  meta: 'meta',
  alt: 'alt',
  del: 'del',
  spacebar: 'spacebar',
};

export const buttonsConfig = {
  Backquote: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '`',
        shift: '~',
      },
      ru: {
        default: 'ё',
        shift: 'Ё',
      },
    },
    id: 'Backquote',
  },
  Digit1: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '1',
        shift: '!',
      },
      ru: {
        default: '1',
        shift: '!',
      },
    },
    id: 'Digit1',
  },
  Digit2: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '2',
        shift: '@',
      },
      ru: {
        default: '2',
        shift: '"',
      },
    },
    id: 'Digit2',
  },
  Digit3: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '3',
        shift: '#',
      },
      ru: {
        default: '3',
        shift: '№',
      },
    },
    id: 'Digit3',
  },
  Digit4: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '4',
        shift: '$',
      },
      ru: {
        default: '4',
        shift: ';',
      },
    },
    id: 'Digit4',
  },
  Digit5: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '5',
        shift: '%',
      },
      ru: {
        default: '5',
        shift: '%',
      },
    },
    id: 'Digit5',
  },
  Digit6: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '6',
        shift: '^',
      },
      ru: {
        default: '6',
        shift: ':',
      },
    },
    id: 'Digit6',
  },
  Digit7: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '7',
        shift: '&',
      },
      ru: {
        default: '7',
        shift: '?',
      },
    },
    id: 'Digit7',
  },
  Digit8: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '8',
        shift: '*',
      },
      ru: {
        default: '8',
        shift: '*',
      },
    },
    id: 'Digit8',
  },
  Digit9: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '9',
        shift: '(',
      },
      ru: {
        default: '9',
        shift: '(',
      },
    },
    id: 'Digit9',
  },
  Digit0: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '0',
        shift: ')',
      },
      ru: {
        default: '0',
        shift: ')',
      },
    },
    id: 'Digit0',
  },
  Minus: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '-',
        shift: '_',
      },
      ru: {
        default: '-',
        shift: '_',
      },
    },
    id: 'Minus',
  },
  Equal: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '=',
        shift: '+',
      },
      ru: {
        default: '=',
        shift: '+',
      },
    },
    id: 'Equal',
  },
  Backspace: {
    type: buttonTypes.backspace,
    text: 'Backspace',
    id: 'Backspace',
  },
  Tab: {
    type: buttonTypes.tab,
    text: 'Tab',
    id: 'Tab',
  },
  KeyQ: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'q',
        shift: 'Q',
      },
      ru: {
        default: 'й',
        shift: 'Й',
      },
    },
    id: 'KeyQ',
  },
  KeyW: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'w',
        shift: 'W',
      },
      ru: {
        default: 'ц',
        shift: 'Ц',
      },
    },
    id: 'KeyW',
  },
  KeyE: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'e',
        shift: 'E',
      },
      ru: {
        default: 'у',
        shift: 'У',
      },
    },
    id: 'KeyE',
  },
  KeyR: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'r',
        shift: 'R',
      },
      ru: {
        default: 'к',
        shift: 'К',
      },
    },
    id: 'KeyR',
  },
  KeyT: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 't',
        shift: 'T',
      },
      ru: {
        default: 'е',
        shift: 'Е',
      },
    },
    id: 'KeyT',
  },
  KeyY: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'y',
        shift: 'Y',
      },
      ru: {
        default: 'н',
        shift: 'Н',
      },
    },
    id: 'KeyY',
  },
  KeyU: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'u',
        shift: 'U',
      },
      ru: {
        default: 'г',
        shift: 'Г',
      },
    },
    id: 'KeyU',
  },
  KeyI: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'i',
        shift: 'I',
      },
      ru: {
        default: 'ш',
        shift: 'Ш',
      },
    },
    id: 'KeyI',
  },
  KeyO: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'o',
        shift: 'O',
      },
      ru: {
        default: 'щ',
        shift: 'Щ',
      },
    },
    id: 'KeyO',
  },
  KeyP: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'p',
        shift: 'P',
      },
      ru: {
        default: 'з',
        shift: 'З',
      },
    },
    id: 'KeyP',
  },
  BracketLeft: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '[',
        shift: '{',
      },
      ru: {
        default: 'х',
        shift: 'Х',
      },
    },
    id: 'BracketLeft',
  },
  BracketRight: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: ']',
        shift: '}',
      },
      ru: {
        default: 'ъ',
        shift: 'Ъ',
      },
    },
    id: 'BracketRight',
  },
  Backslash: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '\\',
        shift: '|',
      },
      ru: {
        default: '\\',
        shift: '|',
      },
    },
    id: 'Backslash',
  },
  CapsLock: {
    type: buttonTypes.capsLock,
    text: 'Caps Lock',
    id: 'CapsLock',
  },
  KeyA: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'a',
        shift: 'A',
      },
      ru: {
        default: 'ф',
        shift: 'Ф',
      },
    },
    id: 'KeyA',
  },
  KeyS: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 's',
        shift: 'S',
      },
      ru: {
        default: 'ы',
        shift: 'Ы',
      },
    },
    id: 'KeyS',
  },
  KeyD: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'd',
        shift: 'D',
      },
      ru: {
        default: 'в',
        shift: 'В',
      },
    },
    id: 'KeyD',
  },
  KeyF: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'f',
        shift: 'F',
      },
      ru: {
        default: 'а',
        shift: 'А',
      },
    },
    id: 'KeyF',
  },
  KeyG: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'g',
        shift: 'G',
      },
      ru: {
        default: 'п',
        shift: 'П',
      },
    },
    id: 'KeyG',
  },
  KeyH: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'h',
        shift: 'H',
      },
      ru: {
        default: 'р',
        shift: 'Р',
      },
    },
    id: 'KeyH',
  },
  KeyJ: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'j',
        shift: 'J',
      },
      ru: {
        default: 'о',
        shift: 'О',
      },
    },
    id: 'KeyJ',
  },
  KeyK: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'k',
        shift: 'K',
      },
      ru: {
        default: 'л',
        shift: 'Л',
      },
    },
    id: 'KeyK',
  },
  KeyL: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'l',
        shift: 'L',
      },
      ru: {
        default: 'д',
        shift: 'Д',
      },
    },
    id: 'KeyL',
  },
  Semicolon: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: ';',
        shift: ':',
      },
      ru: {
        default: 'ж',
        shift: 'Ж',
      },
    },
    id: 'Semicolon',
  },
  Quote: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '\'',
        shift: '"',
      },
      ru: {
        default: 'э',
        shift: 'Э',
      },
    },
    id: 'Quote',
  },
  Enter: {
    type: buttonTypes.enter,
    text: 'Enter',
    id: 'Enter',
  },
  ShiftLeft: {
    type: buttonTypes.shift,
    text: 'Shift',
    class: 'shiftLeft',
    id: 'ShiftLeft',
  },
  ShiftRight: {
    type: buttonTypes.shift,
    text: 'Shift',
    class: 'shiftRight',
    id: 'ShiftRight',
  },
  KeyZ: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'z',
        shift: 'Z',
      },
      ru: {
        default: 'я',
        shift: 'Я',
      },
    },
    id: 'KeyZ',
  },
  KeyX: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'x',
        shift: 'X',
      },
      ru: {
        default: 'ч',
        shift: 'Ч',
      },
    },
    id: 'KeyX',
  },
  KeyC: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'c',
        shift: 'C',
      },
      ru: {
        default: 'с',
        shift: 'С',
      },
    },
    id: 'KeyC',
  },
  KeyV: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'v',
        shift: 'V',
      },
      ru: {
        default: 'м',
        shift: 'М',
      },
    },
    id: 'KeyV',
  },
  KeyB: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'b',
        shift: 'B',
      },
      ru: {
        default: 'и',
        shift: 'И',
      },
    },
    id: 'KeyB',
  },
  KeyN: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'n',
        shift: 'N',
      },
      ru: {
        default: 'т',
        shift: 'Т',
      },
    },
    id: 'KeyN',
  },
  KeyM: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: 'm',
        shift: 'M',
      },
      ru: {
        default: 'ь',
        shift: 'Ь',
      },
    },
    id: 'KeyM',
  },
  Comma: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: ',',
        shift: '<',
      },
      ru: {
        default: 'б',
        shift: 'Б',
      },
    },
    id: 'Comma',
  },
  Period: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '.',
        shift: '>',
      },
      ru: {
        default: 'ю',
        shift: 'Ю',
      },
    },
    id: 'Period',
  },
  Slash: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '/',
        shift: '?',
      },
      ru: {
        default: '.',
        shift: ',',
      },
    },
    id: 'Slash',
  },
  ControlLeft: {
    type: buttonTypes.control,
    text: 'Ctrl',
    id: 'ControlLeft',
  },
  ControlRight: {
    type: buttonTypes.control,
    text: 'Ctrl',
    id: 'ControlRight',
  },
  MetaLeft: {
    type: buttonTypes.meta,
    text: 'Win',
    id: 'MetaLeft',
  },
  MetaRight: {
    type: buttonTypes.meta,
    text: 'Win',
    id: 'MetaRight',
  },
  AltLeft: {
    type: buttonTypes.alt,
    text: 'Alt',
    id: 'AltLeft',
  },
  AltRight: {
    type: buttonTypes.alt,
    text: 'Alt',
    id: 'AltRight',
  },
  Space: {
    type: buttonTypes.spacebar,
    text: '',
    id: 'Space',
  },
  ArrowLeft: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '◄',
        shift: '◄',
      },
      ru: {
        default: '◄',
        shift: '◄',
      },
    },
    id: 'ArrowLeft',
  },
  ArrowRight: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '►',
        shift: '►',
      },
      ru: {
        default: '►',
        shift: '►',
      },
    },
    id: 'ArrowRight',
  },
  ArrowDown: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '▼',
        shift: '▼',
      },
      ru: {
        default: '▼',
        shift: '▼',
      },
    },
    id: 'ArrowDown',
  },
  ArrowUp: {
    type: buttonTypes.printSymbol,
    text: {
      en: {
        default: '▲',
        shift: '▲',
      },
      ru: {
        default: '▲',
        shift: '▲',
      },
    },
    id: 'ArrowUp',
  },
  Delete: {
    type: buttonTypes.del,
    text: 'Del',
    id: 'Delete',
  },
};

export const config = [
  [
    buttonsConfig.Backquote,
    buttonsConfig.Digit1,
    buttonsConfig.Digit2,
    buttonsConfig.Digit3,
    buttonsConfig.Digit4,
    buttonsConfig.Digit5,
    buttonsConfig.Digit6,
    buttonsConfig.Digit7,
    buttonsConfig.Digit8,
    buttonsConfig.Digit9,
    buttonsConfig.Digit0,
    buttonsConfig.Minus,
    buttonsConfig.Equal,
    buttonsConfig.Backspace,
  ],
  [
    buttonsConfig.Tab,
    buttonsConfig.KeyQ,
    buttonsConfig.KeyW,
    buttonsConfig.KeyE,
    buttonsConfig.KeyR,
    buttonsConfig.KeyT,
    buttonsConfig.KeyY,
    buttonsConfig.KeyU,
    buttonsConfig.KeyI,
    buttonsConfig.KeyO,
    buttonsConfig.KeyP,
    buttonsConfig.BracketLeft,
    buttonsConfig.BracketRight,
    buttonsConfig.Backslash,
    buttonsConfig.Delete,
  ],
  [
    buttonsConfig.CapsLock,
    buttonsConfig.KeyA,
    buttonsConfig.KeyS,
    buttonsConfig.KeyD,
    buttonsConfig.KeyF,
    buttonsConfig.KeyG,
    buttonsConfig.KeyH,
    buttonsConfig.KeyJ,
    buttonsConfig.KeyK,
    buttonsConfig.KeyL,
    buttonsConfig.Semicolon,
    buttonsConfig.Quote,
    buttonsConfig.Enter,
  ],
  [
    buttonsConfig.ShiftLeft,
    buttonsConfig.KeyZ,
    buttonsConfig.KeyX,
    buttonsConfig.KeyC,
    buttonsConfig.KeyV,
    buttonsConfig.KeyB,
    buttonsConfig.KeyN,
    buttonsConfig.KeyM,
    buttonsConfig.Comma,
    buttonsConfig.Period,
    buttonsConfig.Slash,
    buttonsConfig.ArrowUp,
    buttonsConfig.ShiftRight,
  ],
  [
    buttonsConfig.ControlLeft,
    buttonsConfig.MetaLeft,
    buttonsConfig.AltLeft,
    buttonsConfig.Space,
    buttonsConfig.AltRight,
    buttonsConfig.ArrowLeft,
    buttonsConfig.ArrowDown,
    buttonsConfig.ArrowRight,
    buttonsConfig.ControlRight,
  ],
];
