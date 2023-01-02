import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { User } from "../../models/user";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`users?page=${page}`);

                setUsers(data.data);
                setLastPage(data.meta.last_page);
            }
        )()
    }, [page])

    const next = () => {
        setPage(page + 1)
    }

    const prev = () => {
        if (page >= 1) {
            setPage(page - 1);
        }
    }

    return (
        <Wrapper>
            <div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: User) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name} {user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role.name}</td>
                                        <td>{ }</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prev}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={next} >Next</a>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
}

export default Users;