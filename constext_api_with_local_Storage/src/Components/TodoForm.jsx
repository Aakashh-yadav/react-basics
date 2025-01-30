function TodoForm() {
  const [title, setTitle] = useState("");
  const {addtodo} = useTodoContext();
  const addTodo = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo({
      title,
      // / This is the newer way of writing title:title because the key and value are
      //  the same this is the shorter way of writing it./
      completed: false,
    });
    setTitle("");
  };
  return (
    <form onSubmit={addTodo} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
