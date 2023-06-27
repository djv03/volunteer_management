import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetcheddata=async()=>{
            try {
                const response = await axios.get('http://localhost:3000/api/fetchvolunteer');
                setData(response.data);
                console.log(response.data)
            } catch (error) {
                console.log('error in fetching data',error)  
            }
        }
        fetcheddata()
    },[])
    return (
        <div>

            <ul className="max-w-md divide-y  divide-gray-200 dark:divide-gray-700">
                {data.map((item)=>{   
                   return <li  className="pb-3 flex sm:pb-4">
                           <div className="flex mx-4 min-w-0">
                            <p className="text-sm mx-4 font-medium text-gray-900 truncate dark:text-white">
                                name: {item.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.email}
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {item.age}
                        </div>
                        <div className="inline-flex mx-4 items-center text-base font-semibold text-gray-900 dark:text-white">
                        {item.phone}
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {item.role}
                        </div>
                        <div className="flex items-center space-x-4">
                        </div>
                    </li>
                    })}
            </ul>

        </div>
    )
}

// export async function getServerSideProps(context) {

//     if (!mongoose.connections[0].readyState) {

//         await mongoose.connect('mongodb+srv://Dhruvin:Dhruvin%40ir@cluster0.ukjigl4.mongodb.net/')
//             .then(() => { console.log('mongoDB database connected sucessfully from India recycles > volunteers') })
//             .catch((err) => { console.log(err) });
//     }

//     let allvolunteers = await volunteers.find();
//     console.log('all dtaa is here:',allvolunteers)

//     return {
//         props: { allvolunteers }, // will be passed to the page component as props
//     };
// }

export default Dashboard
