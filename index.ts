import './style.css';

import { of, map, Observable, fromEvent, combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';

const $input1 = fromEvent(document.getElementById('js-input-1'), 'input');
const $input2 = fromEvent(document.getElementById('js-input-2'), 'input');
const $input3 = fromEvent(document.getElementById('js-input-3'), 'input');
const resultElement = document.getElementById('js-result');

combineLatest([$input1, $input2, $input3]).subscribe((result) => {
  const [event1, event2, event3] = result;
  const inputElement1: HTMLInputElement = event1.target;
  const inputElement2: HTMLInputElement = event2.target;
  const inputElement3: HTMLInputElement = event3.target;

  console.log(inputElement1.value, inputElement2.value, inputElement3.value);
  if (inputElement1.value === inputElement3.value) {
    resultElement.innerText = 'error';
    return;
  }
  resultElement.innerText = 'success';
});
