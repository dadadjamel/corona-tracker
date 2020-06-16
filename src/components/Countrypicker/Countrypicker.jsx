import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core"
import styles from "./Countrypicker.module.css"
import { countries } from '../../api'

const Countrypicker = ({handlecountruchange}) => {

    const [countriesall, setcountriesall] = useState([])

    useEffect(() => {
        const getCountires = async () => {
            setcountriesall(await countries())
        }

        getCountires()
    }, [setcountriesall])

    console.log(countriesall);


    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect onChange={(e)=>handlecountruchange(e.target.value)}>
                <option value="global">Global</option>
                {countriesall.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default Countrypicker;