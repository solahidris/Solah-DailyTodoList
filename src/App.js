import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fvolyzqnkqdecedifqze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2x5enFua3FkZWNlZGlmcXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNTIwNTAsImV4cCI6MTk5OTgyODA1MH0.MDX6b5gHzGDIv-gg5HwZeAGDCdYHXfDACnUFpaxu2mY";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [inputdata, setInputdata] = useState([]);
  const [editingId, setEditingId] = useState(null); // state variable to keep track of the edited item
  const [editedValue, setEditedValue] = useState(""); // state variable to keep track of the edited value

  useEffect(() => {
    getInputdata();
  }, []);

  async function getInputdata() {
    const { data } = await supabase.from("inputdata").select();
    setInputdata(data);
  }

  const deleteButtonHandler = async (id) => {
    console.log("delete button working");
    // eslint-disable-next-line
    const { data, error } = await supabase
      .from("inputdata")
      .delete()
      .eq("id", id); // delete only id item
  };

  const additemHandler = async () => {
    console.log("add button working");
    // eslint-disable-next-line
    const { data, error } = await supabase
      .from("inputdata")
      .insert([{ todo: "" }]);
  };

  const editButtonHandler = async (id) => {
    console.log("edit button working");
    // eslint-disable-next-line
    const { data, error } = await supabase
      .from("inputdata")
      .update({ todo: editedValue })
      .eq("id", id);
    setEditingId(null); // stop editing after saving changes
  };

  const clearButtonHandler = async () => {
    console.log("clear button working");
    // eslint-disable-next-line
    const { data, error } = await supabase
    .from('inputdata')
    .delete()
    .not('todo', 'eq', 'Do not delete me');
  };

  return (
    <>
      <div className="bg-slate-700 h-screen p-10">
        <img
          src={logo}
          alt="react-logo"
          className="mb-5 animate-[spin_5s_linear_infinite] flex justify-center w-screen h-20"
        ></img>
        <h1 className="rounded-lg bg-slate-500/80 p-5 text-3xl text-slate-300 font-mono font-bold flex justify-center">
          Paa Eltit
        </h1>
        <div className="pt-5 text-slate-400 font-mono">
          <div className="bg-slate-500/50 p-8 rounded-lg">
            <ul>
              {inputdata.map((list) => (
                <li key={list.id} className="flex items-center mb-3">
                  {editingId === list.id ? (
                    <input
                      type="text"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="bg-slate-300 rounded-lg py-1 px-3 text-slate-600/80"
                    />
                  ) : (
                    <span className="bg-slate-500/20 text-slate-300 py-1 px-3 rounded-lg">
                      {list.todo}
                    </span>
                  )}
                  {editingId === list.id ? (
                    <button
                      className="rounded-full bg-green-600/90 text-white px-[5px] h-full ml-3"
                      onClick={() => editButtonHandler(list.id)}
                    >
                      ✅
                    </button>
                  ) : (
                    <button
                      className="rounded-full bg-slate-100/50 text-white px-[5px] h-full ml-3"
                      onClick={() => {
                        setEditingId(list.id);
                        setEditedValue(list.todo);
                      }}
                    >
                      📝
                    </button>
                  )}
                  <button
                    className="justify-items-end rounded-full bg-red-500/90 text-white px-[7px] h-full ml-3"
                    onClick={() => deleteButtonHandler(list.id)}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="rounded-full bg-slate-500/90 text-white text-xs py-1 px-3 mt-7"
              onClick={additemHandler}
            >
              add
            </button>
            <button
                    className="rounded-full bg-slate-500/90 text-white text-xs py-1 px-3 ml-3 mt-7"
                    onClick={() => clearButtonHandler()}
                  >
                    clear all
                  </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
