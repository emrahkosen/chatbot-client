
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userSliceAction } from '../../store/user-slice';
import classes from "./Register.module.css";
const Register = props =>{
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const handleUsername = event => {
        const {value} = event.target;
        setName(value);
    };

    const registerUser = () => {
        dispatch(userSliceAction.setUser({username: name}));

    }

    return <>
        <div className={classes.register}>
            <input
                id="user-name"
                placeholder="Enter your name"
                name="userName"
                value={name}
                onChange={handleUsername}
                margin="normal"
              />
              <button type="button" onClick={registerUser}>
                    Connect
              </button> 
        </div>
    </>
};

export default Register;