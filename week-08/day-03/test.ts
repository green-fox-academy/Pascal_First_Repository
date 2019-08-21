import { test } from 'tape';
import { checkForAnagram } from './anagramm';
import { numberConverter } from './numberConverter';
'use strict';

test('question?', t => {
  t.equals(checkForAnagram('Windows', 'Flawless'), false);
  t.end();
});

test('test2', t => {
  t.equals(checkForAnagram('Windows', 'swodniw'), true);
  t.end();
});

test('test3', t => {
  t.equals(checkForAnagram('hom3wo rk', '3workhom'), false);
  t.end();
});

test('test4', t => {
  t.equals(checkForAnagram('', ''), true);
  t.end();
});

test('number converter test for one digit', t => {
  let testConverter: numberConverter = new numberConverter(0);
  t.equals(testConverter.controller(), 'zero dollar');
  t.end();
});

test('number_converter_test_01', t => {
  let testConverter: numberConverter = new numberConverter(1);
  t.equals(testConverter.controller(), 'one dollar/s');
  t.end();
});

test('number_converter_test_02', t => {
  let testConverter: numberConverter = new numberConverter(11);
  t.equals(testConverter.controller(), 'eleven dollar/s');
  t.end();
});

test('number_converter_test_03', t => {
  let testConverter: numberConverter = new numberConverter(51);
  t.equals(testConverter.controller(), 'fifty one dollar/s');
  t.end();
});

test('number_converter_test_04', t => {
  let testConverter: numberConverter = new numberConverter(513);
  t.equals(testConverter.controller(), 'five hundred and thirteen dollar/s');
  t.end();
});

test('number_converter_test_thousands', t => {
  let testConverter: numberConverter = new numberConverter(3456);
  t.equals(
    testConverter.controller(),
    'three thousand four hundred and fifty six dollar/s'
  );
  t.end();
});

test('number_converter_test_undefined', t => {
  let testConverter: numberConverter = new numberConverter('');
  t.equals(testConverter.controller(), "Given arguement can't be proccesed.");
  t.end();
});
