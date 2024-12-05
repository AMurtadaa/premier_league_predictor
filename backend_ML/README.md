# Project Overview

In this project, I'll predict the winner of football matches in the English Premier League (EPL).  

**Project Steps**

* Scrape match data using requests, BeautifulSoup, and pandas.  
* Clean the data and get it ready for machine learning using pandas.
* Make predictions about who will win a match using scikit-learn.
* Measure error and improve our predictions.

## Code

You can find the code for this project [here](https://github.com/AMurtadaa/premier_league_predictor/tree/main/backend_ML).

File overview:

* `scraping.ipynb` - a Jupyter notebook that scrapes our data.
* `predictions.ipynb` - a Jupyter notebook that makes predictions.

# Local Setup

## Installation

To build this project, I installed:

* JupyerLab
* Python 3.8+
* Python packages
    * pandas
    * requests
    * BeautifulSoup
    * scikit-learn
    
## Data

We'll be scraping [FBref](https://fbref.com/en/) to get our data in the first part of this project (`scraping.ipynb`).
