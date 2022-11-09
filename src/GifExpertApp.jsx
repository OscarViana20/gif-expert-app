import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z'])

    const onAdCategory = (newCategory) => {

        if ( categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ onAdCategory }/>
            
            { 
                categories.map((category) => 
                    (
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            }
        </>
    )
}
