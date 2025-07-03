# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


......................................................................................................................................................................................................................................................................................................

## Basic Concepts 

-> Things to know in frontend framework:

1) Flexbox
2) Grid
3) Responsiveness
4) Background color, textColor, hover

.............................................................................


// App.jsx or TailwindExamples.jsx
import React from 'react';

function TailwindExamples() {
  return (
    <div className="space-y-10 p-6 font-sans">
      {/* ---------------------------------------- */}
      {/* 1️⃣ Flexbox Layout (like inline-CSS using Tailwind) */}
      {/* ---------------------------------------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">1️⃣ Flexbox Layout</h2>
        <p className="mb-2 text-gray-600">This layout uses Tailwind's <code>flex</code>, <code>gap</code>, and utility padding classes:</p>
        <div className="flex gap-4 p-4 bg-gray-100 rounded">
          <div className="bg-blue-500 text-white p-2 rounded">Box 1</div>
          <div className="bg-green-500 text-white p-2 rounded">Box 2</div>
          <div className="bg-red-500 text-white p-2 rounded">Box 3</div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 2️⃣ Flexbox with justify-between */}
      {/* ---------------------------------------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">2️⃣ Flexbox (justify-between)</h2>
        <p className="mb-2 text-gray-600">This distributes boxes evenly with space between:</p>
        <div className="flex justify-between p-4 bg-gray-50 rounded">
          <div className="bg-red-500 text-white p-4">Red</div>
          <div className="bg-blue-500 text-white p-4">Blue</div>
          <div className="bg-green-500 text-white p-4">Green</div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 3️⃣ Grid Layout - 3 Columns */}
      {/* ---------------------------------------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">3️⃣ Grid Layout (3 Columns)</h2>
        <p className="mb-2 text-gray-600">This layout uses Tailwind's <code>grid grid-cols-3</code>:</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-red-500 text-white p-2">Red</div>
          <div className="bg-blue-500 text-white p-2">Blue</div>
          <div className="bg-yellow-500 text-black p-2">Yellow</div>
          <div className="bg-blue-500 text-white p-2">Blue</div>
          <div className="bg-green-500 text-white p-2">Green</div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 4️⃣ Grid with Custom Column Spans */}
      {/* ---------------------------------------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">4️⃣ Grid with Column Spans</h2>
        <p className="mb-2 text-gray-600">This uses a 10-column layout to mimic percentage widths:</p>
        <div className="grid grid-cols-10 gap-2">
          <div className="bg-red-500 text-white p-2 col-span-4">Red (40%)</div>
          <div className="bg-blue-500 text-white p-2 col-span-4">Blue (40%)</div>
          <div className="bg-yellow-500 text-black p-2 col-span-2">Yellow (20%)</div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 5️⃣ Flexbox with Width Percentages */}
      {/* ---------------------------------------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">5️⃣ Flexbox (Using % Widths)</h2>
        <p className="mb-2 text-gray-600">Using <code>w-[40%]</code> and <code>w-[20%]</code> for precise sizing:</p>
        <div className="flex gap-2">
          <div className="bg-red-500 text-white p-2 w-[40%]">Red (40%)</div>
          <div className="bg-blue-500 text-white p-2 w-[40%]">Blue (40%)</div>
          <div className="bg-yellow-500 text-black p-2 w-[20%]">Yellow (20%)</div>
        </div>
      </section>

      {/* ---------------------------------------- */}
      {/* 6️⃣ Responsive Design + Dark Mode */}
      {/* ---------------------------------------- */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6️⃣ Responsive Grid + Dark Mode</h2>
        <p className="mb-2 text-gray-600">1-column by default, becomes 3-column on <code>md</code>. Also changes color in dark mode:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-500 text-white p-4">Red</div>
          <div className="bg-blue-500 dark:bg-green-500 text-white p-4">Blue / Green (Dark)</div>
          <div className="bg-yellow-500 text-black p-4">Yellow</div>
        </div>
      </section>
    </div>
  );
}

export default TailwindExamples;
