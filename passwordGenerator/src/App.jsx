import { useState, useCallback, useEffect, useRef } from "react"; // All hooks imported in one line for clarity

function App() {
  // useState to store password settings and the generated password
  const [length, setLength] = useState(6);             // State to manage length of password
  const [numAllowed, setNumAllowed] = useState(false); // State to allow numbers in password
  const [charAllowed, setCharAllowed] = useState(false); // State to allow special characters
  const [password, setPassword] = useState("");         // Final password state
  const [copied, setCopied] = useState(false);          // Shows copy feedback

  // useRef gives us direct access to the input DOM element (for copying the password)
  const passwordRef = useRef(null);

  /**
   * useCallback ensures this function is memoized — 
   * it won’t be recreated on every render unless its dependencies change.
   * This is an optimization technique.
   */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789"; // Include digits
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>/?`~"; // Include special characters

    for (let i = 1; i <= length; i++) {
      // Use Math.floor to avoid off-by-one error
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass); // Update password state

  }, [length, numAllowed, charAllowed]); // Only re-generate if these values change

  /**
   * useCallback for copying the password to clipboard.
   * Uses useRef to select the input and copy its value.
   */
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Highlight text in the input
    passwordRef.current?.setSelectionRange(0, 20); // Optional: limit copy range
    window.navigator.clipboard.writeText(password); // Copy to clipboard
    setCopied(true); // Show "Copied!" feedback
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  }, [password]);

  /**
   * useEffect runs once on mount and every time dependencies change.
   * It ensures the password is generated automatically when:
   * - page loads
   * - length, numAllowed, or charAllowed changes
   */
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 text-orange-600 bg-gray-800 mt-20">
        <h1 className="text-xl text-white text-center mb-4 font-bold">
          PASSWORD GENERATOR
        </h1>

        {/* Input + Copy Button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-gray-800"
            placeholder="Password"
            readOnly
            ref={passwordRef} // For copying the password
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 active:scale-90"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        {copied && <p className="text-green-400 text-sm mb-2">Copied!</p>}

        {/* Controls */}
        <div className="flex flex-col sm:flex-row text-sm gap-y-2 sm:gap-x-4">
          {/* Length Slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(parseInt(e.target.value)); // convert string to number
              }}
            />
            <label>Length : {length}</label>
          </div>

          {/* Number Toggle */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number {numAllowed ? "✓" : "✗"}</label>
          </div>

          {/* Character Toggle */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character {charAllowed ? "✓" : "✗"}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
