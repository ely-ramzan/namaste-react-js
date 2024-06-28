export default function Button ({text,color}) {
    
    return (
        <button
        type="button"
        className = "rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => {
        }}
        >
        {text}
        </button>
    );
}
