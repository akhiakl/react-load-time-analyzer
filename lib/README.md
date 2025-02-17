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

---

## 🛠 Usage

### **1️⃣ Using the `useRenderTime` Hook**
For functional components:
```tsx
import React from "react";
import { useRenderTime } from "react-load-time-analyzer";

const MyComponent = () => {
  useRenderTime("MyComponent");
  return <div>Hello, world!</div>;
};
```

### **3️⃣ Enabling the Performance Overlay**
Display real-time logs in an on-screen widget:
```tsx
import React from "react";
import { PerformanceProvider, PerformanceOverlay } from "react-load-time-analyzer";

const App = () => (
  <PerformanceProvider>
    <MyComponent />
    <MyClassComponent />
    <PerformanceOverlay />
  </PerformanceProvider>
);

export default App;
```

---

## 🛠 API Reference

### `useRenderTime(componentName: string)`
Tracks render performance of functional components.

### `<PerformanceProvider>`
Provides a global performance tracking context.

### `<PerformanceOverlay>`
Displays real-time render performance logs on-screen.

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
If you find this project useful, give it a ⭐ on [GitHub](https://github.com/your-repo)! 🚀

