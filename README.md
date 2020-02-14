# README Template

#### An application to convert between planetary years, hosted on [GitHub Pages](https://kristarutz.github.io/Solar-Systemwide-Calendar/), where a user can calculate their age on all of the planets in our solar system.


### _By **Krista Rutz**. Last updated February 7, 2020_

## Description

This JavaScript application allows the user to convert time in Earth years to years on other planets, based on the speed of each planet's orbit of the sun in Earth years.

## Installation / Set-up

This app is ready to run at this url:
https://kristarutz.github.io/Solar-Systemwide-Calendar/

You can also download the repository to run this program locally.

**Download ZIP:**

* Select "Download" on the [GitHub Repository](https://github.com/KristaRutz/Solar-Systemwide-Calendar.git) site 
* Download ZIP: Open the ZIP download and extract files. The new folder will be created as "Solar-Systemwide-Calendar"
* In this folder, select the index.html document.
* Choose "Open With" > Google Chrome or another browser of your choice.
* The website is now ready to use!

**Clone:**

* Clone from command line: ```git clone https://github.com/KristaRutz/Solar-Systemwide-Calendar.git```
* Install packages from command line:
  * ```npm install```
  * ```npm run build```
  * ```npm run start```
* Upon success, this will create a local server for the site which will reflect the current state of the program and accept user modifications.

## Technologies Used

* **JavaScript** and **jQuery**
* **Node.js** Package Manager
  * **webpack** bundler
  * **Jest** testing
  * **ESLint**
* Custom **CSS** and responsive design using Bootstrap framework
* **HTML**

## Specifications
<details>
  <summary>Expand specs for this project</summary>

| Spec | Example Input | Expected Output |
| :-------------     | :------------- | :------------- |
| correctly construct a planet calendar | Pluto, 248 | {planetName: "Pluto", yearLength: 248} |
|accept a length of time in earth years and correctly return it in x planet years| Pluto, 248 | 1 |
| return the user's remaining life expectancy on a given planet | Pluto, Age 25 | 0.19 more years expected |
| construct an object that contains an array of planet calendar objects for all planets in our solar system |||
| Takes an age (in earth years) and return a string listing this timeframe on each planet in the solar system | 50 | "Mercury: 207.47, Venus: 81.27, Earth: 50.00, Mars: 26.58, Jupiter: 4.22, Saturn: 1.70, Uranus: 0.60, Neptune: 0.30" |
| Tells a user their life expectancy on each planet in the solar system | 1 | On Mercury, 297.10 more years expected. On Venus, 116.38 more years expected. On Earth, 71.60 more years expected. On Mars, 38.07 more years expected. On Jupiter, 6.04 more years expected. On Saturn, 2.43 more years expected. On Uranus, 0.85 more years expected. On Neptune, 0.43 more years expected. |
||||
| User begins with an empty form | "Example" | "Example" |
| When user clicks <kbd>Go</kbd>, the list of ages on other planets appears | clicks <kbd>Go</kbd>| "Mercury: 0.00, Venus: 0.00, Earth: 0.00, Mars: 0.00, Jupiter: 0.00, Saturn: 0.00, Uranus: 0.00, Neptune: 0.00" |
| When user enters age, list updates to reflect age | 1 | "Mercury: 4.15, Venus: 1.63, Earth: 1.00, Mars: 0.53, Jupiter: 0.08, Saturn: 0.03, Uranus: 0.01, Neptune: 0.01" |
| User selects "Life Expectancy" option | clicks <kbd>Go</kbd> | "On Mercury, 263.90 more years expected. On Venus, 103.38 more years expected. On Earth, 63.60 more years expected. On Mars, 33.81 more years expected. On Jupiter, 5.36 more years expected. On Saturn, 2.16 more years expected. On Uranus, 0.76 more years expected. On Neptune, 0.39 more years expected." |


</details>

## Known Bugs

No known bugs.

## Support and contact details

Please contact me if you run into any issues or have questions, ideas or concerns.  I can be contacted at <krista.rutz@pomona.edu>. Feel free to create a pull request for updates - _contributions to the code are encouraged!_

## Usage and Licensing

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Krista Rutz_**

<details>
  <summary>View license details</summary>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</details>
