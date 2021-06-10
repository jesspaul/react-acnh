import './Category.css';
import { useContext } from 'react';
import { AcnhContext } from '../../contexts/acnhapi';
import Card from '../../components/Card/Card';

const Category = () => {
    const { branch, apiData } = useContext(AcnhContext);

    let lowerBranch = branch.charAt(0).toLowerCase() + branch.slice(1);
    let optionArray = [];

    if (branch === 'Species' || branch === 'Gender' || branch === 'Personality') {
        apiData.villagers.forEach(vill => {
            if (!optionArray.includes(vill[lowerBranch])) {
                optionArray.push(vill[lowerBranch]);
            }
        });
        console.log(optionArray)
    }
    return (
        <div className="Category">
            Category Page for {branch}
            {
                branch === 'Species' || branch === 'Gender' || branch === 'Personality' ? (
                    optionArray.map((data, idx) => (
                        <Card 
                            data={data}
                            key={idx}
                        />
                    ))
                ) : (
                    apiData[lowerBranch].map((data, idx) => (
                        <Card 
                            data={data}
                            key={idx}
                        />
                    ))
                )
            }
        </div>
    );
}
 
export default Category;