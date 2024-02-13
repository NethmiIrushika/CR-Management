import Button from "./Button.jsx";
export default function Home({onStartLogin}){
    return(
        <div className="mt-24 text-center w-2/3">
            <h1 className='text-xl font-bold text-stone-500 my-4'>Change Request Management System</h1>
            <p className='text-stone-400 mb-4'>Login to your account or Create a new one.</p>
            <p className='mt-8'>
                <Button onClick={onStartLogin}>LogIn</Button>
            </p>
        </div>
    );
}