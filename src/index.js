'use strict'

import './style.css';
import inboxImg from './img/inbox.png';
import todayImg from './img/today.png';
import upComingImg from './img/upComing.png';
import addProjectImg from './img/addProject.png';




////state of the board.... 
function Board() {

    ////initial set up 
    let board = [];
    board.push(Project('inbox'));

    // const addProject = () => {
    // }

    const addProject = (title) => {
        board.push(Project(title))
    }

    const getProject = (projectTitle) => {
        const selectedProject = board.filter((project) => project.title === projectTitle);
        return selectedProject 
    }

    const addTask = (projectTitle, ...taskInputs) => {
        // const projectTitle = projectTitle;

        for (let i = 0; i< board.length; i++) {
            if (board[i].title === projectTitle) {
                board[i].tasks.push(Task(...taskInputs))
            }
        }

        console.log(board);

        return board   
    }

    // const addTask = (projectTitle) => {
    //     // const pickedProject = board.filter((project) => project.title === projectTitle)
        
    //     for (const project of board) {
    //         if (project.title === projectTitle) {
    //             project.push(task)
    //         }
    //     }
        
        
    // }

    const getBoard = () => board;

    return {
        getBoard, 
        addProject,
        addTask
    }

}



function Project(title) {
    let tasks = [];

    // const addTaskToProject = projects.push(Task(title, description, duedate, priority, notes));

    return {
        title: title,
        tasks
 
    }
}


function Task(title, description, dueDate, priority, notes) {

    // priority = [
    //     1,
    //     2,
    //     3,
    // ]

    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,

    }



}


function Controller() {
    let board = Board();
    let activeProjectTitle = board.getBoard()[0].title;
    console.log(activeProjectTitle);
    
    
    const switchProjects = (e) => {
        activeProjectTitle = e.target.dataset.title;

    }

    const addTask = (title, description, dueDate, priority, notes) => {
        board.addTask(activeProjectTitle, title, description, dueDate, priority, notes)
        
    };

    const getBoard = board.getBoard();


    return {
        addTask,
        getBoard
    }
     
}


// const butt = Task('a', 'b', 'd', 1, 'asdf')
// console.log(butt);

// const board = Board();
// console.log(board.getBoard());


function screenController() {

    const testing = Controller();
    testing.addTask(1,2,3,4,5)


    const updateScreen = () => {
        ////CLEAR////

        ////GET STUFF FROM BOARD////
        const board = testing.getBoard();


        ////select body 
        const body = document.querySelector('body');
    
        ////create header
        const header = document.createElement('header');
        body.appendChild(header);
    
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = 'ToDoList'
        header.appendChild(headerTitle);
    
        // const headerTitleHOne = document.createElement('h1');
        // headerTitleHOne.textContent = 'ToDoList'
        // headerTitle.appendChild(headerTitleHOne);
    
    
        ////create taskbar 
        const taskBar = document.createElement('div');
        taskBar.classList.add('taskBar');
        body.appendChild(taskBar);
    
    
        ////taskBarTop
        const taskBarTop = document.createElement('nav');
        taskBarTop.classList.add('taskBarTop');
        taskBar.appendChild(taskBarTop);
    
        const inbox = document.createElement('div');
        inbox.classList.add('taskBarTopContents');
        taskBarTop.appendChild(inbox);
    
        const inboxImgPNG = new Image();
        inboxImgPNG.src = inboxImg;
        inbox.appendChild(inboxImgPNG);
    
        const inboxHThree = document.createElement('h3');
        inboxHThree.textContent = 'Inbox'
        inbox.appendChild(inboxHThree);
    
    
        const today = document.createElement('div');
        today.classList.add('taskBarTopContents');
        taskBarTop.appendChild(today);
    
        const todayImgPNG = new Image();
        todayImgPNG.src = todayImg;
        todayImgPNG.classList.add('todayImgPNG')
        today.appendChild(todayImgPNG);
    
    
        const todayHThree = document.createElement('h3');
        todayHThree.textContent = 'Today'
        today.appendChild(todayHThree);
    
    
        const upComing = document.createElement('div');
        upComing.classList.add('taskBarTopContents');
        taskBarTop.appendChild(upComing);
    
    
        const upComingImgPNG = new Image();
        upComingImgPNG.src = upComingImg;
        upComingImgPNG.classList.add('upComingImgPNG');
        upComing.appendChild(upComingImgPNG);
    
    
        const upComingHThree = document.createElement('h3');
        upComingHThree.textContent = 'Upcoming'
        upComing.appendChild(upComingHThree);
    
    
        ////create Projects
        const projects = document.createElement('div');
        projects.classList.add('projects');
        taskBar.appendChild(projects);
    
        const projectsHTwo = document.createElement('h2');
        // projectsHTwo.classList.add('projectsContent')
        projectsHTwo.textContent = "Projects"
        projects.appendChild(projectsHTwo);
    
        const projectsNav = document.createElement('nav');
     
        projects.appendChild(projectsNav);
    
        const addProject = document.createElement('div');
        addProject.classList.add('projectsContent');
        projectsNav.appendChild(addProject);
    
        const addProjectImgPNG = new Image();
        addProjectImgPNG.src = addProjectImg;
        addProject.appendChild(addProjectImgPNG);
    
        const addProjectHThree = document.createElement('h3');
        addProjectHThree.textContent = 'Add Project';
        addProject.appendChild(addProjectHThree)
    
    
        ////create footer
        const footer = document.createElement('footer');
        body.appendChild(footer);
    
        const footerHThree = document.createElement('h3');
        footerHThree.textContent = 'this is a footer';
        footer.appendChild(footerHThree);
    
    
        ////create taskView
        const taskView = document.createElement('div');
        taskView.classList.add('taskView');
        body.appendChild(taskView);
    }

    //initial render 
    updateScreen();




}


console.log('------------------');


screenController();




/*


function Board() {
    //state of todolist

    board = []
    board.push(project('inbox'));    

    const getBoard = () => board;

    


}


function project(name) {

    project = [];

    const addTask = project.push(task());

    return {
        name: name;
    }
    
}


function task() {

    priority = [
        1,
        2,
        3
    ];

    return {
        title: title,
        description: description,
        duedate,
        priority,
        notes
        checklist
    }

}

screenController() {
    const controller = Controller();

    create html elements
    
    const updateScreen = () => {

    }


    function clickHandlerBoard(e) {
        //adding task.... 
        const title
        const description
        const duedate
        const priority
        const notes
        const checklist

        controller.addTask(input);
        updateScreen();


    }

    ////initial render
    updateScreen();



    
}

ADDING TASK
1. screen controller ask user for info
2. use info to createTask() in Controller
    1)task(input info here)
    2)push task to active project 
    3)if project already exists in board
        replace project in board() with changed project
      if project does not exist in board
        push project to board 
            give it id number... 
    
    4) 
3.  
3. push task to project 
4. push project to board
5. updateScreen

UPDATESCREEN
1. clear board
2. getBoard
3. create elements.. set up display  


SWITCH BETWEEN PROJECTS... 



*/
