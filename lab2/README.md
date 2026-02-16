# mediaLab2

This lab aims to build your first Virtual reality (VR) app.

There are many open source alternatives to build virtual reality application. One of the web based solution is A-frame. You can try a live examples: https://aframe.io/aframe/examples/

# Requirements for repository
  - You have to clone this repository and make two branches (master and develop).
  - The develop branch should contain commits of every new feature of the VR application.
  - When all features will be ready you have to merge the development branch to the master.

# Requirements for VR application
  - You have to update A-frame version 0.6.0 to the newest with the point cloud plugin.
  - There are two models provided in the task. Leave only one model and add matching background. If you do not like existing surroundings / models - customize as you like.
  - Implement at least three features in the index.html like control panel to rotate, shift/move, zoom in/out, button to load object or any other function. Panel examples are available at: https://rdub80.github.io/aframe-gui/examples/all_components.html
  - Test application on at least two browsers and specify in README.md which version and browser it was.
  - Additional features are welcome and bonuses are available.
  - To pass this lab, you have to complete at least two points from the requirement list.  
  
# Important notes
  - It might be the case, that web server will be need to run VR application. 
  - You can try to use Apache: https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md 
  - Tomcat: http://androidsrc.net/installing-tomcat8-raspberry-pi-3/ 
  - HFS: http://www.rejetto.com/hfs/ or any other server.

  

# Testing
  App was tested on:
  1. Google Chrome (Version 144.0.7559.97) 	  - Works
  2. Safari (Version 26.2 (21623.1.14.11.9)) 	- Works
# Features implemented
  1. Orbit Controls for camera.
  2. Object auto-rotation.
  3. UI Button to reset rotation.