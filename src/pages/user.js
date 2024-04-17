import { useState } from 'react';
import { API_URL } from '../utils/constant';
import { useCookies } from 'react-cookie';

const User = () => {
    const [cookies] = useCookies(["token"]);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const [errosMess, setErrosMess] = useState("");

    async function addUser() {
        const response = await fetch(`${API_URL}/admin/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${cookies.token}`,
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                password_confirm: password_confirm,
                role: 1
            }),
        });

        if (response.status === 200) {
            const data = await response.json();
            setErrosMess(data.mes)
        } else {
            setErrosMess("Create user failed");
        }
    }

    return (
        <div className="bg-white w-4/5 m-auto pb-5 rounded-md">
            <div className="p-2">
                <div>Create User</div>
                <div className="flex">
                    <div className="flex-1">
                        <p>Username</p>
                        <input
                            className="outline-none p-2 border border-gray-300"
                            onChange={(e) => setUserName(e.target.value)}
                            value={username}
                        />
                    </div>
                    <div className="flex-1">
                        <p>Email</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="outline-none p-2 border border-gray-300"
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <p>Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="outline-none p-2 border border-gray-300"
                            type="password"
                        />
                    </div>
                    <div className="flex-1">
                        <p>Password confirm</p>
                        <input
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            value={password_confirm}
                            className="outline-none p-2 border border-gray-300"
                            type="password"
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <p>Role</p>
                        <select className="outline-none p-2 border border-gray-300">
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button onClick={addUser} className='p-2 bg-blue-600 text-white'>Add User</button>
                </div>
            </div>
            <p className='mt-4 text-base text-green-600'>
                {errosMess}
            </p>
        </div>
    );
}

export default User;
