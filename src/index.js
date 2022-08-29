'use strict'

import './style.css';
import inboxImg from './img/inbox.png';
import todayImg from './img/today.png';
import upcomingImg from './img/upcoming.png';
import addProjectImg from './img/addProject.png';
import checkMarkImg from './img/checkMark.png';
import flagImg from './img/flag.png';




////state of the board.... 
function Board() {

    ////initial set up 
    let board = [];
    board.push(Project('inbox', 0));
    board.push(Project('today', 1));
    board.push(Project('upcoming', 2));
 

    // const addProject = () => {
    // }

    const addProject = (title) => {
        board.push(Project(title))
    }

    // const getProject = (projectTitle) => {
    //     const activeProject = board.filter((project) => project.title === projectTitle);
    //     return activeProject 
    // }

    const addTask = (projectTitle, ...taskInputs) => {        
        console.log(`taskInputs`);        
        console.log(...taskInputs);
        

        for (let i = 0; i< board.length; i++) {
            if (board[i].title === projectTitle) {
                board[i].tasks.push(Task(...taskInputs))
            }
        }



        return board   
    }



    // const inputTaskPriority = (projectTitle, taskTitle, priority) => {
    //     /*
    //     1. select correct task
    //     2. input index to put into task.ChangePriority(i);
    //     */
        

    //     for (let i = 0; i< board.length; i++) {
    //         if (board[i].title === projectTitle) {
    //             for (let j=0; j < board[i].tasks.length; j++) {
    //                 if (board[i].title === taskTitle) {
    //                     board
                        
    //                 }
    //             }
                
    //         }
    //     }
        
    // }

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

    // const addTaskToProject = projects.push(Task(title, description, duedate, priority, description));

    return {
        title: title,
        // projectID: projectID,
        tasks
    }
}



function Task(title, dueDate, priority = 4, description) {

    const priorityList = [
        'p1',
        'p2',
        'p3',
        'p4'
    ]

    let selectedPriority = priorityList[priority-1];

    // setTimeout(() => {
    //     console.log(`this is selectedPriority = ${selectedPriority}`);
    // }, 3000)
    
    


    const getPriority = () => selectedPriority;

  

    return {
        title: title,
        dueDate: dueDate,
        selectedPriority,
        description: description,
        getPriority,
    }



}



function Controller() {
    ////initial set up
    let board = Board();

    let boardBoard = board.getBoard();
    let activeProject = board.getBoard()[0];


    console.log(`this is boardBoard`);
    console.log(boardBoard);
           

    let activeTask = activeProject.tasks;

        
    let getActiveProjectTitle = () => activeProject.title; 

    let getActiveProjectTasks = () => activeProject.tasks;


    board.addTask(getActiveProjectTitle(), 'asfed','06/05/25', '1', 'this is an example of task description');
    board.addTask(getActiveProjectTitle(), 'a','b','4','e');




    const switchProjects = (selectedProjectTitle) => {
        
        for (let i=0; i < boardBoard.length; i++) {
            if (boardBoard[i].title === selectedProjectTitle) {
       
                activeProject = boardBoard[i];
            }
        }

    }


    const switchTasks = (selectedTaskTitle) => {
        for (let i=0; i < getActiveProjectTasks().length; i++) {
            if (getActiveProjectTasks()[i].title === selectedTaskTitle) {

                activeTask = getActiveProjectTasks()[i];
            }
        }
    }


    const addTask = (title, dueDate, priority, description) => {
        board.addTask(getActiveProjectTitle(), title, dueDate, priority, description)
        
    };


    const addProject = (projectTitle) => {
        board.addProject(projectTitle)
    }


    const getBoard = () => board.getBoard();


    return {
        addTask,
        getBoard,
        getActiveProjectTitle,
        getActiveProjectTasks,
        switchProjects,
        addProject,
        switchTasks
    }
     
}



