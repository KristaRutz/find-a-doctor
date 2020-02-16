# Find-a-Doc Application - GH-Pages version

#### An application where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of nearby doctors who can treat their medical issue, hosted on [GitHub pages](https://kristarutz.github.io/find-a-doctor/).


### _By **Krista Rutz**. Last updated February 16, 2020_

## Description

This JavaScript application allows the user to search the BetterDoctor database to receive 10 doctors related to their search inputs.

## Installation / Set-up

You will need a **free API Key** to run this application.
* Visit the BetterDoctor API site and click “Get a free API key”.
* Fill out the form, and confirm your e-mail.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

You can then open this in [GitHub pages](https://kristarutz.github.io/find-a-doctor/) and use your API key to access the data.

## Technologies Used

* **JavaScript** and **jQuery**
* BetterDoctor **API**
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
| user selects "Find doctor" button to receive a list of doctors in the Seattle area | click | list of doctors |
| If the query response includes any doctors, first name, last name, address, phone number, website and whether or not the doctor is accepting new patients is displayed | click | table of doctor info |
| User enters a medical issue to receive a list of doctors in the Seattle area that fit the search query | Symptom: "sore throat"| "Displaying 15 of 104 matches to your search." |
| user enters a name to receive a list of doctors in the Seattle area that fit the search query | Name: "Mark K" | "Displaying 4 of 4 matches to your search." |
| If no doctors meet the search criteria, the application returns a notification that states that no doctors meet the criteria. | Symptom: "hello" | "Your search did not match any results. |
| If the API call results in an error (any message not a 200 OK), the application returns a notification that states what the error is. | No API Key | There was an error handling your request: 401 (Unauthorized) |


</details>

## Known Bugs

Search terms must be very specific because of the way the information is fed into the database.

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
