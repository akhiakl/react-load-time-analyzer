# React Load Time Analyzer

Analyze and monitor the render times of your React components easily with **React Load Time Analyzer**. This lightweight library provides hooks and HOCs to track mounting, updating, and unmounting times, helping developers optimize performance.

## 🚀 Features
- 📊 **Measure Component Render Times**
- ⚡ **Supports Hooks**
- 🛠 **Real-time Overlay for Debugging**
- 📈 **Global Context for Logging Data**
- 📝 **Lightweight & Easy to Integrate**

---

## 📦 Installation

Install via npm:
```sh
npm install react-load-time-analyzer
```

or using yarn:
```sh
yarn add react-load-time-analyzer
```

or using pnpn:
```sh
pnpn add react-load-time-analyzer
```

---

## 🛠 Usage

### **1️⃣ Using the `usePerformanceProfiler` Hook**
The `usePerformanceProfiler` hook allows you to profile the render performance of a component. It provides profiling data including render times and phases.

#### Example

```tsx
import React, { useState } from 'react';
import { usePerformanceProfiler } from 'react-load-time-analyzer';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const profilingData = usePerformanceProfiler('MyComponent');

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <pre>{JSON.stringify(profilingData, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
```

### **2️⃣ Enabling the Performance Overlay**
Display real-time logs in an on-screen widget:
```tsx
import React from "react";
import { PerformanceProvider } from "react-load-time-analyzer";

const App = () => (
  <PerformanceProvider>
    <MyComponent />
    <MyClassComponent />
  </PerformanceProvider>
);

export default App;
```

### **4️⃣ Using the `PerFormanceProfiler` Component**
The `PerFormanceProfiler` component can be used to wrap any component you want to profile.

#### Example

```tsx
import React, { useState } from 'react';
import { PerFormanceProfiler } from 'react-load-time-analyzer';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <PerFormanceProfiler id="card">
        <div className="card">
          <button onClick={() => setCount(count + 1)}>count is {count}</button>
          <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
        </div>
      </PerFormanceProfiler>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
```

---

## 🛠 API Reference

### `usePerformanceProfiler(componentName: string)`
Profiles the render performance of a component, providing profiling data including render times and phases.

### `<PerformanceProvider>`
Provides a global performance tracking context.

### `<PerFormanceProfiler>`
Wraps any component you want to profile.

---

## 📌 Roadmap & Future Enhancements
- 📈 **React DevTools Integration**
- 📊 **Export Performance Data as JSON/CSV**
- 📉 **Graphical Visualization of Component Renders**
- 🔍 **Warnings for Slow Components**

---

## 🤝 Contributing
Contributions are welcome! To contribute:
1. **Fork** this repo.
2. Create a new **feature branch**.
3. **Commit** your changes.
4. Open a **pull request**.

---

## 📜 License
MIT License.

---

## ⭐ Show Your Support!
If you find this project useful, give it a ⭐ on [GitHub](https://github.com/akhiakl/react-load-time-analyzer)! 🚀

