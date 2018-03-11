## Code Directory Documentation  

The files in this directory are all Jupyter Notebook files and you will need Python 3.X to run the code.  
* Jupyter Notebook is an open-source web application for viewing and distributing code.  
* To download the Jupyter Notebook application, see [Installation](https://jupyter.org/install.html), and for more information, see [Documentation](https://jupyter.org/documentation.html). 
  
#### `Label_SimplyAnalyticsData.ipynb` 

  #### About
  This file contains code for following functionaliies:
* imputing missing values
* finding correlation between various features in gentrification definition
* label the Simply Analytics data for years 2000, 2010-17. All the census tracts are labelled per three gentrifiction definitions provided to us by sponsors. The label for each definition is described as below:
    - Sociology Definition: 
    Eligible to Gentrify, Gentrified, Not Eligible
    - Economics Definition
    Currently Gentrifying, Gentrified, Not Gentrifying
    - Urban Planning Definition
    In danger of Gentrifying, No danger
    
  #### Python Libraries Used
  - [Matplotlib](https://matplotlib.org) : is used for data visualization  
  - [Numpy](http://www.numpy.org) : is used for data calculations
  - [Pandas](http://pandas.pydata.org) : is used for data processing  
  
#### `Label_ACSData.ipynb`

  #### About
  This file contains code for labelling the ACS 5 year estimates data for years 2010 and 2015. All the census tracts are labelled per three gentrifiction definitions provided to us by sponsors. The label for each definition is described as below:  
    - Sociology Definition: 
    Eligible to Gentrify, Gentrified, Not Eligible
    - Economics Definition
    Currently Gentrifying, Gentrified, Not Gentrifying
    - Urban Planning Definition
    In danger of Gentrifying, No danger
    
  ##### Label_ACSData.ipynb is no longer in use as we replaced the ACS data with yearly modelled data from Simply Analytics.
  #### Python Libraries Used
  - [Pandas](http://pandas.pydata.org) : is used for data processing
  - [Numpy](http://www.numpy.org) : is used for data calculations
  
#### `get_data_census_api.ipynb`

  #### About
  
  #### Python Libraries Used
   - [json](https://docs.python.org/3/library/json.html) : 
   - [Pandas](http://pandas.pydata.org) : is used for data processing  
