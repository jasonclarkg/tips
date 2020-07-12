import React from 'react';

<>
        <div className="column">
            <div className="col-md-24">
                <ContactListForm {...({ addForm, id, object })}/>
            </div>
            <div className="col-md-24">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(object).map(id => {
                                return <tr key={id}>
                                    <td>{id}</td>
                                    <td>{object[id].compname}</td>
                                    <td>{object[id].email}</td>
                                    <td>{object[id].contact}</td>
                                    <td>
                                        <button onClick={()=> {setId(id)}}>
                                            Edit
                                        </button>
                                        
                                        <Link to="/detail/:id">
                                        <button >
                                            View
                                        </button>
                                        </Link>
                                        <button onClick={()=> {onDelete(id)}}>
                                            Delete
                                        </button>
                                        
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>