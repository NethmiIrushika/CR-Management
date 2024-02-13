import Button from "./Button";
import CrCreate from "./CrCreate";
export default function Dashboard({crs}){
    function handleCrClick(crId) {
        // Navigate to the detailed view of the CR with the specified ID
        window.location.href = `/allCr`
      }
    return (
    <aside className="w-2/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">Your Dashboard</h2>
        <h2></h2>
        <div>
            <ul>
                {crs.map(cr => (
                <li key={cr.id}>
            {/* Display only the topic of the CR */}
            <button onClick={() => handleCrClick(cr.id)}>{cr.topic}</button>
            </li>
            ))}
            </ul>
        </div>
        
    </aside>
    );
    
}