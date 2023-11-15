import React from "react";

import { A } from "../../components/UI/Header/Typography/string/A";
import { B } from "../../components/UI/Header/Typography/string/B";
import { C } from "../../components/UI/Header/Typography/string/C";
import { D } from "../../components/UI/Header/Typography/string/D";
import { E } from "../../components/UI/Header/Typography/string/E";
import { F } from "../../components/UI/Header/Typography/string/F";
import { G } from "../../components/UI/Header/Typography/string/G";
import { H } from "../../components/UI/Header/Typography/string/H";
import { I } from "../../components/UI/Header/Typography/string/I";
import { J } from "../../components/UI/Header/Typography/string/J";

import { One } from "../../components/UI/Header/Typography/number/One";
import { Two } from "../../components/UI/Header/Typography/number/Two";
import { Three } from "../../components/UI/Header/Typography/number/Three";
import { Four } from "../../components/UI/Header/Typography/number/Four";
import { Five } from "../../components/UI/Header/Typography/number/Five";
import { Six } from "../../components/UI/Header/Typography/number/Six";
import { Seven } from "../../components/UI/Header/Typography/number/Seven";
import { Eight } from "../../components/UI/Header/Typography/number/Eight";
import { Nine } from "../../components/UI/Header/Typography/number/Nine";
import { Ten } from "../../components/UI/Header/Typography/number/Ten";

import { VariableA } from "../../components/UI/Header/Typography/boolean/VariableA";
import { VariableB } from "../../components/UI/Header/Typography/boolean/VariableB";
import { VariableC } from "../../components/UI/Header/Typography/boolean/VariableC";
import { VariableD } from "../../components/UI/Header/Typography/boolean/VariableD";
import { VariableE } from "../../components/UI/Header/Typography/boolean/VariableE";
import { VariableF } from "../../components/UI/Header/Typography/boolean/VariableF";
import { VariableG } from "../../components/UI/Header/Typography/boolean/VariableG";
import { VariableH } from "../../components/UI/Header/Typography/boolean/VariableH";
import { VariableI } from "../../components/UI/Header/Typography/boolean/VariableI";
import { VariableJ } from "../../components/UI/Header/Typography/boolean/VariableJ";

import ObjOne from "../../components/UI/Header/Typography/object/ObjOne";
import ObjTwo from "../../components/UI/Header/Typography/object/ObjTwo";
import ObjThree from "../../components/UI/Header/Typography/object/ObjThree";
import ObjFour from "../../components/UI/Header/Typography/object/ObjFour";
import ObjFive from "../../components/UI/Header/Typography/object/ObjFive";
import ObjSix from "../../components/UI/Header/Typography/object/ObjSix";
import ObjSeven from "../../components/UI/Header/Typography/object/ObjSeven";
import ObjEight from "../../components/UI/Header/Typography/object/ObjEight";
import ObjNine from "../../components/UI/Header/Typography/object/ObjNine";
import ObjTen from "../../components/UI/Header/Typography/object/ObjTen";

import ArrayOne from "../../components/UI/Header/Typography/array/ArrayOne";
import ArrayTwo from "../../components/UI/Header/Typography/array/ArrayTwo";
import ArrayThree from "../../components/UI/Header/Typography/array/ArrayThree";
import ArrayFour from "../../components/UI/Header/Typography/array/ArrayFour";
import ArrayFive from "../../components/UI/Header/Typography/array/ArrayFive";
import ArraySix from "../../components/UI/Header/Typography/array/ArraySix";
import ArraySeven from "../../components/UI/Header/Typography/array/ArraySeven";
import ArrayEight from "../../components/UI/Header/Typography/array/ArrayEight";
import ArrayNine from "../../components/UI/Header/Typography/array/ArrayNine";
import ArrayTen from "../../components/UI/Header/Typography/array/ArrayTen";

