import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get("https://lab-term-search-backend.onrender.com/search", {
    params: { query, limit: 10 },
    });
      setResults(res.data.results);
    } catch (err) {
      console.error(err);
      alert("Error fetching results");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Lab Term Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="🔍 Search for a lab test (e.g., sugar test, thyroid)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {results.length > 0 && (
        <p style={{ color: "#4a5568", marginBottom: "20px" }}>
          Showing {results.length} results for <strong>"{query}"</strong>
        </p>
      )}

      {results.length > 0 && (
        <div className="results">
          {results.map((item, idx) => (
            <div key={idx} className="result-card">
              <h3>{item.component}</h3>
              <p><strong>LOINC:</strong> {item.loinc}</p>
              <p><strong>Long Name:</strong> {item.long_common_name}</p>
              {item.related_names?.length > 0 && (
                <p><strong>Related Names:</strong> {item.related_names.join(", ")}</p>
              )}
              {item.example_units && (
                <p><strong>Units:</strong> {item.example_units}</p>
              )}
              <p><strong>Confidence:</strong> {item.score}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <p style={{ textAlign: "center", color: "#718096" }}>
          No results found for <strong>"{query}"</strong>
        </p>
      )}
    </div>
  );
}

export default App;
