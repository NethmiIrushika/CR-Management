import {React,  useState} from 'react';

export default function CrCreate() {
    const [crData, setCrData] = useState({
        topic: "",
        description: "",
        image: "",
        aprove: "",
        
    });
    function handleCrCreate(event){
        event.preventDefault();
        console.log(crData);
        alert ("Successfully Created Chage request");

        setTimeout(() => {
            window.location.href = "/crCreate";
        }, 1000);
       
    }

    function handleInputChange(identifier, value){
        setCrData(prevValues => ({
            ...prevValues,
            [identifier]: value
        }));
    }
  
    
    return (
        <div>
            <div>
                <h1 className='text-xl font-bold text-stone-900 my-4'>Change Request Management System</h1>
                <p className='text-stone-400 mb-4'> To create a change request please fill out fullowing form</p>
            </div>

            <div>
                <form onSubmit={handleCrCreate}>
                    <div className="control-row">
                        <div className="control no-margin">
                            <label htmlFor="Topic" className="text-sm font-bold uppercase text-stone-500" > Topic </label>
                            <input type="text" id="topic" name="topic" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                            value={crData.topic}
                            onChange={e => handleInputChange('topic', e.target.value)}/>
                        </div>
                        <div className="control no-margin">
                            <label htmlFor="description" className="text-sm font-bold uppercase text-stone-500">Description </label>
                            <input
                                id="description"
                                name="description"
                                className =  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                                value={crData.description} // Ensure value is always defined
                                onChange={e => handleInputChange('description', e.target.value)}
                                textarea 
                            />
                        </div>
                        <div className="control no-margin">
                            <label htmlFor="image" className="text-sm font-bold uppercase text-stone-500">Add Image </label>
                            <input type="file" id="image" name="image" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                            value={crData.image}
                            onChange={e => handleInputChange( 'image', e.target.value)} />
                        </div>
                        <div className="control no-margin">
                            <label htmlFor="approve" className="text-sm font-bold uppercase text-stone-500">Approved By   </label>
                            <input type="text" id="aprove" name="aprove" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                            value={crData.aprove}
                            onChange={e => handleInputChange('aprove', e.target.value)}/>
                        </div>
                        <br /> <br />
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 " >
                            Create 
                        </button>
                    </div>
                </form>
            </div>


        </div>



    );

}