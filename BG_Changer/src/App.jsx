function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" 
    style={{ backgroundColor: color }}>
      <div></div>
    </div>
  );
}

export default App;
