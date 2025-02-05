import React,{useState, useEffect} from "react";

import './MenuList.css';
import MenuItem from './MenuItem';

const MenuList = (props) => {

    const [foodList, setFoodlist] = useState(props.foodList);

    useEffect(() => {
        setFoodlist(props.foodList)
    },[props.foodList]);

    const showList = props.showList === props.listName;

    const onShowList = async () => {

        let response = await fetch(`https://bakeryapp-138f0-default-rtdb.firebaseio.com/${props.listName}.json`);
        if(!response.ok)
        {
          throw new Error("could not add expense");
        }
        const data = await response.json();
        const mylist = [];
        for (const key in data) {
            mylist.push({   
                id:key,
                label:data[key].label,
                desc:data[key].desc,
                unit:data[key].unit,
                cost:data[key].cost
            });
        }

        setFoodlist(mylist);   
        props.onShowListChange(props.listName);
    };

    const listcontent = !showList ?
        (   <button className='listButton' onClick={onShowList}>+ {props.listName}</button> ) :
        (   <div className="listContainer">
                <h2>{props.listName}</h2>
                <ul>
                    {foodList.map(item => <MenuItem 
                        key={item.id}
                        label={item.label}
                        desc={item.desc}
                        cost={item.cost}
                        unit={item.unit}
                        listName={props.listName}
                    />)}
                </ul>
            </div>
        );

    return(
        listcontent
    );
};

export default MenuList;