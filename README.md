# mediaLab5

This lab aims to build video streaming app based on WebRTC framework.

Some good examples:
https://www.scaledrone.com/blog/webrtc-tutorial-simple-video-chat/


# Place all laboratory on the github.io.
  - ROOT folder should contain 5 folders (lab1, lab2, lab3, lab4 & lab5) and index.html.
  - index.html should have links to each folder.
  - Each folder should be prepared to load solution.

# Requirements for repository
  - You have to clone this repository and make two branches (master and develop).
  - The develop branch should contain commits of every new feature of the AR application.
  - When all features will be ready you have to merge the development branch to the master.

# Requirements for streaming application
There are two options to choose from. 

Option A:
  - Capture images from camera by using WebRTC API. Basic code for chat application is provided.
  - By using RTCPeerConnection send images from camera to the client and display them.
  - You can use base64 to encode image to string and decode on client side.
  
Option B:
  - Find out how WebRTC API is designed.
  - Create client and server pages.
  - Server page should capture video from browser.
  - Client page should display stream. 
  
  
The general requirements for option A & B.
  - Test application on at least two browsers and specify in README.md which version and browser it was.
  - To pass this lab, you have to fully complete an option.

## Implementation Details (Option B)

Tested on:
1. Google Chrome MacOS (Version 144.0.7559.97) 	    - Works
2. Safari (Version 26.2 (21623.1.14.11.9)) 	        - Works
1. Google Chrome Android (Version 144.0.7559.132) 	- Works