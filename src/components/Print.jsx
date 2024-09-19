export default function Print({ children }) {
    
    return <button type='button' className="fixed bottom-0 right-0 border-solid border-2 rounded p-2 print:hidden" onClick={() => window.print()}>
        Print
    </button>
}