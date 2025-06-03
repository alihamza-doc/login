
import './mainpage.css'
const mainpage =()=>{
    return(
        <div className='container text-center pt-5  bg-light rounded mt-5 pb-5'>
            <a href="http://localhost:5173/signup"><button className='btn btn-primary mx-3'>SignUp</button></a>
            <a href="http://localhost:5173/login  "><button className='btn btn-primary mx-3'>LogIn</button></a>
        </div>
    )
}

export default mainpage;

