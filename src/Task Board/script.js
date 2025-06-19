const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task-input');
const taskLists = document.querySelectorAll('.task-list');
const STORAGE_KEY = 'vanilla-task-board';

// Load from localStorage
let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  todo: [], 'in-progress': [], done: []
};

// Create task element
function createTaskElement(id, text) {
  const task = document.createElement('div');
  task.className = 'task';
  task.draggable = true;
  task.dataset.id = id;

  // Handle
  const handle = document.createElement('span');
  handle.className = 'handle';
  handle.innerHTML = '&#x2630;';
  task.appendChild(handle);

  // Content
  const content = document.createElement('span');
  content.className = 'content';
  content.textContent = text;
  task.appendChild(content);

  // Controls
  const controls = document.createElement('div');
  controls.className = 'controls';
  const editBtn = document.createElement('button');
  editBtn.textContent = '✎';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  controls.append(editBtn, deleteBtn);
  task.appendChild(controls);

  // Drag events
  task.addEventListener('dragstart', () => {
    task.classList.add('dragging');
    taskLists.forEach(l => l.classList.remove('drag-over'));
  });
  task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
    saveState();
  });

  // Edit
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit task:', content.textContent);
    if (newText !== null) {
      content.textContent = newText.trim();
      saveState();
    }
  });

  // Delete
  deleteBtn.addEventListener('click', () => {
    if (confirm('Delete this task?')) {
      task.remove();
      saveState();
    }
  });

  return task;
}

// Render all tasks
function render() {
  for (let column of Object.keys(state)) {
    const listEl = document.getElementById(column);
    listEl.innerHTML = '';
    state[column].forEach(({ id, text }) => {
      listEl.appendChild(createTaskElement(id, text));
    });
  }
}

// Save to localStorage
function saveState() {
  // rebuild state from DOM
  for (let column of Object.keys(state)) {
    const items = [];
    document.querySelectorAll(`#${column} .task`).forEach(task => {
      items.push({ id: task.dataset.id, text: task.querySelector('.content').textContent });
    });
    state[column] = items;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Add new task
addTaskBtn.addEventListener('click', () => {
  const text = newTaskInput.value.trim();
  if (!text) return;
  const id = Date.now().toString();
  state.todo.push({ id, text });
  newTaskInput.value = '';
  render();
  saveState();
});

// Drag-and-drop handlers
taskLists.forEach(list => {
  list.addEventListener('dragover', e => {
    e.preventDefault();
    list.classList.add('drag-over');
    const dragging = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(list, e.clientY);
    if (!afterElement) list.appendChild(dragging);
    else list.insertBefore(dragging, afterElement);
  });

  list.addEventListener('dragleave', () => list.classList.remove('drag-over'));
  list.addEventListener('drop', () => {
    list.classList.remove('drag-over');
    saveState();
  });
});

// Helper to determine position
function getDragAfterElement(container, y) {
  const draggable = [...container.querySelectorAll('.task:not(.dragging)')];
  return draggable.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Initial render
render();
