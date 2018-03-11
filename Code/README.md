## Code Directory Documentation  

The files in this directory are all Jupyter Notebook files and you will need Python 3.X to run the code.  
* Jupyter Notebook is an open-source web application for viewing and distributing code.  
* To download the Jupyter Notebook application, see [Installation](https://jupyter.org/install.html), and for more information, see [Documentation](https://jupyter.org/documentation.html).  

The following files contain the essential code for this project.  
  
### `Label_SimplyAnalyticsData.ipynb` 

  #### About
  This file contains code for following functionaliies:
* imputing missing values
* finding correlation between various features in gentrification definition
* label the Simply Analytics data for years 2000, 2010-17. All the census tracts are labelled per three gentrifiction definitions provided to us by sponsors. The label for each definition is described as below:

    * Sociology Definition: 
    Eligible to Gentrify, Gentrified, Not Eligible
    * Economics Definition
    Currently Gentrifying, Gentrified, Not Gentrifying
    * Urban Planning Definition
    In danger of Gentrifying, No danger
    
  #### Python Libraries Used
  - [Matplotlib](https://matplotlib.org) : is used for data visualization  
  - [Numpy](http://www.numpy.org) : is used for data calculations
  - [Pandas](http://pandas.pydata.org) : is used for data processing  
  
### `Label_ACSData.ipynb`

  #### About
  This file contains code for labelling the ACS 5 year estimates data for years 2010 and 2015. All the census tracts are labelled per three gentrifiction definitions provided to us by sponsors. The label for each definition is described as below:

   * Sociology Definition: 
    Eligible to Gentrify, Gentrified, Not Eligible
   * Economics Definition
    Currently Gentrifying, Gentrified, Not Gentrifying
   * Urban Planning Definition
    In danger of Gentrifying, No danger
      
  ##### Label_ACSData.ipynb is no longer in use as we replaced the ACS data with yearly modelled data from Simply Analytics.
  #### Python Libraries Used
  - [Pandas](http://pandas.pydata.org) : is used for data processing
  - [Numpy](http://www.numpy.org) : is used for data calculations
  
### `get_data_census_api.ipynb`

  #### About
  This notebook demonstrates how to use the Census Data Application Programming Interface (API) to access data from the U.S. Census Bureau. Using the API, you can download data from the American Community Survey (ACS) and the Decennial Census. Beginning in 2005, the ACS collected detailed sample data and then used that data to produce estimates for the socioeconomic and housing characteristics of the population. ACS multiyear estimates are designed to describe the population characteristics of an area over the full 3- or 5-year period, not for any specific day, period, or year within the multiyear time period. This is a partial list of the ACS and Census data products:
   * ACS 1 Year Estimates (2016, 2015, 2014, 2013, 2012, 2011),
   * ACS 3 Year Estimates (2013, 2012), 
   * ACS 5 Year Estimates (2005-2009, 2006-2010, 2010-2014, 2011-2015), and
   * Decennial Census (SF1/SF3) 2010, 2000, 1990
   
   #### List of the minimum variables needed for each gentrification definition:
__ All Criteria for Definition 1 (Sociology): __
 * median household income
 * median house value
 * percentage of residents age 25 and over holding bachelor’s degrees
 * inflation-adjusted median house value
 
__ All Criteria for Definition 2 (Economics): __
 * income levels
 * rent increases
 * home prices
 
__ All Criteria for Definition 3 (Urban Planning): __
 * % of workers taking public transit
 * % non-family households
 * % dwelling units in building with 5+ units
 * income diversity
 * % of renters paying >35% of income
 * % of dwelling units with three or more cars available
 * % non-hispanic white
  
  #### Main Python Library Used
   - [Pandas](http://pandas.pydata.org) : is used to get JSON data and for data processing  
