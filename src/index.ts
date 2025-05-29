import './styles/main.scss';
import tools from '../data/tools.json';

interface BuildTool {
  name: string;
  what: string;
}

function displayBuildTools() {
  const toolDisplayDiv = document.querySelector('.tool-display');
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

document.addEventListener('DOMContentLoaded', function () {
  displayBuildTools();
});
