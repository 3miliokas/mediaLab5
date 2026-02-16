# mediaLab3

This lab aims to build your first Augmented Reality (AR) app.

There are many open source alternatives to build augmented reality application. One of the web based solution is AR.js. You can try a huge set of examples: 
https://github.com/stemkoski/AR-Examples

# Requirements for repository
  - You have to clone this repository and make two branches (master and develop).
  - The develop branch should contain commits of every new feature of the AR application.
  - When all features will be ready you have to merge the development branch to the master.

# Requirements for AR application
There are three options to choose from. 

Option A:
  - Create a 3D model using Three.js and integrate into laboratory sample. 
  - 3D model must be complex structure made by you.

Option B:
  - Make your own marker like 'Hiro'.
  - The application should be able to recognize your marker and display a cube when it is present.

Option C:
  - It is your chance to show your skills and creativity.
  - You can add extra features to existing AR.js examples.
  - Make different markers to control a video/audio player.
  - Or anything other.
  
The general requirements for option A, B & C:
  - Test application on at least two browsers and specify in README.md which version and browser it was.
  - To pass this lab, you have to fully complete an option.  
  
# Important notes
  - SSL server is needed to run this lab material.
  - You will be needed to generate self signed sertificate and set up your web server. 
You can try to use these file servers:  
  - Apache: https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md 
  - Tomcat: http://androidsrc.net/installing-tomcat8-raspberry-pi-3/ 
  - HFS: http://www.rejetto.com/hfs/ or any other server.
Proxy http to https:
  - https://technique.arscenic.org/lamp-linux-apache-mysql-php/apache-le-serveur-http/modules-complementaires/article/installer-et-configurer-le-module-ssl-pour-apache2?fbclid=IwAR1_nXNQlrMIdJ5tilVUyr45xeiA91yw21vhnMxWHnuvY01VTd2FVR_T2ao  


  # Selected Option 
  **Option A:** Created a complex 3D structure (Abstract Sphere System) using Three.js.
  The model consists of:
  - Central Sphere
  - Orbit Ring
  - Secondary Sphere Planet
  - Animated rotation

  # Testing
  Tested on:
  1. Google Chrome (Version 144.0.7559.97) 	  - Works
  2. Safari (Version 26.2 (21623.1.14.11.9)) 	- Works

  # How to run
  1. Open index.html via Live Server.
  2. Allow camera access.
  3. Point camera at the "Hiro" marker image.