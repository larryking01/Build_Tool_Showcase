import './styles/main.scss';
import tools from '../data/tools.json';

interface BuildTool {
  name: string;
  what: string;
}

function displayBuildTools() {
  const toolDisplayDiv = document.querySelector('.tool-display');
  // console.log( toolDisplayDiv );  //caused a linting error

  if (!toolDisplayDiv) return;

  toolDisplayDiv.innerHTML = '';
  tools.forEach((tool: BuildTool) => {
    toolDisplayDiv.innerHTML += `
            <div class="tool-item">
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${tool.what}</p>
            </div>
        `;
  });
}

// let darkStatus;  // caused a linting error
function toggleTheme() {
  const body = document.body;
  const toggleButton = document.querySelector('.toggle-btn');

  if (!toggleButton) return;

  toggleButton.addEventListener('click', function () {
    const isLightTheme = document.body.classList.contains('light');

    if (isLightTheme) {
      body.classList.replace('light', 'dark');
    } else {
      body.classList.replace('dark', 'light');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  displayBuildTools();
  toggleTheme();
});

export { displayBuildTools, toggleTheme };
