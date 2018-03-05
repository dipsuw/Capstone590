## Project Summary
This is the repository for the **Seattle Gentrification Atlas** capstone project in the Masters of Science in Data Science program at the University of Washington, and prepared by Deepa Agrawal, Erin Orbits, and Angel Wang.  

The Seattle Gentrification Atlas is an interactive dashboard that combines many data sources in a visualization designed to analyze trends over time. The Seattle Gentrification Atlas is available on the Tableau Public site: [here](https://public.tableau.com/profile/erin.orbits#!/vizhome/SeattleGentrificationAtlas/Atlas?publish=yes).  

## Contents of the Repository
__NOTE__ Unless stated otherwise, these folders are for academic research purposes only. Although this repository is public, we recognize some of this material is copyrighted, and we have no intention of republishing this material. This repository is designed solely to facilitate the educational process.    
 * [Lit-Review-Docs](https://raw.githubusercontent.com/dipsuw/Capstone590/master/Lit-Review-Docs) is a working directory containing documents related to the literature review for this project.  
 
## Sample Visualizations

![screenshot](https://raw.githubusercontent.com/dipsuw/Capstone590/master/images/dashboard_demo_data.jpeg)

![poster](https://raw.githubusercontent.com/dipsuw/Capstone590/master/images/SeattleGentrificationAtlas_poster.png)  

![poster](https://raw.githubusercontent.com/dipsuw/Capstone590/master/images/SeattleGentrificationAtlas_poster.pdf)  

<a href="https://raw.githubusercontent.com/dipsuw/Capstone590/master/images/SeattleGentrificationAtlas_poster.pdf">Click to download pdf of poster</a>

## Purpose of this Project 
In the years since Microsoft became a household name, the Seattle area has continued to benefit from further investment in the technology sector. While the rise of the technology sector provides economic opportunities for many residents, it also exacerbates urban inequity through the process of gentrification.  

Gentrification is one process that contributes to inequality. However, there is no consensus about how to define gentrification. While, the definition of gentrification differs among academic disciplines, in general, a gentrifying neighborhood is one that moves from the bottom half to the top half in the distribution of median household income, rent, or home prices.  
  
The Seattle Gentrification Atlas compares definitions of gentrification from the fields of Sociology, Economics, and Urban Planning. Using these definitions, the Atlas identifies those neighborhoods: that have gentrified, that are currently gentrifying, and that are in greatest danger of gentrifying.  Using estimates based on census data, the Seattle Gentrification Atlas is designed to flag areas in danger of gentrification and visualize trends across the city. 

The Seattle Gentrification Atlas combines data analysis with GIS-based visualizations to produce spatial maps to reflect how gentrification has changed Seattle since 2000. Visualizing patterns of gentrification provides increased insight into the disparate impact of socioeconomic changes among Seattle's neighborhoods. Users can explore (1) how gentrification effects each neighborhood, (2) how other demographic factors are related to gentrification, and (3) how Seattle neighborhoods are likely to change in 2018.  
  
## Data Used in Project
 * The combined dataset with the demographic data: `blockgroup_data.csv`   
 
## Data Sources
* The demographic data was downloaded from the Simply Analytics database. Simply Analytics is only accessible through academic institutions and public libraries that subscribe to the Simply Analytics database.  
* Easy Analytic Software, Inc. (EASI) is a New York-based independent developer of desktop and internet demographic data.  
  - SimplyAnalytics (2017). EASI/AGS Data 2000, 2010-17. Retrieved Feb. 8-17 2017, from SimplyAnalytics database.  

## Tools Used in Project
For information about how to label the data, see the notebook file: [Label_SimplyAnalyticsData.ipynb](https://raw.githubusercontent.com/dipsuw/Capstone590/master/code/Label_SimplyAnalyticsData.ipynb).  

* Jupyter Notebook is an open-source web application for viewing and distributing code. To download the Jupyter Notebook application, see [Installation](https://jupyter.org/install.html), and for more information, see [Documentation](https://jupyter.org/documentation.html). 
* You will need Python 3.X and the following Python libraries to run the code in `Label_SimplyAnalyticsData.ipynb`.  
  - [Matplotlib](https://matplotlib.org) : will be used for data visualization
  - [Numpy](http://www.numpy.org) : will be used for data calculations  
  - [Pandas](http://pandas.pydata.org) : will be used for data processing  
 
