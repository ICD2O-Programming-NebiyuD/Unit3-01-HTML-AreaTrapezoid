// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input length and width
  let sideA = parseInt(document.getElementById('sideA-of-triangle').value);
  let sideB = parseInt(document.getElementById('sideB-of-triangle').value);
  let height = parseInt(document.getElementById('height-of-triangle').value);
  // calculate area
  // process
  // let area = (sideA * sideB) / H2;
  // process
  let area = ((sideA + sideB) / 2)* height;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'

}

