import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fvolyzqnkqdecedifqze.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2x5enFua3FkZWNlZGlmcXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNTIwNTAsImV4cCI6MTk5OTgyODA1MH0.MDX6b5gHzGDIv-gg5HwZeAGDCdYHXfDACnUFpaxu2mY";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);
  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <>
      <div className="bg-slate-700 h-screen">
        <img
          src={logo}
          alt="react-logo"
          className="animate-[spin_5s_linear_infinite] flex justify-center w-screen h-20"
        ></img>
        <h1 className="bg-slate-500 p-5 text-3xl font-bold flex justify-center">
          App Title
        </h1>
        <div className="flex justify-center pt-5 text-white">
          <ul>
            {countries.map((country) => (
              <li key={country.name}>{country.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
