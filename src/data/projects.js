// src/data/projects.js
import m3f from "../assets/images/m3ffest1.png";
import dd from "../assets/images/dreamydraw.png";
import go from "../assets/images/getoutside.png";

export const projects = [
    {
      id: "m3f-festival",
      title: "M3F Festival",
      screenshotUrl: m3f,
      techStack: ["React.js", "HTML", "CSS"],
      description: `
        M3F Music Festival is a 100-percent nonprofit music festival with
        all proceeds from the Festival benefiting local Arizona nonprofit
         organizations.
      `,
      code:`
  ## Install project

  \`\`\`bash
  npm install
  npm run dev
  \`\`\`

  ## Code Overview

  We'll set up a basic **Kanban layout** with columns and cards. Each card is draggable within or between columns:

  - Drag columns around.
  - Reorder tasks.
  - Track state in React.

  > **Tip:** Keep tasks small and focused for easier management.

  You can read more in the [official docs](https://github.com/clauderic/dnd-kit).

  ## Layout setup

  \`\`\`jsx
  import { DndContext } from '@dnd-kit/core';

  function KanbanBoard() {
    return (
      <DndContext>
        {/* Columns and Cards */}
      </DndContext>
    );
  }

  export default KanbanBoard;
  \`\`\`
      `,
    },
    {
      id: "dreamydraw",
      title: "DreamyDraw",
      screenshotUrl: dd,
      techStack: ["React", "HTML", "CSS", "Framer-motion"],
      description: `
        The Dreamy Draw Music Festival is an annual two-day event in Scottsdale, Arizona, celebrating country, Americana, and folk music. Featuring performances from top national and local artists, the festival offers an immersive experience filled with great music, food, and Southwestern culture.
      `,
      code:`
  ## Install project

  \`\`\`bash
  npm install
  npm run dev
  \`\`\`

  ## Code Overview

  We'll set up a basic **Kanban layout** with columns and cards. Each card is draggable within or between columns:

  - Drag columns around.
  - Reorder tasks.
  - Track state in React.

  > **Tip:** Keep tasks small and focused for easier management.

  You can read more in the [official docs](https://github.com/clauderic/dnd-kit).

  ## Layout setup

  \`\`\`jsx
  import { DndContext } from '@dnd-kit/core';

  function KanbanBoard() {
    return (
      <DndContext>
        {/* Columns and Cards */}
      </DndContext>
    );
  }

  export default KanbanBoard;
  \`\`\`
      `,
    },
    {
      id: "get-outside",
      title: "Get OutSide",
      screenshotUrl:go,
      techStack: ["React", "Mongoose", "Expressjs", "Nodejs", "GraphQL", "Material UI"],
      description: `
        Get Outside is a full stack MERN application with a front end
              built with React. It is fully mobile responsive.
      `,
      code:`
  ## Install project

  \`\`\`bash
  npm install
  npm run dev
  \`\`\`

  ## Code Overview

  We'll set up a basic **Kanban layout** with columns and cards. Each card is draggable within or between columns:

  - Drag columns around.
  - Reorder tasks.
  - Track state in React.

  > **Tip:** Keep tasks small and focused for easier management.

  You can read more in the [official docs](https://github.com/clauderic/dnd-kit).

  ## Layout setup

  \`\`\`jsx
  import { DndContext } from '@dnd-kit/core';

  function KanbanBoard() {
    return (
      <DndContext>
        {/* Columns and Cards */}
      </DndContext>
    );
  }

  export default KanbanBoard;
  \`\`\`
      `,
    }
  ];
