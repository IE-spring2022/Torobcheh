# Torobcheh
<br/>

![Image](https://github.com/Morteza-Kazemi/Othello-AI-player/blob/main/Othello.png)

This is the Internet Engineering course final project in Shahid Beheshti University done by Mohammad Javad Sahebnasi and Morteza Kazemi   
Winter 2021


<br/>

## 1.Overview


Torobcheh is a platform for E-commerce where different sellers can present their products and users can view the products' details,
shop links, etc. Users can also interract with products in other ways as well. 
Here is the project structure:

```
--- src
       |----- Back-End
       |           |--- config (database and encryption configuration)
       |           |--- helper (some helper functions)
       |           |--- model  (contains all database schemas)
       |           |--- route  (contains all the endpoints)
       |           |--- app.js
       |
       |----- Front-End/torobcheh-front/src
                   |--- Agent_vs_agent
                   |--- Evolution
                   |--- Gene
                   |--- Gene
                   |--- Gene
                   |--- Gene
       
```

<br/>

## 2.Description

### 2.1. Frontend

Phase one was about implementing the logic of the code and GUI. For
this purpose, the “Logic” and “Gui” packages were implemented.
The “Othello_logic.py” contains everything about the logic of the Othello
game such as initializing the game board, checking valid movement
requests, performing a special movement, and everything that we need to
understand the end of the game ​and calculate the scores​. It also considers
the rules of the Othello game in every movement.
The “Othello_gui.py”, as it’s clear from its name, contains everything
about games’ graphical design using the “TKinter” library of python. This
file has an implementation of displaying everything that the user can see
when he/she runs the code and also it has a handler for valid clicks on
board. The components that are shown in the final window are defined
in the “Components.py”; Such as the gray board game, black and white
disks, scoreboard, and the color of the player ​whose turn it is​. The
components are defined in this file and used to display in the
“Othello_gui.py”.

### 2.2. Backend

Phase two was about the implementation of an intelligent agent to play
and decide like a human.