function screenController() {

    const toDoList = Controller();


    ////selecting
    const body = document.querySelector('body')  


    const updateScreen = () => {
        ////CLEAR////
        body.innerHTML ="";

        ////GET STUFF FROM BOARD////
        const board = toDoList.getBoard();

           

        let activeProjectTitle = toDoList.getActiveProjectTitle();
        console.log(`this is activeProjectTitle: ${activeProjectTitle}`);
        
   
    
        ////create header
        const header = document.createElement('header');
        body.appendChild(header);
    
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = 'ToDoList'
        header.appendChild(headerTitle);
    

    
        ////create taskbar 
        const taskBar = document.createElement('div');
        taskBar.classList.add('`task`Bar');
        body.appendChild(taskBar);
    
    
        ////taskBarTop
        const taskBarTop = document.createElement('nav');
        taskBarTop.classList.add('taskBarTop');
        taskBar.appendChild(taskBarTop);
    
        const inbox = document.createElement('div');
        inbox.classList.add('taskBarContents');
        inbox.classList.add('activeProject');
        inbox.dataset.projectTitle = 'inbox';
    
        taskBarTop.appendChild(inbox);
    
        const inboxImgPNG = new Image();
        inboxImgPNG.src = inboxImg;
        inboxImgPNG.dataset.projectTitle = 'inbox';
        inbox.appendChild(inboxImgPNG);
    
        const inboxHThree = document.createElement('h3');
        inboxHThree.textContent = 'Inbox'
        inboxHThree.dataset.projectTitle = 'inbox';
        inbox.appendChild(inboxHThree);
    
    
        const today = document.createElement('div');
        today.classList.add('taskBarContents');
        today.dataset.projectTitle = 'today';
        taskBarTop.appendChild(today);
    
        const todayImgPNG = new Image();
        todayImgPNG.src = todayImg;
        todayImgPNG.classList.add('todayImgPNG')
        today.appendChild(todayImgPNG);
    
    
        const todayHThree = document.createElement('h3');
        todayHThree.textContent = 'Today'
        today.appendChild(todayHThree);
    
    
        const upcoming = document.createElement('div');
        upcoming.classList.add('taskBarContents');
        upcoming.dataset.projectTitle = 'upcoming';
        taskBarTop.appendChild(upcoming);
    
    
        const upcomingImgPNG = new Image();
        upcomingImgPNG.src = upcomingImg;
        upcomingImgPNG.classList.add('upcomingImgPNG');
        upcoming.appendChild(upcomingImgPNG);
    
    
        const upcomingHThree = document.createElement('h3');
        upcomingHThree.textContent = 'Upcoming'
        upcoming.appendChild(upcomingHThree);
    
    
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

        ////create DOM elements for projects 
        for (let i=3; i < board.length; i++) {
  
            const projectsNavProject = document.createElement('div');
            projectsNavProject.classList.add('taskBarContents');

            ////user input title needed here.... use title to switch between tasks 
            projectsNavProject.dataset.projectTitle = `${board[i].title}`
         
            // ////projectTargetID is what will be used to switch between taskView 
            // projectsNavProject.dataset.projectTargetID = `${i}`;


            projectsNav.appendChild(projectsNavProject);


            const projectNavProjectHThree = document.createElement('h3');
            projectNavProjectHThree.textContent = `${board[i].title}`;
            projectsNavProject.appendChild(projectNavProjectHThree);


            
            
        }
        
    
        const addProject = document.createElement('div');
        addProject.classList.add('projectsContent');
        projectsNav.appendChild(addProject);
    
        const addProjectImgPNG = new Image();
        addProjectImgPNG.src = addProjectImg;
        addProject.appendChild(addProjectImgPNG);
    
        const addProjectHThree = document.createElement('h3');
        addProjectHThree.textContent = 'Add Project';
        addProject.appendChild(addProjectHThree);

        addProject.addEventListener('click', openProjectForm);
        


        ////create TASKVIEW////
        const taskView = document.createElement('div');
        taskView.classList.add('taskView');
        body.appendChild(taskView);

        ////showing which project is active
        const activeProjectHeading = document.createElement('h2');
        activeProjectHeading.classList.add('activeProjectHeading');
        console.log(`this is activeProjectTitle: ${activeProjectTitle}`);
        
        activeProjectHeading.textContent = activeProjectTitle;
        taskView.appendChild(activeProjectHeading);


        ////tasks 
        const tasks = document.createElement('nav'); 
        tasks.classList.add('tasks');
        taskView.appendChild(tasks);

        

        ////create tasks list 
        toDoList.getActiveProjectTasks().forEach((activeTask) => {

            ////create task 
            const task = document.createElement('div');
            task.classList.add('task');
            task.dataset.taskTitle = activeTask.title;
            tasks.appendChild(task);

            const checkMarkImgPNG = new Image();            
            checkMarkImgPNG.src = checkMarkImg;
            checkMarkImgPNG.classList.add('checkMarkImgPNG');
            // checkMarkImgPNG.style.backgroundColor = 'red';

            
            if (activeTask.selectedPriority === 'p1') {

                
                checkMarkImgPNG.style.backgroundColor ='red';
            }   else if (activeTask.selectedPriority === 'p2') {
                checkMarkImgPNG.style.backgroundColor ='orange';
            }   else if (activeTask.selectedPriority === 'p3') {
                checkMarkImgPNG.style.backgroundColor ='skyblue';
            }   else if (activeTask.selectedPriority === 'p4') {
                checkMarkImgPNG.style.backgroundColor ='none';
            }


            task.appendChild(checkMarkImgPNG);

            const taskTitle = document.createElement('h3');
            taskTitle.classList.add('taskTitle');
            taskTitle.textContent = activeTask.title;
            task.appendChild(taskTitle);

            const taskDueDate = document.createElement('div');
            taskDueDate.classList.add('taskDueDate');
            taskDueDate.textContent = activeTask.dueDate;
            task.appendChild(taskDueDate);

            task.dataset.priority = activeTask.priority;

            const taskDescription = document.createElement('p');
            taskDescription.classList.add('taskDescription');
            taskDescription.textContent = activeTask.description;
            task.appendChild(taskDescription);
            

            
            // const priority = document.createElement('div');
            // priority.classList.add('priority');
            // priority.textContent = activeTask.priority; 
            // task.appendChild(priority);

            // const description = document.createElement('div');
            // description.classList.add('description');
            // description.textContent = activeTask.description;
            // task.appendChild(description);



        })

       
        ////create addTask div

        const addTask = document.createElement('div');
        addTask.classList.add('addTask');
        addTask.textContent = '+ Add Task';
        tasks.appendChild(addTask);

        addTask.addEventListener('click', openTaskForm);



        ////create footer
        const footer = document.createElement('footer');
        body.appendChild(footer);
    
        const footerHThree = document.createElement('h3');
        footerHThree.textContent = 'this is a footer';
        footer.appendChild(footerHThree);


        ////create userForm - addproject
        const addProjectForm = document.createElement('div');
        addProjectForm.id = 'addProjectForm';
        body.appendChild(addProjectForm);

        const addProjectFormUser = document.createElement('form');
        addProjectFormUser.classList.add('addProjectFormUser');
        // addProjectFormUser.style.height = '100%';
        addProjectForm.appendChild(addProjectFormUser);

        const addProjectFormUserHeading = document.createElement('div');
        addProjectFormUserHeading.classList.add('addProjectFormUserHeading');
        addProjectFormUser.appendChild(addProjectFormUserHeading);
        
        const addProjectFormUserHeadingHTwo = document.createElement('h2');
        addProjectFormUserHeadingHTwo.textContent = 'Add Project';
        addProjectFormUserHeading.appendChild(addProjectFormUserHeadingHTwo);

        const addProjectFormUserBody = document.createElement('div');
        addProjectFormUserBody.classList.add('addProjectFormUserBody');
        addProjectFormUser.appendChild(addProjectFormUserBody);

        const addProjectFormUserUl = document.createElement('ul');
        addProjectFormUserUl.classList.add('addProjectFormUserUl');
        addProjectFormUserBody.appendChild(addProjectFormUserUl);

        const addProjectFormUserLiTitle = document.createElement('li');
        addProjectFormUserLiTitle.classList.add('addProjectFormUserLiTitle')
        addProjectFormUserUl.appendChild(addProjectFormUserLiTitle);

        const addProjectFormUserTitleLabel = document.createElement('label');
        addProjectFormUserTitleLabel.setAttribute('for', 'projectTitle');
        addProjectFormUserTitleLabel.textContent = 'Project Title ';
        addProjectFormUserLiTitle.appendChild(addProjectFormUserTitleLabel);
                
        const addProjectFormUserTitleInput = document.createElement('input');
        addProjectFormUserTitleInput.classList.add('addProjectFormTitleInput');
        addProjectFormUserTitleInput.setAttribute('type', 'text');  
        addProjectFormUserTitleInput.setAttribute('name', 'projectTitle');
   
        addProjectFormUserLiTitle.appendChild(addProjectFormUserTitleInput);


        const addProjectFormUserButtons = document.createElement('div');
        addProjectFormUserButtons.classList.add('addProjectFormUserButtons');
        addProjectForm.appendChild(addProjectFormUserButtons);

        const addProjectFormUserCancel = document.createElement('button');
        addProjectFormUserCancel.textContent = 'Cancel';
        addProjectFormUserButtons.appendChild(addProjectFormUserCancel);
        addProjectFormUserCancel.addEventListener('click', cancelProjectForm);
        
        
        const addProjectFormUserAdd = document.createElement('button');
        addProjectFormUserAdd.textContent = 'Add';
        addProjectFormUserButtons.appendChild(addProjectFormUserAdd);
        addProjectFormUserAdd.addEventListener('click', projectFormSubmit);



        ////create userForm - addTask
        const addTaskForm = document.createElement('div');
        addTaskForm.id = 'addTaskForm';
        body.appendChild(addTaskForm);

        const addTaskFormUser = document.createElement('form');
        addTaskFormUser.classList.add('addTaskFormUser');
        // addTaskFormUser.style.height = '100%';
        addTaskForm.appendChild(addTaskFormUser);

        const addTaskFormUserHeading = document.createElement('div');
        addTaskFormUserHeading.classList.add('addTaskFormUserHeading');
        addTaskFormUser.appendChild(addTaskFormUserHeading);
        
        const addTaskFormUserHeadingHTwo = document.createElement('h2');
        addTaskFormUserHeadingHTwo.textContent = 'Task Info';
        addTaskFormUserHeading.appendChild(addTaskFormUserHeadingHTwo);

        const addTaskFormUserBody = document.createElement('div');
        addTaskFormUserBody.classList.add('addTaskFormUserBody');
        addTaskFormUser.appendChild(addTaskFormUserBody);

        const addTaskFormUserUl = document.createElement('ul');
        addTaskFormUserUl.classList.add('addTaskFormUserUl');
        addTaskFormUserBody.appendChild(addTaskFormUserUl);

        const addTaskFormUserLiTitle = document.createElement('li');
        addTaskFormUserLiTitle.classList.add('addTaskFormUserLi')
        addTaskFormUserUl.appendChild(addTaskFormUserLiTitle);

        const addTaskFormUserTitleLabel = document.createElement('label');
        addTaskFormUserTitleLabel.setAttribute('for', 'taskTitle');
        addTaskFormUserTitleLabel.textContent = 'Task Title ';
        addTaskFormUserLiTitle.appendChild(addTaskFormUserTitleLabel);
                
        const addTaskFormUserTitleInput = document.createElement('input');
        addTaskFormUserTitleInput.classList.add('addTaskFormInput');
        addTaskFormUserTitleInput.classList.add('addTaskFormTitleInput');
        addTaskFormUserTitleInput.setAttribute('type', 'text');  
        addTaskFormUserTitleInput.setAttribute('name', 'taskTitle');
        addTaskFormUserLiTitle.appendChild(addTaskFormUserTitleInput);

        const addTaskFormUserLiDescription = document.createElement('li');
        addTaskFormUserLiDescription.classList.add('addTaskFormUserLi')
        addTaskFormUserUl.appendChild(addTaskFormUserLiDescription);

        const addTaskFormUserDescriptionLabel = document.createElement('label');
        addTaskFormUserDescriptionLabel.setAttribute('for', 'taskDescription');
        addTaskFormUserDescriptionLabel.textContent = 'Task Description ';
        addTaskFormUserLiDescription.appendChild(addTaskFormUserDescriptionLabel);
                
        const addTaskFormUserDescriptionInput = document.createElement('input');
        addTaskFormUserDescriptionInput.classList.add('addTaskFormInput');
        addTaskFormUserDescriptionInput.classList.add('addTaskFormDescriptionInput');
        addTaskFormUserDescriptionInput.setAttribute('type', 'text');  
        addTaskFormUserDescriptionInput.setAttribute('name', 'taskDescription');
        addTaskFormUserLiDescription.appendChild(addTaskFormUserDescriptionInput);

        const addTaskFormUserLiDueDate = document.createElement('li');
        addTaskFormUserLiDueDate.classList.add('addTaskFormUserLi')
        addTaskFormUserUl.appendChild(addTaskFormUserLiDueDate);

        const addTaskFormUserDueDateLabel = document.createElement('label');
        addTaskFormUserDueDateLabel.setAttribute('for', 'taskDueDate');
        addTaskFormUserDueDateLabel.textContent = 'Task DueDate ';
        addTaskFormUserLiDueDate.appendChild(addTaskFormUserDueDateLabel);
                
        const addTaskFormUserDueDateInput = document.createElement('input');
        addTaskFormUserDueDateInput.classList.add('addTaskFormInput');
        addTaskFormUserDueDateInput.classList.add('addTaskFormDueDateInput');
        addTaskFormUserDueDateInput.setAttribute('type', 'text');  
        addTaskFormUserDueDateInput.setAttribute('name', 'taskDueDate');
        addTaskFormUserLiDueDate.appendChild(addTaskFormUserDueDateInput);


        
        const addTaskFormUserButtons = document.createElement('div');
        addTaskFormUserButtons.classList.add('addTaskFormUserButtons');
        addTaskForm.appendChild(addTaskFormUserButtons);

        const addTaskFormUserPriority = document.createElement('div');
        addTaskFormUserPriority.classList.add('addTaskFormUserPriority')
        addTaskFormUserButtons.appendChild(addTaskFormUserPriority);

        const addTaskFormUserPriorityHeading = document.createElement('div');
        addTaskFormUserPriority.appendChild(addTaskFormUserPriorityHeading);

        const addTaskFormUserPriorityHeadingLabel = document.createElement('label');
        addTaskFormUserPriorityHeadingLabel.textContent = 'Priority';
        addTaskFormUserPriorityHeading.appendChild(addTaskFormUserPriorityHeadingLabel);

        const addTaskFormUserPriorityFlags = document.createElement('div');
        addTaskFormUserPriority.appendChild(addTaskFormUserPriorityFlags);

        
        for (let i=1; i<5; i++) {
            const flagImgPNG = new Image();
            flagImgPNG.src = flagImg;
            flagImgPNG.classList.add(`flagImgPNG${i}`);
            flagImgPNG.dataset.priority = i;
            flagImgPNG.addEventListener('click', selectPriorityClick);
            addTaskFormUserPriorityFlags.appendChild(flagImgPNG);
        }

        let priorityInput = 'p4';

 
  

        const addTaskFormUserCancel = document.createElement('button');
        addTaskFormUserCancel.textContent = 'Cancel';
        addTaskFormUserButtons.appendChild(addTaskFormUserCancel);

        addTaskFormUserCancel.addEventListener('click', cancelTaskForm);
                
        
        const addTaskFormUserAdd = document.createElement('button');
        addTaskFormUserAdd.textContent = 'Add';
        addTaskFormUserButtons.appendChild(addTaskFormUserAdd);
        
        addTaskFormUserAdd.addEventListener('click', taskFormSubmit);





        ////adding switchProject function to each line item 
        const taskBarContents = document.querySelectorAll('.taskBarContents');
        taskBarContents.forEach((taskBarContent) => {
            taskBarContent.addEventListener('click', switchProjectsClick)
        })
        console.log('switchProjectsClick event has been added')

    

    
    
        
    }


    function switchProjectsClick(e) {
        console.log('running switchProjectsClick');
        console.log(e.target);
        
        ////remove activeProject class from previous activeProject
        const taskBarContents = document.querySelectorAll('.taskBarContents');
        taskBarContents.forEach((taskBarContent) => {
            taskBarContent.classList.remove('activeProject')
        });

        console.log(e.target);
        
        ////add activeProject class to project that was just clicked on 
        e.target.classList.add('activeProject');
   

        ////grab the title from the project that was clicked on 
        const selectedProjectTitle = e.target.dataset.projectTitle;
        ////if what was clicked on doesn't have projectTitle, return 
        if (!selectedProjectTitle) return;

        toDoList.switchProjects(selectedProjectTitle);

        updateScreen();

    }


    const openProjectForm = function() {
        const addProjectForm = document.querySelector('#addProjectForm');
        addProjectForm.style.display = 'block';

    }

    // function openProjectForm() {
    //     const addProjectForm = document.querySelector('#addProjectForm');
    //     addProjectForm.style.display = 'block';
    // }


    function cancelProjectForm() {
        
        ////clearing any input made 
        const addProjectFormUserTitleInput = document.querySelector('.addProjectFormTitleInput')
        addProjectFormUserTitleInput.value='';

        const addProjectForm = document.querySelector('#addProjectForm');
        addProjectForm.style.display = 'none';
    }


    function projectFormSubmit() {
        const addProjectFormUserTitleInput = document.querySelector('.addProjectFormTitleInput');
        const projectTitle = addProjectFormUserTitleInput.value;

        toDoList.addProject(projectTitle);
        updateScreen();        
    }

        
    function addTask(title, dueDate, priority, description) {
        toDoList.addTask(title, dueDate, priority, description)

        
    }


    function openTaskForm() {
        const addTaskForm = document.querySelector('#addTaskForm');
        addTaskForm.style.display = 'block';
        
    }


    function cancelTaskForm() {
        const addTaskFormInputs = document.querySelectorAll('.addTaskFormInput');

        for (let addTaskFormInput of addTaskFormInputs) {
            addTaskFormInput.value = '';
        }

        const addTaskForm = document.querySelector('#addTaskForm');
        addTaskForm.style.display = 'none';

    }


    let taskPriority = '4';
    console.log(toDoList.getActiveProjectTasks());
    
    
    function selectPriorityClick(e) {
        taskPriority = e.target.dataset.priority;
        console.log('selectPriorityClick running');
                
        if (!taskPriority) return;

        
    }


    function taskFormSubmit() {
        const taskTitle = document.querySelector('.addTaskFormTitleInput').value;
        const taskDescription = document.querySelector('.addTaskFormDescriptionInput').value;
        const taskDueDate = document.querySelector('.addTaskFormDueDateInput').value;

        

        console.log(`this is priority: ${taskPriority}`);
        toDoList.addTask(taskTitle, taskDueDate, taskPriority, taskDescription)
        
        cancelTaskForm();
        updateScreen();


    }

    function switchTasksClick(e) {
        /*
        1. get Active project
        2. for... tasks, 
            if task.title === selectedTaskTitle
            change active Task 

        */
        

        ////grab the title from the task that was clicked on 
        const selectedTaskTitle = e.target.dataset.taskTitle;
        ////if what was clicked on doesn't have taskTitle, return 
        if (!selectedTaskTitle) return;

        toDoList.switchProjects(selectedTaskTitle);

        updateScreen();
       
      
    }




    

    // function editTask() {
    //     /*
    //     1. 
    


    //     */

    // }


  


 





    


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
        title: title,
        duedate,
        priority,
        description
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
        const title
        const duedate
        const priority
        const description
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
