import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Paginator from '../../components/Paginator';
import Wrapper from '../../components/Wrapper';
import { Order } from '../../models/order';
import { OrderItem } from '../../models/order-item';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`orders?page=${page}`);

                setOrders(data.data);
                setLastPage(data.meta.last_page);
            }
        )();
    }, [page])

    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Total</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o: Order) => {
                            return (
                                <>
                                    <tr key={o.id}>
                                        <td>{o.name}</td>
                                        <td>{o.email}</td>
                                        <td>{o.total}</td>
                                        <td>
                                            <a href="#" className="btn btn-sm btn-outline-secondary">View</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}>
                                            <div>
                                                <table className='table table-sm'>
                                                    <thead>
                                                        <th>#</th>
                                                        <th>Product Title</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                    </thead>
                                                    <tbody>
                                                        {o.order_items.map((i: OrderItem) => {
                                                            return (
                                                                <tr>
                                                                    <td>{i.id}</td>
                                                                    <td>{i.product_title}</td>
                                                                    <td>{i.quantity}</td>
                                                                    <td>{i.price}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Paginator lastPage={lastPage} pageChanged={setPage} page={page} />
        </Wrapper>
    )
}

export default Orders;
