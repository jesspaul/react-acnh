import { createContext, useEffect, useState } from 'react';

export const AcnhContext = createContext();

const AcnhContextProvider = (props) => {
    const BASE_URL = 'https://acnhapi.com/v1a';
    const [apiData, setApiData] = useState({});

    useEffect(() => {
        async function getAppData() {
            const endpoints = ['villagers', 'bugs', 'fish', 'sea', 'art', 'fossils', 'songs'];

            for (const point of endpoints) {
                try {
                    const data = await fetch(`${BASE_URL}/${point}`).then(res => res.json());
                    setApiData(prevState => ({
                        ...prevState,
                        [point]: data
                    }));
                } catch (error) {
                    console.log(error);
                }
            };
        }

        getAppData();
    }, []);

    return (
        <AcnhContext.Provider value={{apiData}}>
            {props.children}
        </AcnhContext.Provider>
    )
}

export default AcnhContextProvider;