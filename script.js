import { buttonTypes, buttonsConfig, config } from './constants/keyboard-config.js';


window.onload = () => {
  new App();
};

class App {
  constructor() {
    new Textarea();
    new Keyboard(config);
  }
}

class Keyboard {
  constructor(config) {
    this.language = localStorage.getItem('language') || 'EN';
    this.selectedButtons = [];

    this.keyboardContainer = this._createKeyboardContainer();

    config.forEach((rowConfig) => this._createRow(rowConfig));

    this._addKeyboardListener();
    this._createDescription();
  }

  _createKeyboardContainer() {
    const keyboardContainer = document.createElement('div');

    keyboardContainer.className = 'keyboard-container';
    document.body.appendChild(keyboardContainer);

    return keyboardContainer;
  }

  _createRow(config) {
    const row = document.createElement('div');

    row.className = 'keyboard-row';

    config.forEach((btnConfig) => {
      const btn = this._createButton(btnConfig);

      if (btn) {
        btn.classList.add('button');

        row.append(btn);
      }
    });

    this.keyboardContainer.append(row);
  }

  _createButton(btnConfig) {
    let btn;

    switch (btnConfig.type) {
      case buttonTypes.printSymbol:
        btn = this._createSymbolButton(btnConfig);
        break;
      case buttonTypes.capsLock:
        btn = this._createCapsLockButton(btnConfig);
        break;
      case buttonTypes.backspace:
        btn = this._createBackspaceButton(btnConfig);
        break;
      case buttonTypes.tab:
        btn = this._creatTabButton(btnConfig);
        break;
      case buttonTypes.enter:
        btn = this._creatEnterButton(btnConfig);
        break;
      case buttonTypes.shift:
        btn = this._creatShiftButton(btnConfig);
        break;
      case buttonTypes.control:
        btn = this._creatControlButton(btnConfig);
        break;
      case buttonTypes.meta:
        btn = this._creatMetaButton(btnConfig);
        break;
      case buttonTypes.alt:
        btn = this._creatAltButton(btnConfig);
        break;
      case buttonTypes.spacebar:
        btn = this._creatSpacebarButton(btnConfig);
        break;
      case buttonTypes.del:
        btn = this._creatDelButton(btnConfig);
        break;
    }

    return btn;
  }

  _createSymbolButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = this.language === 'EN'
      ? btnConfig.text.en.default
      : btnConfig.text.ru.default;
    btn.id = btnConfig.id;
    btn.setAttribute('symbol-btn', '');

    btn.onclick = this._onSymbolButtonClick.bind(this);

