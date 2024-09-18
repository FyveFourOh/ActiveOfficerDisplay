<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FyveFourOh/ActiveOfficerDisplay">
    <img src="https://i.imgur.com/BIWIpU5.png" alt="Logo" width="300" height="254">
  </a>

<h3 align="center">Active Officer Display & Access Control (AODAC)</h3>

  <p align="center">
    Displays number of active onduty officers for each given agency and utilizes discord roles for onduty permissions.
    <br />
    <br />
    <br />
    <a href="https://github.com/FyveFourOh/ActiveOfficerDisplay">View Demo</a>
    ·
    <a href="https://github.com/FyveFourOh/ActiveOfficerDisplay/issues/new?assignees=FyveFourOh&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D">Report Bug</a>
    ·
    <a href="https://github.com/FyveFourOh/ActiveOfficerDisplay/issues/new?assignees=FyveFourOh&labels=enhancement&projects=&template=feature_request.md&title=%5BSUGGESTION%5D">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!--<li><a href="#acknowledgments">Acknowledgments</a></li>-->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Active Officer Display Screen Shot][product-screenshot]](https://example.com)

 Active Officer Display and Access Control is a standalone solution to view, in real time, how many law enforcement officers are onduty. The HUD is very customizable, you can set your own colors, department acronyms and even set the `config.cfg` to use badges next to the department acronyms to fit your server's world. You can also set your departments discord roles in `discordBot.json` to automatically enable a player to go onduty with their respective departments. It allows for a smooth whitelisting experience with very little setup. Once setup, the roles should act as permissions within FiveM for AODAC. It is worth noting that anyone can toggle the Active Officers HUD.

<!--<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>-->


### Built With
* [![https://www.newtonsoft.com/json][JSON.org]][JSON-url]
* [![Discord.js][Discord.js.org]][Discord.js-url]
* [![Node.js][Node.js.org]][Node.js-url]

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>



<!-- GETTING STARTED -->
## Getting Started


### Installation

1. Clone the repo into your resource folder
   ```sh
   git clone https://github.com/FyveFourOh/ActiveOfficerDisplay.git
   ```
2. Add `add_ace resource.ActiveOfficerDisplay command.add_ace allow` to your `server.cfg`
   
    If you change the resource name, make sure to change it in the above command. I would
  suggest not changing the name, but if you do and issues come up, change the name back to
  `ActiveOfficerDisplay` and see if the issue presists before submiting an issue.
   
3. Ensure the resource in your `server.cfg`

   `ensure ActiveOfficerDisplay`
   
4. Go into `config/config.cfg` and setup the HUD the way you wish 
   

5. Now go into `config/discordBot.json` and add in your discord server and role info

     - For the guild field you're going to need to make sure your discord account has developer mode activated
       - Go to your user settings by clicking the gear next to your discord username
       - Under `APP SETTINGS` select `Advanced` and then turn on developer mode
     - Now navigate to your discord server and right click on the server icon, at the bottom you can copy your `Server ID`
     - Go back to the `config/discordBot.json` and paste it into the `guild` field

     - You can do the same for the server roles
     - Goto your server settings and navigate to the `roles` tab
     - Click on the three dots next to the corresponding role you want to set for permissions and copy the `Role ID`
     - Now you can go back to `config/discordBot.json` and paste it into the corresponding departments field

6. You now will have to goto the discord [developer portal](https://discord.com/developers/applications) and make a bot

     - Once there, click on the `new application` button at the top right of the page
     - Enter a name for your bot, agree to the terms and click on create
     
     - Now navigate to the `installation` tab on the left
     - Under installation context, uncheck the box next to `user install`
     - Now scroll to the bottom of the screen and click the drop down under `scopes` and select `bot`
     - Give the bot `Administrator` permissions just under scopes
     
     - Navigate to the `bot` tab and under `Privileged Gateway Intents` check the `Presence Intent` and `Server Members Intent`

     - Now navigate to the `OAuth2` tab
     - Under OAuth2 URL Generator select `bot`
     - Then under permissions select `Administrator`
     - All the way at the bottom make sure integration type is `Install Guild`
     - Now copy the url generated and add the bot to your server
  
     - After this, go back to the `bot` tab and click on `reset token` and copy the token
     - You can now head back to our resource and locate the config at `config/discordBot.json`
     - Paste your bot token in the `token` field
  
7. Congratulations, you're finally done!
  

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>



<!-- USAGE EXAMPLES -->
## Usage

To go onduty with a department, simply type `/onduty [department]` make sure you have the appropiate role in discord.

To bring up the HUD simply type `/online [department]`. You can also type `ALL` in the department field to see 
all agencies stats. To change to another department's stats, you must retype `/online [CurrentSelectedDepartment]` to
disable the HUD first.

<!--Additional screenshots, code examples and demos work well in this space. You may also link to more resources.-->

<!--_For more examples, please refer to the [Documentation](https://example.com)_-->

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>



See the [open issues](https://github.com/FyveFourOh/ActiveOfficerDisplay/issues) for a full list of proposed features (and known issues).

<!--<p align="right">(<a href="#readme-top">back to top</a>)</p>-->

<!--<p align="right">(<a href="#readme-top">back to top</a>)</p>-->

### Top contributors:

<a href="https://github.com/FyveFourOh/ActiveOfficerDisplay/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=FyveFourOh/ActiveOfficerDisplay" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the GPL-3.0 License. See `LICENSE.md` for more information.

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>



<!-- CONTACT -->
## Contact

Niko AKA FyveFourOh - FyveFourOh@gmail.com

Project Link: [https://github.com/FyveFourOh/ActiveOfficerDisplay](https://github.com/FyveFourOh/ActiveOfficerDisplay)

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Zombieguy98's Config Reader](https://github.com/zombieguy98/fivem-config-reader)
  - Thank you Zombieguy98 for providing a greatly made configuration parser! Without it, this script would not be as user friendly.
* [LegacyMaps](https://forum.cfx.re/u/legacysmaps/summary)
  - I'd like to thank you for being the reason I started working on this script, as well as giving me much needed imput!

<p align="right">
  <a href="#readme-top">
    <img src="https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600">
  </a>
</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/FyveFourOh/ActiveOfficerDisplay.svg?style=for-the-badge
[contributors-url]: https://github.com/FyveFourOh/ActiveOfficerDisplay/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FyveFourOh/ActiveOfficerDisplay.svg?style=for-the-badge
[forks-url]: https://github.com/FyveFourOh/ActiveOfficerDisplay/network/members
[stars-shield]: https://img.shields.io/github/stars/FyveFourOh/ActiveOfficerDisplay.svg?style=for-the-badge
[stars-url]: https://github.com/FyveFourOh/ActiveOfficerDisplay/stargazers
[issues-shield]: https://img.shields.io/github/issues/FyveFourOh/ActiveOfficerDisplay.svg?style=for-the-badge
[issues-url]: https://github.com/FyveFourOh/ActiveOfficerDisplay/issues
[license-shield]: https://img.shields.io/github/license/FyveFourOh/ActiveOfficerDisplay.svg?style=for-the-badge
[license-url]: https://github.com/FyveFourOh/ActiveOfficerDisplay/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[BackToTop]: https://img.shields.io/badge/BACK%20TO%20TOP--NavyBlue?style=for-the-badge&logoSize=auto&labelColor=rgb(0%2C%2017%2C%2048)&color=green&cacheSeconds=3600
[BackToTop-URL]: #readme-top
[JSON.org]: https://img.shields.io/badge/Json.NET-brightgreen?style=for-the-badge&logo=JSON&logoColor=white&logoSize=auto&labelColor=000000&color=000000&cacheSeconds=3600&link=https%3A%2F%2Fwww.newtonsoft.com%2Fjson
[JSON-url]: https://www.newtonsoft.com/json
[Node.js.org]: https://img.shields.io/badge/Node.js-brightgreen?style=for-the-badge&logo=nodedotjs&logoColor=white&logoSize=auto&labelColor=2f8024&color=2f8024&cacheSeconds=3600&link=https%3A%2F%2Fnodejs.org%2Fen
[Node.js-url]: https://nodejs.org/en
[Discord.js.org]: https://img.shields.io/badge/Discord.js-blue?style=for-the-badge&logo=javascript&logoColor=white&logoSize=auto&labelColor=4e61ff&color=4e61ff&cacheSeconds=3600&link=https%3A%2F%2Fdiscord.js.org%2F
[Discord.js-url]: https://discord.js.org/
