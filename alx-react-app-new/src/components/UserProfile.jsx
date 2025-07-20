const UserProfile = (props) => {
   return (
    <div style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
        <h2 style={{color: 'blue'}}>{props.name}</h2>
        <p> Age: <span style={{fontWeight: 'bold', fontSize: '1rem'}}>{props.age}</span></p>
        <p>Bio: <span style={{fontWeight: '900', fontSize: '1.2rem'}}>{props.bio}</span></p>
    </div>
   ) 
}

export default UserProfile;