import Sum from "../../components/UI/Header/Typography/function/Sum";
import Multiply from "../../components/UI/Header/Typography/function/Multiply";
import IsEven from "../../components/UI/Header/Typography/function/IsEven";
import Capitalize from "../../components/UI/Header/Typography/function/Capitalize";
import ReverseArr from "../../components/UI/Header/Typography/function/ReverseArr";
import FindMax from "../../components/UI/Header/Typography/function/FindMax";
import FilterStrings from "../../components/UI/Header/Typography/function/FilterStrings";
import Average from "../../components/UI/Header/Typography/function/Average";
import GetUniqueValues from "../../components/UI/Header/Typography/function/GetUniqueValues";
import FormatDate from "../../components/UI/Header/Typography/function/FormatDate";

export const Homework = () => {
  
  const sumResult = Sum(2, 3)

  const multiplyResult = Multiply(2, 2)

  const numberToCheck = 10;
  const isEvenResult = IsEven(numberToCheck);

  const inputString = "Привет";
  const capitalizeResult = Capitalize(inputString);

  const inputArray = [1, 2, 3, 4, 5];
  const arrResult = ReverseArr(inputArray);

  const numbersArray = [10, 5, 8, 15, 3];
  const MaxNumber = FindMax(numbersArray);

  const mixedArray = [1, "two", 3, "four", "five"];
  const filterStrings = FilterStrings(mixedArray);

  const numbersAverageArray = [3, 7, 2, 1, 10];
  const averageResult = Average(numbersAverageArray);

  const notUniqueArray = [1, 2, 2, 3, 4, 4, 5, "five", "five", "six"];
  const uniqueValues = GetUniqueValues(notUniqueArray);

  const today = new Date();
  const FormattedDate = FormatDate(today);

  return (
    <div>
      <A aText="первый текст " />
      <B bText="второй текст " />
      <C cText="третий текст " />
      <D dText="четвертый текст " />
      <E eText="пятый текст " />
      <F fText="шестой текст " />
      <G gText="седьмой текст " />
      <H hText="восьмой текст " />
      <I iText="девятый текст " />
      <J jText="десятый текст " />

      <One oneNumber={1}/>
      <Two twoNumber={2}/>
      <Three threeNumber={3}/>
      <Four fourNumber={4}/>
      <Five fiveNumber={5}/>
      <Six sixNumber={6}/>
      <Seven sevenNumber={7}/>
      <Eight eightNumber={8}/>
      <Nine nineNumber={9}/>
      <Ten tenNumber={10}/>

      <VariableA boolean/>
      <VariableB boolean/>
      <VariableC boolean/>
      <VariableD boolean/>
      <VariableE boolean/>
      <VariableF boolean/>
      <VariableG boolean/>
      <VariableH boolean/>
      <VariableI boolean/>
      <VariableJ boolean/>

      <ObjOne customKey={true} />    
      <ObjTwo customKey={false} />    
      <ObjThree customKey={true} />    
      <ObjFour customKey={false} />    
      <ObjFive customKey={true} />    
      <ObjSix customKey={false} />    
      <ObjSeven customKey={true} />    
      <ObjEight customKey={false} />    
      <ObjNine customKey={true} />    
      <ObjTen customKey={false} />    

      <ArrayOne items={[1, 2, 3, 4, 5]} />
      <ArrayTwo items={[6, 7, 8, 9, 10]} />
      <ArrayThree items={[11, 12, 13, 14, 15]} />
      <ArrayFour items={[16, 17, 18, 19, 20]} />
      <ArrayFive items={[21, 22, 23, 24, 25]} />
      <ArraySix items={[26, 27, 28, 29, 30]} />
      <ArraySeven items={[31, 32, 33, 34, 35]} />
      <ArrayEight items={[36, 37, 38, 39, 40]} />
      <ArrayNine items={[41, 42, 43, 44, 45]} />
      <ArrayTen items={[46, 47, 48, 49, 50]} />

      <div>сумма: {sumResult}</div>

      <div>произведение: {multiplyResult}</div>

      <div>{numberToCheck} чётное число? {isEvenResult ? "Да" : "Нет"}</div>

      <div>{capitalizeResult}</div>

      <div>{JSON.stringify(arrResult)}</div>

      <div>{MaxNumber}</div>

      <div>{JSON.stringify(filterStrings)}</div>

      <div>среднее значение: {averageResult}</div>

      <div>{uniqueValues}</div>

      <div>{FormattedDate}</div>
      </div>
  );
};
