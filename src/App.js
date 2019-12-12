import React,{Component} from 'react';
import Header from './Header.js';

class App extends Component{
render()
{
let subscribers=[
  {
    id:1,
    name:"Kartik",
    phone:978057884
  },
  {
    id:2,
    name:"Varun",
    phone:937672808
  }
];
  
  return (
   <div>
    
   {/* <Header /> */}
   <Header heading="Phone Directory"></Header>{/*passed heading to header component as props*/}
     <div className="component-body-container">
       <button className="custom-btn add-btn">Add</button>
       <div className="grid-container heading-container">
         <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      
       </div>
       {
         subscribers.map(function(sub)
         {
           return <div key={sub.id} className="grid-container">
             <span className="grid-item">{sub.name}</span>
             <span className="grid-item">{sub.phone}</span>
             <span className="grid-item action-btn-container">
               <button className="custom-btn delete-btn">Delete</button>
               
             </span>
             </div>
         })
       }
     </div>
   </div>
  );
}
}

export default App;