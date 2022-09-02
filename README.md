# ZuRuKenya Web APP

## Introduction
This project entails creating a travel directory Web application called ZuruKenya. It gives tourists recommendations of places to visit within Kenya. The app is meant to enlist tour recommendations and then tourists can view. A recommendation will include a photo, a description, charges, opening and closing hours, policies and amenities of the place to visit. The admin will be able to add these details on an admin form which will save on the server and the recommendation will show up in the web.

## The Client Side
The client side shows suggestions on different areas a user can visit within the country. An overview image of the tour location, entry fee charges, opening and closing hours and policies.

## About us 
This page provides a summary of the services by the application.

## Images
The following image has been used in the app.
1. ![landing page image](./images/safari.jpeg)

## Color Palette
The following is the chosen scheme:
![Color Palette](./themecolors.jpeg)

## Fonts
The following are the fonts used for this project:
1. Nunito (Google Fonts)
1. Source Serif Pro (Google Fonts)

## Pages
The web application has the following pages:

#### The Client View Page
![Client View Page](./images/clientview.png) 

The client side shows suggestions on different areas a user can visit within the country. An overview image of the tour location, entry fee charges, opening and closing hours and policies.

#### The Site Update Form/view
![Admin Form](./images/adminform.png)

The admin view shows the form template for the admin to add details to the recommendations on user view. 

## Definition of Terms
#### Location
This is the particular place suggested to visit.
#### Image
This is a link to an image that gives the general impression , represented by the location in form of a piece of art.
#### Description
This is an overview of the location in terms of the history of the place, what the person is likely to experience, see, and learn about the location.
#### Charges
This are the rates charged for entry to the location. Divided into citizen and non citizens, adults, students and children.
#### Policies
This are the rules or guidelines that a user is supposed to adhere to within the location or meet before they get to location.

## Functionality
To run the app

 From inside the dirctory containing this project, run json-server --watch db.json to start the JSON server you can verify the server is running by navigating to http://localhost:3000/recommendations

 Leave the server running for now. Open a second terminal window and navigate to the directory Open index.html in your text editor and in the browser. Some details show up in the recommendations tab. If youd like to view the about us details click on the link top right to show you the details. To go back click home to view the home page with recommendations on the left. 

 Navigate to the form.html and open it in your server, the web page recommendation page works by having details uploaded by this form on submit. Fill in required field in the form, the index.js works by Fetching data based on what the user types into that form displaying that data on the page.

 JSON Server follows RESTful conventions. As a result of these conventions, we can expect to be able to access specific records directly by providing the appropriate parameter in our request URL.

If you open a new tab in your browser and visit http://localhost:3000/recommendations/1, instead of seeing all three location objects, you'll be presented with the object with 1 as its id:

By capturing user input via event listeners, using fetch requests, and DOM manipulation, we can update the ZuruKenya web page content as a user requests it.


