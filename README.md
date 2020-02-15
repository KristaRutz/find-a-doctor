# Find-a-Doc Application

#### An application where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in Seattle who can treat their medical issue.


### _By **Krista Rutz**. Last updated February 14, 2020_

## Description

This JavaScript application allows the user to search the BetterDoctor database to receive 10 doctors related to their search inputs.

## Installation / Set-up

You will need a **free API Key** to run this application.
* Visit the BetterDoctor API site and click “Get a free API key”.
* Fill out the form, and confirm your e-mail.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.
* Place your token in an _.env_ file at the top level of your directory. **Name your API key variable API_KEY in the _.env_ file.** It is best practice to include _.env_ in your _.gitignore_ file.
* * The file should contain this code: ``` API_KEY = [insert your key, e.g. a2c356ibgh44…] ```

You can then download or clone the repository to run this program locally.

* Select "Download" on the [GitHub Repository](https://github.com/KristaRutz/find-a-doctor.git) site 
* Download ZIP: Open the ZIP download and extract files. The new folder will be created as "find-a-doctor".
**or**
* Change into desktop directory and clone from command line: ```git clone https://github.com/KristaRutz/Solar-Systemwide-Calendar.git```
* Install packages from the root directory of the new folder in the command line:
  * ```npm install```
  * ```npm run build```
  * ```npm run start```
* Upon success, this will create a local server for the site which will reflect the current state of the program and accept user modifications.
* You can also view the app by opening the folder containing your files and double clicking on the _index.html_ file found in the _dist_ folder once the npm build is finished.

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
||||

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
