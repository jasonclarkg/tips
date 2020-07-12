import React from 'react'
import { get } from 'axios'
import {EntryComponent} from '../entry'
import {TableComponent} from '../table'

const getUserList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const MainComponent = () => {
    return (
        <div>
            <EntryComponent/>
            <TableComponent/>
        </div>
    )
}

{/* <>
<form autoComplete="off" onSubmit={handleInputForm}>
    <div className="form-group">
        <div className="input-group-prepend">   
            </div>
                <div>
                    <label>Name</label>  
                    <input className="form-control" required placeholder="Input Text" name="compname"
                    value={user.compname} 
                    onChange={handleInputChange}
                    />
                </div>
            </div>
    
    <div className="form-group">
        <div className="input-group-prepend">   
            </div>
                <div>
                    <label>Email</label>
                    <input type="email" required className="form-control" placeholder="Input Text" name="email"
                    value={user.email} 
                    onChange={handleInputChange}
                    />
                </div>
             </div>

    <div className="form-group">
        <div className="input-group-prepend">
            </div>
                <div>   
                    <label>Contact</label>
                    <input type="tel" id ="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="Format: 123-456-7890" required name="contact"
                    value={user.contact} 
                    onChange={handleInputChange}
                    />
                </div>
            </div>

        <div className="form-group">
            <input type="submit" value={props.id===''? "Add" : "Update"} />
        </div>
    </form>
</> */}