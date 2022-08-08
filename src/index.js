'use strict'

import './style.css';
import inboxImg from './img/inbox.png';
import todayImg from './img/today.png';
import upComingImg from './img/upComing.png';
import addProjectImg from './img/addProject.png';
import checkMarkImg from './img/checkMark.png';





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
        const activeProject = board.filter((project) => project.title === projectTitle);
        return activeProject 
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


function Task(description, dueDate, priority, notes) {

    // priority = [
    //     1,
    //     2,
    //     3,
    // ]

    return {
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,

    }



}



function Controller() {
    ////initial set up
    let board = Board();
    let activeProject = board.getBoard()[0];
    console.log(activeProject);
        

    const getActiveProjectTitle = () => activeProject.title; 

    const getActiveProjectTasks = () => activeProject.tasks;
    console.log(getActiveProjectTasks());


    const switchProjects = (e) => {
        let board = board.getBoard();
        for (let i=0; i < board.length; i++) {
            if (board[i].title === e.target.dataset.title) {
                activeProject = board[i];
            }
        }
    }

    const addTask = (description, dueDate, priority, notes) => {
        board.addTask(getActiveProjectTitle(), description, dueDate, priority, notes)
        
    };


    const getBoard = () => board.getBoard();


    return {
        addTask,
        getBoard,
        getActiveProjectTitle,
        getActiveProjectTasks,
        switchProjects
    }
     
}


// const butt = Task('a', 'b', 'd', 1, 'asdf')
// console.log(butt);

// const board = Board();
// console.log(board.getBoard());


function screenController() {

    const toDoList = Controller();
    toDoList.addTask('asfed','06/05/25',3,4,5);
    toDoList.addTask('a','b','c','d','e');

    const board = toDoList.getBoard();
    console.log(board);
    
    const activeProjectTitle = toDoList.getActiveProjectTitle();


    const updateScreen = () => {
        ////CLEAR////

        ////GET STUFF FROM BOARD////
        const board = toDoList.getBoard();
        console.log(board);
        

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
        addProject.appendChild(addProjectHThree);


        ////create TASKVIEW////
        const taskView = document.createElement('div');
        taskView.classList.add('taskView');
        body.appendChild(taskView);

        ////showing which project is active
        const activeProject = document.createElement('h2');
        activeProject.classList.add('activeProject')
        activeProject.textContent = activeProjectTitle;
        taskView.appendChild(activeProject);

        ////tasks 
        const tasks = document.createElement('nav'); 
        tasks.classList.add('tasks');
        taskView.appendChild(tasks);

        ////create tasks list 
        toDoList.getActiveProjectTasks().forEach((activeTask) => {

            ////create task 
            const task = document.createElement('div');
            task.classList.add('task');
            tasks.appendChild(task);

            const checkMarkImgPNG = new Image();
            checkMarkImgPNG.src = checkMarkImg;
            task.appendChild(checkMarkImgPNG);


            ////task info 
            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = activeTask.description;
            task.appendChild(description);

            const dueDate = document.createElement('div');
            dueDate.classList.add('dueDate');
            dueDate.textContent = activeTask.dueDate;
            task.appendChild(dueDate);
            
            // const priority = document.createElement('div');
            // priority.classList.add('priority');
            // priority.textContent = activeTask.priority; 
            // task.appendChild(priority);

            // const notes = document.createElement('div');
            // notes.classList.add('notes');
            // notes.textContent = activeTask.notes;
            // task.appendChild(notes);



        })

       
        ////create addTask div

        const addTask = document.createElement('div');
        addTask.classList.add('addTask');
        addTask.textContent = '+ Add Task';
        tasks.appendChild(addTask);


        ////create footer
        const footer = document.createElement('footer');
        body.appendChild(footer);
    
        const footerHThree = document.createElement('h3');
        footerHThree.textContent = 'this is a footer';
        footer.appendChild(footerHThree);


    
    
    
    }

    //initial render 
    updateScreen();

    // const switchTaskView(e) {

    //     ////get taskBarTopContents
    //     const taskViewContents = document.querySelectorAll('.taskViewContents');

    //     const selectedTaskViewContents = document.getElementById(`${e.target.dataset.}`)



    // }




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
