'use strict'

////state of the board.... 
function Board() {

    ////initial set up 
    let board = [];
    board.push(Project('inbox'));

    // const addProject = () => {
    // }

    const getBoard = () => board;

    return {
        getBoard,
    }

}



function Project(title) {
    let projects = [];

    const addTask = projects.push(Task());

    return {
        title: title,
        addTask, 
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

    const addTask = () => {
        
    };

    let activeProject = board.getBoard[0];

    const switchProjects = (e) => {
        const selectedProjectIndex = e.target.dataset.projectIndex;

        let activeProject = board.getBoard[selectedProjectIndex];        
    }


    
     
}

const butt = Task('a', 'b', 'd', 1, 'asdf')
console.log(butt);

const board = Board();
console.log(board.getBoard());


function screenController() {
    
    

}

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
2. use info to create task 
3. push task to project 
4. push project to board
5. updateScreen

UPDATESCREEN
1. clear board
2. getBoard
3. create elements.. set up display  


SWITCH BETWEEN PROJECTS... 



*/
