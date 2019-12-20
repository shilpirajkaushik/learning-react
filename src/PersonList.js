import React,{Component} from 'react';
import Persons from './Person.js'


function PersonList(props) {
 	 let persons=props.persons.map((persons,i)=>{
 	 	return <persons key={i} name={persons.name} EmpId={persons.empId}/>
 	 	})
 return (
 	<div>{persons}</div>);


}




 	
export default PersonList;