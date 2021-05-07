<p align="center">
 <a href=""><img width=220px height=200px src="https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png" alt="Project logo"></a>
</p>

<h3 align="center">Fern.fun Server</h3>

<div align="center">

[![GitHub Issues](https://img.shields.io/github/issues/fern-fun/Fern.fun-Server.svg)](https://github.com/fern-fun/fern.fun/issues)
[![License](https://img.shields.io/github/license/fern-fun/Fern.fun-Server.svg)](/LICENSE)

</div>






    



## 📝 Table of Contents
<!-- -  -->
<!-- - [Deployment](#deployment) -->
<!-- - [Usage](#usage) -->

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
Our RaspberryPI takes care of collecting various data connected to: current versions of a range of different apps, current currency data and usage data about itself, e.g. RAM usage, CPU temperature and usage. Now we mostly use it as a tool to test a spectrum of different libraries, tools and apps.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites <a name = "prerequisites"></a>

* [psutil](https://pypi.org/project/psutil/)
* [gpiozero](https://gpiozero.readthedocs.io/en/stable/)
* [yfinance](https://pypi.org/project/yfinance/ )
* Mail server
* [Weather API by Openweathermap.org](https://openweathermap.org/current)
```python
api_weather = requests.get('http://api.openweathermap.org/data/2.5/weather?appid={key}&q={city},{countryname}&units=metric'.format(city=json['city'],countryname=json['country_code'],key=''))
```
<!-- 
### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo. -->

<!-- ## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->

<!-- ## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system. -->

## ⛏️ Built Using <a name = "built_using"></a>

- [PHP](https://www.php.net) 
- [Python](https://www.python.org) 
- [CSS](https://html.com)
- [JS](https://www.javascript.com) 

## ✍️ Authors <a name = "authors"></a>

- [@MrJacob12](https://github.com/mrjacob12) - Idea & Backend
- [@Shaking-Donut](https://github.com/shaking-donut) - Frontend

See also the list of [contributors](https://github.com/fern-fun/Fern.fun-Server/contributors) who participated in this project.

<!-- ## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References -->
