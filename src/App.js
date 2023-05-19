import "./App.css";
import { useEffect, useState } from "react";
import supabase from "./components/supabase";
import ReactLogo from "./components/reactLogo";
import Header from "./components/header.js";
import AddButton from "./components/AddButton";
import ClearButton from "./components/ClearButton";
import DeleteListButton from "./components/DeleteListButton";
import EditListButton from "./components/EditListButton";
import EditDoneListButton from "./components/EditDoneListButton";
import InputEdit from "./components/InputEdit";

function App() {
  const [editingId, setEditingId] = useState(null); // state variable to keep track of the edited item
  const [editedValue, setEditedValue] = useState(""); // state variable to keep track of the edited value
  const [inputdata, setInputdata] = useState([]);

  useEffect(() => {
    getInputdata();
    // listen to all database changes
    supabase
      .channel("table-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "inputdata",
        },
        (payload) => {
          getInputdata();
        }
      )
      .subscribe();
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
      .from("inputdata")
      .delete()
      .not("todo", "eq", "Do not delete me");
  };

  return (
    <>
      <div className="bg-slate-700 h-screen p-8">
        <ReactLogo />
        <Header />

        <div className="pt-5 text-slate-400 font-mono max-w-md mx-auto">
          <div className="bg-slate-500/50 px-4 py-8 text-sm rounded-lg">
            <ul>
              {inputdata.map((list, index) => (
                <li key={list.id} className="flex items-center mb-3">
                  <div className="flex-grow">
                    {editingId === list.id ? (
                      <InputEdit
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                      />
                    ) : (
                      <span className="bg-slate-500/20 text-slate-300 py-1 px-3 rounded-lg">
                        {`${index + 1}) ${list.todo}`}
                      </span>
                    )}
                  </div>
                  {editingId === list.id ? (
                    <EditDoneListButton
                      onClick={() => editButtonHandler(list.id)}
                    />
                  ) : (
                    <EditListButton
                      onClick={() => {
                        setEditingId(list.id);
                        setEditedValue(list.todo);
                      }}
                    />
                  )}
                  <DeleteListButton
                    onClick={() => deleteButtonHandler(list.id)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <AddButton onClick={additemHandler} />
              <ClearButton onClick={clearButtonHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
