// src/data/posts.js
export const posts = [
    {
      slug: "kanban-board",
      title: "How to create an awesome Kanban board using Dnd-kit",
      youtubeUrl: "https://www.youtube.com/embed/BRB8fNu6Uxc", // Example embed
      date: "2023-09-12",
      introduction:
        "In this post, we’ll create an awesome Kanban board using dnd-kit. We’ll cover prerequisites, project setup, and the drag-and-drop logic.",
      prerequisites: [
        "React 18+",
        "dnd-kit installed (`npm install @dnd-kit/core`)",
        "Basic understanding of React hooks",
      ],
      content: `
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
      slug: "nav-menu",
      title: "How to create an awesome navigation menu using Chakra UI and Framer Motion",
      youtubeUrl: "https://www.youtube.com/embed/zpOULjyy-n8", // Another embed
      date: "2023-08-10",
      introduction:
        "Learn how to build a responsive nav menu with animated transitions using Chakra UI and Framer Motion.",
      prerequisites: ["React 18+", "Chakra UI", "Framer Motion"],
      content: `
  ## Getting Started

  \`\`\`bash
  npm install @chakra-ui/react framer-motion
  \`\`\`

  Then, wrap your app with \`<ChakraProvider>\` in \`main.jsx\` or \`App.jsx\`.

  ## Code Example

  \`\`\`jsx
  import { ChakraProvider, Box } from '@chakra-ui/react';
  import { motion } from 'framer-motion';

  function NavMenu() {
    return (
      <Box as={motion.nav} initial={{ x: -100 }} animate={{ x: 0 }}>
        {/* Navigation Links */}
      </Box>
    );
  }
  \`\`\`
      `,
    },
    {
      slug: "three-fiber-intro",
      title: "How to create an awesome intro with React Three Fiber",
      youtubeUrl: "",
      date: "2023-07-15",
      introduction:
        "React Three Fiber lets you build 3D scenes using React. We'll create a simple rotating cube scene in this post.",
      prerequisites: ["React 18+", "react-three-fiber", "Three.js basics"],
      content: `
  ## Setup

  \`\`\`bash
  npm install three @react-three/fiber
  \`\`\`

  ## Scene Example

  \`\`\`jsx
  import { Canvas } from '@react-three/fiber';

  function Scene() {
    return (
      <Canvas>
        {/* Add Lights, Camera, Meshes */}
      </Canvas>
    );
  }
  \`\`\`

  You'll have a rotating cube with minimal code!
      `,
    },
    {
      slug: "optimizing-react-performance",
      title: "Optimizing React Performance with Memoization",
      youtubeUrl: "",
      date: "2023-06-20",
      introduction:
        "Learn how to use React.memo, useCallback, and useMemo to improve performance in large-scale applications.",
      prerequisites: ["React 18+", "Basic knowledge of React hooks"],
      content: `
  ## Why Performance Matters

  Large apps can become slow if we're not careful. React provides:

  1. \`React.memo\` for memoizing components.
  2. \`useCallback\` for memoizing callbacks.
  3. \`useMemo\` for memoizing expensive computations.

  ## Example

  \`\`\`jsx
  function MyComponent({ value }) {
    return <div>{value}</div>;
  }

  export default React.memo(MyComponent);
  \`\`\`
      `,
    },
    {
      slug: "styled-components-guide",
      title: "A Complete Guide to Styled Components",
      youtubeUrl: "https://www.youtube.com/embed/2LhoCfjm8R4",
      date: "2023-05-10",
      introduction:
        "Styled Components is a popular CSS-in-JS library for React. We'll explore its features and best practices.",
      prerequisites: ["React 18+", "npm install styled-components"],
      content: `
  ## Installation

  \`\`\`bash
  npm install styled-components
  \`\`\`

  ## Example

  \`\`\`jsx
  import styled from 'styled-components';

  const Button = styled.button\`
    background: #0070f3;
    color: #fff;
    padding: 0.5rem 1rem;
  \`;

  export default function App() {
    return <Button>Click me</Button>;
  }
  \`\`\`
      `,
    },
  ];