    return btn;
  }

  _onSymbolButtonClick(event) {
    const button = event.target;

    this._printSymbol(button);
  }

  _printSymbol(button) {
    const output = button.innerText;
    const textArea = document.getElementById('textarea');
    const { selectionStart } = textArea;
    const { selectionEnd } = textArea;

    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _onEnterButtonClick() {
    this._printEnter();
  }

  _printEnter() {
    const output = '\n';
    const textArea = document.getElementById('textarea');
    const { selectionStart } = textArea;
    const { selectionEnd } = textArea;

    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _onSpaceButtonClick() {
    this._printSpace();
  }

  _printSpace() {
    const output = ' ';
    const textArea = document.getElementById('textarea');
    const { selectionStart } = textArea;
    const { selectionEnd } = textArea;

    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _onTabClick() {
    this._printTab();
  }

  _printTab() {
    const output = '    ';
    const textArea = document.getElementById('textarea');

    const { selectionStart } = textArea;
    const { selectionEnd } = textArea;

    textArea.focus();
    textArea.setRangeText(output, selectionStart, selectionEnd, 'end');
  }

  _createCapsLockButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;
    btn.classList.add('caps-lock');

    btn.onclick = this._onCapsLockClick.bind(this);

    return btn;
  }

  _createBackspaceButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;
    btn.classList.add('backspace');

    btn.onclick = this._onBackspaceClick;

    return btn;
  }

  _creatDelButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onDelClick;

    return btn;
  }

  _creatEnterButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;
    btn.classList.add('enter');

    btn.onclick = this._onEnterButtonClick.bind(this);

    return btn;
  }

  _creatShiftButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;
    btn.classList.add(btnConfig.className);

    btn.onclick = this._onShiftClick.bind(this);

    return btn;
  }

  _creatControlButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    btn.onclick = this._onCtrlClick.bind(this);

    return btn;
  }

  _creatAltButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;

    return btn;
  }

  _creatSpacebarButton(btnConfig) {
    const btn = document.createElement('button');

    btn.id = btnConfig.id;
    btn.classList.add('space');

    btn.onclick = this._onSpaceButtonClick.bind(this);

    return btn;
  }

  _creatMetaButton() {
    const btn = document.createElement('button');

    btn.innerText = 'Win';
    btn.id = 'meta';

    return btn;
  }

  _creatTabButton(btnConfig) {
    const btn = document.createElement('button');

    btn.innerText = btnConfig.text;
    btn.id = btnConfig.id;
    btn.classList.add('tab');

    btn.onclick = this._onTabClick.bind(this);

    return btn;
  }

  _onCapsLockClick(event) {
    const button = event.target;

    this._toggleCapsLock(button);
  }

  _toggleCapsLock(button) {
    const index = this.selectedButtons.indexOf('CapsLock');

    if (index === -1) {
      this.selectedButtons.push('CapsLock');
    } else {
      this.selectedButtons.splice(index, 1);
    }

    button.classList.toggle('btn-selected');

    this._changeButtonText();
  }

  _onShiftClick() {
    const { id } = event.target;

    this._handleShiftClick(id);
  }

  _handleShiftClick(code) {
    const isShiftOn = this.selectedButtons.includes('ShiftLeft') || this.selectedButtons.includes('ShiftRight');

    if (isShiftOn) {
      this.selectedButtons = this.selectedButtons.filter((button) => button !== 'ShiftLeft' && button !== 'ShiftRight');
    } else {
      this.selectedButtons.push(code);
    }

    this._checkShiftCtrlCombination();
    this._changeButtonText();
  }

  _onCtrlClick(event) {
    const { id } = event.target;

    this._handleCtrlClick(id);
  }

  _handleCtrlClick(code) {
    const isCtrlOn = this.selectedButtons.includes('ControlLeft') || this.selectedButtons.includes('ControlRight'); // move to separate const

    if (isCtrlOn) {
      this.selectedButtons = this.selectedButtons.filter((button) => button !== 'ControlLeft' && button !== 'ControlRight');
    } else {
      this.selectedButtons.push(code);
    }

    this._checkShiftCtrlCombination();
    this._changeButtonText();
  }

  _handleShiftCtrlCombination() {
    const isShiftOn = this.selectedButtons.includes('ShiftLeft') || this.selectedButtons.includes('ShiftRight'); // move to separate const
    const isCtrlOn = this.selectedButtons.includes('ControlLeft') || this.selectedButtons.includes('ControlRight'); // move to separate const

    if (isShiftOn && isCtrlOn) {
      this._changeLanguage();

      this.selectedButtons = this.selectedButtons.filter(
        (button) => button !== 'ShiftLeft' && button !== 'ShiftRight' && button !== 'ControlLeft' && button !== 'ControlRight',
      );
    }
  }

  _checkShiftCtrlCombination() {
    this._handleShiftCtrlCombination();

    this._toggleButton('ShiftLeft');
    this._toggleButton('ShiftRight');
    this._toggleButton('ControlLeft');
    this._toggleButton('ControlRight');
  }

  _toggleButton(buttonId) {
    const isButtonOn = this.selectedButtons.includes(buttonId);
    const buttonClassList = this.keyboardContainer.querySelector(`#${buttonId}`).classList;

    if (isButtonOn) {
      buttonClassList.add('btn-selected');
    } else {
      buttonClassList.remove('btn-selected');
    }
  }

  _changeLanguage() {
    this.language = this.language === 'EN' ? 'RU' : 'EN';
    localStorage.setItem('language', this.language);
  }

  _changeButtonText() {
    const isCapsLockOn = this.selectedButtons.includes('CapsLock');
    const isShiftOn = this.selectedButtons.includes('ShiftLeft') || this.selectedButtons.includes('ShiftRight'); // move to separate const
    const languageKey = this.language === 'EN' ? 'en' : 'ru';

    const symbolButtons = this.keyboardContainer.querySelectorAll('button[symbol-btn]');

    symbolButtons.forEach((button) => {
      const { id } = button;
      const config = buttonsConfig[id].text[languageKey];

      if (isShiftOn) {
        if (isCapsLockOn) {
          button.innerText = config.shift.toLowerCase();
        } else {
          button.innerText = config.shift;
        }
      } else if (isCapsLockOn) {
        button.innerText = config.default.toUpperCase();
      } else {
        button.innerText = config.default;
      }
    });
  }

  _onBackspaceClick() {
    const textArea = document.querySelector('.textarea');
    const { textLength } = textArea;
    const { selectionStart } = textArea;
    const { selectionEnd } = textArea;
    const selectedLength = selectionEnd - selectionStart;

    if (!textLength || !selectedLength && !selectionStart) {
      return;
    }

    textArea.focus();

    textArea.setRangeText('', selectionStart - 1, selectionStart, 'end');
  }

  _onDelClick() {
    const textArea = document.getElementById('textarea');
    const { selectionStart } = textArea;

    textArea.focus();
    textArea.setRangeText('', selectionStart, selectionStart + 1, 'end');
  }

  _onKeyboardShiftOrCtrlDown(code) {
    const index = this.selectedButtons.indexOf(code);

    if (index === -1) {
      this.selectedButtons.push(code);
    }

    this._changeButtonText();
  }

  _onKeyboardShiftUp() {
    this.selectedButtons = this.selectedButtons.filter((button) => button !== 'ShiftLeft' && button !== 'ShiftRight');

    this._changeButtonText();
  }

  _onKeyboardCtrlUp() {
    this.selectedButtons = this.selectedButtons.filter((button) => button !== 'ControlLeft' && button !== 'ControlRight');

    this._changeButtonText();
  }

  _onKeyDown(event) {
    event.preventDefault();

    const { code } = event;
    const config = buttonsConfig[code];
    const button = this.keyboardContainer.querySelector(`#${code}`);

    switch (config.type) {
      case buttonTypes.printSymbol:
        this._printSymbol(button);
        this._selectButton(button);
        break;
      case buttonTypes.backspace:
        this._onBackspaceClick();
        this._selectButton(button);
        break;
      case buttonTypes.del:
        this._onDelClick();
        this._selectButton(button);
        break;
      case buttonTypes.enter:
        this._onEnterButtonClick();
        this._selectButton(button);
        break;
      case buttonTypes.tab:
        this._onTabClick();
        this._selectButton(button);
        break;
      case buttonTypes.shift:
        this._onKeyboardShiftOrCtrlDown(code);
        this._selectButton(button);
        this._handleShiftCtrlCombination();
        break;
      case buttonTypes.control:
        this._onKeyboardShiftOrCtrlDown(code);
        this._selectButton(button);
        this._handleShiftCtrlCombination();
        break;
      case buttonTypes.meta:
        this._selectButton(button);
        break;
      case buttonTypes.alt:
        this._selectButton(button);
        break;
      case buttonTypes.spacebar:
        this._onSpaceButtonClick();
        this._selectButton(button);
        break;
    }
  }

  _onKeyUp(event) {
    const { code } = event;
    const config = buttonsConfig[code];
    const button = this.keyboardContainer.querySelector(`#${code}`);

    switch (config.type) {
      case buttonTypes.printSymbol:
        this._deselectButton(button);
        break;
      case buttonTypes.backspace:
        this._deselectButton(button);
        break;
      case buttonTypes.del:
        this._deselectButton(button);
        break;
      case buttonTypes.capsLock:
        this._toggleCapsLock(button);
        break;
      case buttonTypes.tab:
        this._deselectButton(button);
        break;
      case buttonTypes.shift:
        this._onKeyboardShiftUp();
        this._deselectButton(button);
        break;
      case buttonTypes.control:
        this._onKeyboardCtrlUp();
        this._deselectButton(button);
        break;
      case buttonTypes.enter:
        this._deselectButton(button);
        break;
      case buttonTypes.meta:
        this._deselectButton(button);
        break;
      case buttonTypes.alt:
        this._deselectButton(button);
        break;
      case buttonTypes.spacebar:
        this._deselectButton(button);
        break;
    }
  }

  _addKeyboardListener() {
    document.onkeydown = this._onKeyDown.bind(this);
    document.onkeyup = this._onKeyUp.bind(this);
  }

  _selectButton(button) {
    button.classList.add('btn-selected');
  }

  _deselectButton(button) {
    button.classList.remove('btn-selected');
  }

  _createDescription() {
    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = 'Клавиатура создана в операционной системе Windows. Для переключения клавиш нажмите ctrl + shift';
    document.body.appendChild(description);
  }
}

class Textarea {
  constructor() {
    this.value = '';

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.id = 'textarea';
    document.body.appendChild(textarea);
  }
}
