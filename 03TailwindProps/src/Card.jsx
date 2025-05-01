// Component definition
// Optional: You can also destructure props directly like this:
// function Card({ title, Arr, obj, content }) { ... }
// That way, you don't need to write props.title, props.Arr, etc.
function card(props) {
    return (
        <>
            {/* Outer container with padding and gradient background */}
            <div className="mt-7 p-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">

                {/* Inner container with black background and responsive padding */}
                <div className="bg-black p-6 sm:p-10 rounded-xl">

                    <div>
                        {/* Title from props (string) */}
                        <h5 className="text-xl font-bold text-gray-200">{props.title}</h5>

                        {/* First item of the Arr array (optional chaining prevents errors if Arr is undefined) */}
                        <h6 className="text-xl font-bold text-gray-200">{props.Arr?.[0]}</h6>

                        {/* Accessing the 'subj' property of the obj object (also safe with optional chaining) */}
                        <h6 className="text-xl font-bold text-gray-200">{props.obj?.subj}</h6>

                        {/* Paragraph for content passed as prop */}
                        <p className="mt-2 text-sm text-gray-400">
                            {props.content}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

// Always use PascalCase for component names in React (e.g., Card instead of card)
export default card;
